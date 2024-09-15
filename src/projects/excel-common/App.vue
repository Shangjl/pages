<template>
  <div style="display: flex;height: 100vh;flex-direction: column;overflow-y: hidden;
  margin: 1em 1em 0;box-sizing: border-box">
    <div style="display: flex;gap: 20px;justify-content: center;">
      <el-button @click="handleClickUploadSystem">现金银行明细上传</el-button>
      <el-button @click="handleClickUploadAli">支付宝上传</el-button>
      <el-button @click="handleCLickExport">导出</el-button>
    </div>
    <el-tabs v-model="activeName" >
      <el-tab-pane label="现金银行" name="first" >
        <el-table border :data="filterSystemData" stripe :ref="el => refsMap['system-table'] = el" :height="tableHeight" >
          <el-table-column prop="date" label="时间" width="250"/>
          <el-table-column prop="objName" label="对象名称" width="250" show-overflow-tooltip/>
          <el-table-column prop="incomeAmount" label="收入金额"/>
          <el-table-column prop="disburseAmount" label="支出金额"/>
          <el-table-column prop="amount" label="金额"/>
        </el-table>

      </el-tab-pane>
      <el-tab-pane label="支付宝" name="second">
        <el-table border :data="filterAliData" stripe :height="tableHeight" >
          <el-table-column prop="createTime" label="交易创建时间"/>
          <el-table-column prop="payTime" label="付款时间"/>
          <el-table-column prop="counterparty" label="交易对方" show-overflow-tooltip/>
          <el-table-column prop="amount" label="金额（元）"/>
          <el-table-column prop="incomeOrExpenditure" label="收/支"/>
        </el-table>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>
<script setup>
import {saveAs} from 'file-saver';
import {formatDate, format} from 'date-fns'
import ExcelJS from 'exceljs'
import _ from 'lodash'
import Debounce from "@/global/utils/debounce.js";
import PapaParse from "papaparse";
import {chooseFile} from "@/global/utils/index.js";
import usePublic from "@/composables/use-public.js";

const {refsMap} = usePublic();
const tableHeight = ref('calc(100vh - 100px)')
onMounted(() => {
  setTimeout(() => {
    const table = refsMap.value['system-table'];
    const rect = table.$el.getBoundingClientRect();
    console.log('table.$el', table.$el.offsetTop)
    tableHeight.value = `calc(100vh - ${rect.top}px)`
  }, 2000)

})
const acceptFile = ['.xlsx', '.csv']
const activeName = ref('first')

const filterSystemData = ref([])
const filterAliData = ref([])

async function handleClickUploadAli() {
  try {
    const file = await chooseFile({accept: acceptFile});
    PapaParse.parse(file, {
      /*header: true,
      skipEmptyLines: true,
      */
      encoding: "gb2312",
      complete: result => {
        let filter = result.data.filter(f => {
          return isNumeric(f[0].substring(0, 5)) && f[11].trim() !== '交易关闭'
        });

        filterAliData.value = filter.map(m => {
          return {
            time: (m[3] || m[2]).substring(10, 15).replace(':', ''),
            createTime: m[2],
            payTime: m[3],
            counterparty: m[7],
            amount: m[9],
            incomeOrExpenditure: m[10]
          }
        })

      },
    });
  } catch (e) {
    console.error(e)
  }
}

async function handleClickUploadSystem() {
  try {
    const file = await chooseFile({accept: acceptFile});
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(file);
    const worksheet = workbook.worksheets[0];

    worksheet.eachRow({includeEmpty: true}, (row, rowNumber) => {
      let curRowCellList = _.clone(row._cells.map(m => m.value));
      if (curRowCellList[1] && curRowCellList[1] !== '日期') {
        filterSystemData.value.push(curRowCellList)
        system()
      }
    })
  } catch (e) {
    console.error(e)
  }
}


function isNumeric(str) {
  return /^\d+$/.test(str);
}

function handleCLickExport() {

  let systemDictionary = _.groupBy(filterSystemData.value, 'amount');
  //console.log('dictionary', systemDictionary)
  let result = filterAliData.value.filter(ali => {
    // 没找到金额过滤出来
    let systemDictionaryElement = systemDictionary[ali.amount];
    if (!systemDictionaryElement) {
      console.log('支付宝没找到金额', ali)
      ali.reason = '没找到金额'
      return true
    }
    //找到金额 时间超过3分钟过滤出来
    let filter = systemDictionaryElement.filter(f => Math.abs(f.time - ali.time) < 3);
    if (!filter) {
      ali.reason = '间相差超过3分钟'
      console.log('支付宝时间相差超过3分组', ali)
      return true
    }
    return false
  });
  console.log('result', result)

  const workbook = new ExcelJS.Workbook();
  // 添加sheet
  const worksheet = workbook.addWorksheet('Sheet');
  // 设置 sheet 的默认行高
  worksheet.properties.defaultRowHeight = 20;
  // 设置列
  worksheet.columns = [
    {header: '交易创建时间', key: 'createTime', width: 22},
    {header: '付款时间', key: 'payTime', width: 22},
    {header: '交易对方', key: 'counterparty', width: 32},
    {header: '金额', key: 'amount', width: 20,},
    {header: '收/支', key: 'incomeOrExpenditure', width: 10,},
    {header: '原因', key: 'reason', width: 32,},
  ];

  worksheet.addRows(result);
  // 导出excel
  saveWorkbook(workbook, `参考-${format(new Date(), 'yyyyMMddHHmmss')}.xlsx`);
}

function saveWorkbook(workbook, fileName) {
  // 导出文件
  workbook.xlsx.writeBuffer().then(data => {
    const blob = new Blob([data], {type: ''});
    saveAs(blob, fileName);
  });
}


const system = Debounce(function () {

  filterSystemData.value = filterSystemData.value.map(m => {
    return {
      time: m[12].replace(/；|“|：|:|;|b/g, '').substring(0, 5),
      date: `${formatDate(m[1], 'yyyy-MM-dd')} ${m[12].replace(/；|“|：|;|b/g, ':')}`,
      objName: m[4],
      incomeAmount: m[8],
      disburseAmount: m[9],
      amount: m[8] + m[9]
    }
  })
  filterSystemData.value.sort((a, b) => {
    return b.time - a.time
  })
})
</script>
<style>

</style>
