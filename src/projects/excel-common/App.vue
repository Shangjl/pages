<template>
  <div style="display: flex;flex-direction: column">
    <div >
      <el-upload
          :limit="1"
          :beforeUpload="beforeUpload"
      >
        <el-button size="small">现金银行明细上传</el-button>
      </el-upload>
    </div>
    <el-table border v-if="showSystemTable" :data="filterSystemData" stripe style="width: 50%;" height="calc(100vh - 100px)">
      <el-table-column prop="date" label="时间" width="250"/>
      <el-table-column prop="objName" label="对象名称" width="250" show-overflow-tooltip/>
      <el-table-column prop="incomeAmount" label="收入金额"/>
      <el-table-column prop="expenditureAmount" label="支出金额"/>
    </el-table>
  </div>
</template>
<script setup>
import {formatDate} from 'date-fns'
import ExcelJS from 'exceljs'
import _ from 'lodash'
import Debounce from "@/global/utils/debounce.js";
import usePublic from "@/composables/use-public.js";

const {refsMap} = usePublic();
const showSystemTable = ref(false)
const filterSystemData = ref([])

async function beforeUpload(file) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(file);
  const worksheet = workbook.worksheets[0];

  worksheet.eachRow({includeEmpty: true}, (row, rowNumber) => {
    let curRowCellList = _.clone(row._cells.map(m => m.value));
    //curRowCellList = curRowCellList.filter(f => f[1] && f[9]);
    //console.log('curRowCellList', curRowCellList)
    if (curRowCellList[1] && curRowCellList[1] !== '日期') {
      filterSystemData.value.push(curRowCellList)
      test()
    }
  })
  return false
}

const test = Debounce(function () {
  /*filterSystemData.value.forEach(f => {
    let time = `${formatDate(f[1], 'yyyy-MM-dd')} ${f[12]}`
    console.log(time, f[4], f[7], f[9])
  })*/
  filterSystemData.value = filterSystemData.value.map(m => {
    return {
      date: `${formatDate(m[1], 'yyyy-MM-dd')} ${m[12].replace(/；|“|：|;|b/g, ':')}`,
      objName: m[4],
      incomeAmount: m[8],
      expenditureAmount: m[9]
    }
  })
  showSystemTable.value = true
})
</script>
<style>

</style>
