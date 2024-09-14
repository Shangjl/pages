<template>
  <div style="display: flex;flex-direction: column">
    <div style="display: flex;gap: 20px">
      <el-upload
          :limit="1"
          :beforeUpload="beforeUpload"
      >
        <el-button size="small">现金银行明细上传</el-button>
      </el-upload>
      <el-upload
          :limit="1"
          :beforeUpload="beforeAliUpload"
      >
        <el-button size="small">支付宝上传</el-button>
      </el-upload>
      <el-button @click="handleCLickExport" size="small">导出</el-button>
    </div>
    <div style="display: flex;justify-content: space-between;gap: 20px">
      <el-table border v-if="showSystemTable" :data="filterSystemData" stripe style="width: 50%;" height="calc(100vh - 100px)">
        <el-table-column prop="date" label="时间" width="250"/>
        <el-table-column prop="objName" label="对象名称" width="250" show-overflow-tooltip/>
        <el-table-column prop="incomeAmount" label="收入金额"/>
        <el-table-column prop="disburseAmount" label="支出金额"/>
      </el-table>

      <el-table border v-if="showAliTable" :data="filterAliData" stripe style="width: 50%;" height="calc(100vh - 100px)">
        <el-table-column prop="createTime" label="交易创建时间" />
        <el-table-column prop="payTime" label="付款时间" />
        <el-table-column prop="counterparty" label="交易对方" show-overflow-tooltip/>
        <el-table-column prop="amount" label="金额（元）" />
        <el-table-column prop="incomeOrExpenditure" label="收/支"/>

      </el-table>
    </div>
  </div>
</template>
<script setup>
import { saveAs } from 'file-saver';
import {formatDate, parse} from 'date-fns'
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
  const workbook = new ExcelJS.Workbook();
  // 添加sheet
  const worksheet = workbook.addWorksheet('demo sheet');
  // 设置 sheet 的默认行高
  worksheet.properties.defaultRowHeight = 20;
  // 设置列
  worksheet.columns = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 32 },
    { header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 }
  ];

  // 添加行
  let list = [
    {id:1,name:'test1',DOB:'11'},
    {id:2,name:'test2',DOB:'22'},
    {id:3,name:'test3',DOB:'33'}
  ]

  worksheet.addRows(list);
  // 导出excel
  saveWorkbook(workbook, 'simple-demo.xlsx');

  filterAliData.filter(f => {
    const {amount, createTime,} = f
    filterSystemData.some(s => {
      let condition1 = s.incomeAmount === amount || s.incomeAmount === disburseAmount;
      let aliTime = s.payTime

      let condition2 = true
      return true
    })
  })

}

function saveWorkbook(workbook, fileName) {
  // 导出文件
  workbook.xlsx.writeBuffer().then(data => {
    const blob = new Blob([data], { type: '' });
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
      let filter = result.data.filter(f => isNumeric(f[0].substring(0, 5)));

      filterAliData.value = filter.map(m => {
        return {
          createTime: m[2],
          payTime: m[3],
          counterparty: m[7],
          amount: m[9],
          incomeOrExpenditure: m[10]
        }
      })
      showAliTable.value = true;

      let system = filterSystemData.value[0]
      let ali = filterAliData.value[0]
      console.log(system)
      console.log(ali)
      let systemDateStr = system.date.substring(0, system.date.lastIndexOf(':') + 3)
      let aliDateStr = ali.payTime.substring(0, ali.payTime.lastIndexOf(':') + 3)

      console.log(systemDateStr, aliDateStr)
      let systemDate = parse(systemDateStr, 'yyyy-MM-dd H:mm', new Date)
      let aliDate = parse(aliDateStr, 'yyyy/M/d H:mm', new Date)

      console.log('systemDate',systemDateStr, systemDate)
      console.log('aliDate',aliDateStr, aliDate)
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
      disburseAmount: m[9]
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
