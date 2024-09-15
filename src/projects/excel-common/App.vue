<template>
  <div style="display: flex;height: 100vh;flex-direction: column">
    <div style="display: flex;gap: 20px;justify-content: center">
      <el-upload
          :limit="1"
          :beforeUpload="beforeUpload"
      >
        <el-button >现金银行明细上传</el-button>
      </el-upload>
      <el-upload
          :limit="1"
          :beforeUpload="beforeAliUpload"
      >
        <el-button>支付宝上传</el-button>
      </el-upload>
      <el-button @click="handleCLickExport">导出</el-button>
    </div>
<!--    <el-table border v-if="showSystemTable" :data="filterSystemData" stripe style="width: 1000px;"
              height="calc(100vh - 100px)">
      <el-table-column prop="date" label="时间" width="250"/>
      <el-table-column prop="objName" label="对象名称" width="250" show-overflow-tooltip/>
      <el-table-column prop="incomeAmount" label="收入金额"/>
      <el-table-column prop="disburseAmount" label="支出金额"/>
      <el-table-column prop="amount" label="金额"/>
    </el-table>
    <el-table border v-if="showAliTable" :data="filterAliData" stripe style="width: 1000px;"
              height="calc(100vh - 100px)">
      <el-table-column prop="createTime" label="交易创建时间"/>
      <el-table-column prop="payTime" label="付款时间"/>
      <el-table-column prop="counterparty" label="交易对方" show-overflow-tooltip/>
      <el-table-column prop="amount" label="金额（元）"/>
      <el-table-column prop="incomeOrExpenditure" label="收/支"/>
    </el-table>-->
  </div>
</template>
<script setup>
import {saveAs} from 'file-saver';
import {formatDate, format} from 'date-fns'
import ExcelJS from 'exceljs'
import _ from 'lodash'
import Debounce from "@/global/utils/debounce.js";
import Papaparse from "papaparse";

const showSystemTable = ref(false)
const showAliTable = ref(false)
const filterSystemData = ref([])
const filterAliData = ref([])

async function beforeUpload(file) {
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
  return false
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

async function beforeAliUpload(file) {

  Papaparse.parse(file, {
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
      showAliTable.value = true;
      console.log('filterAliData.value', filterAliData.value)
    },

  });
  return false
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
  showSystemTable.value = true
})
</script>
<style>

</style>
