<template>
  <div style="display: flex;height: 100vh;flex-direction: column;justify-content: center">
    <div style="display: flex;gap: 20px;justify-content: center;">
      <el-button @click="handleClickUploadSystem">现金银行明细上传</el-button>
      <el-button @click="handleClickUploadAli">支付宝上传</el-button>
      <el-button @click="handleCLickExport">导出</el-button>
    </div>

  </div>
</template>
<script setup>
import { format} from 'date-fns'
import _ from 'lodash'
import {chooseFile} from "@/global/utils/index.js";
import {exportExcel, importExcel, importCsv} from "@/global/utils/excel.js";
const acceptFile = ['.xlsx', '.csv']

const filterSystemData = ref([])
const filterAliData = ref([])

async function handleClickUploadAli() {
  const file = await chooseFile({accept: acceptFile});
  const result = await importCsv({
    file,
    filter: row => row?.[11]?.trim?.() === '交易成功'
  });
  console.log('result', result)
}

async function handleClickUploadSystem() {
  const file = await chooseFile({accept: acceptFile});
  const result = await importExcel({
    file,
    filter: row => row?.[1]?.trim?.() === 'Indeterminate'
  });
  console.log('result', result)
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

  exportExcel({
    columnsSetting: [
      {header: '交易创建时间', key: 'createTime', width: 22},
      {header: '付款时间', key: 'payTime', width: 22},
      {header: '交易对方', key: 'counterparty', width: 32},
      {header: '金额', key: 'amount', width: 20,},
      {header: '收/支', key: 'incomeOrExpenditure', width: 10,},
      {header: '原因', key: 'reason', width: 32,},
    ],
    rows: result,
    fileName: `参考-${format(new Date(), 'yyyyMMddHHmmss')}.xlsx`
  })

}


/*const system = Debounce(function () {

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
})*/
</script>
<style>

</style>
