<template>
  <div style="display: flex;height: 100vh;flex-direction: column;gap: 2em;padding: 1em;box-sizing: border-box">
    <div style="display: flex;gap: 20px;">
      <Upload name="现金银行"
              v-model="systemData"
              :filter="row => row?.[1]?.trim?.() === 'Indeterminate'"
              :map="row => {
                return {
                  date: row[2],
                  accountName: row[5],
                  incomeAmount: row[9],
                  disburseAmount: row[10],
                  orderRemark: row[13],
                  amount: row[9] + row[10],
                  dateStr: format(row[2], 'yyyy-MM-dd'),
                  //timeStr: row[13].replace(/[;；：.。“]/gi, ':').substring(0, 5),
                }
              }"
      />
    </div>
    <div style="display: flex;gap: 20px;">
      <Upload name="支付宝"
              v-model="outer.zhiFuBaoData"
              :filter="row => row?.[11]?.trim?.() === '交易成功'"
      />

    </div>

    <div style="display: flex;justify-content: center;gap: 2em">
      <el-button size="large" @click="handleCLickClear">清 空</el-button>
      <el-button type="primary" size="large" @click="handleCLickExport">导 出</el-button>
    </div>

  </div>
</template>
<script setup>
import Upload from '@/projects/excel-common/components/Upload/index.vue'
import ExcelJS from "exceljs";
import {writeZhiFuBaoCheckResultSheet} from "@/projects/excel-common/utils/ZhiFuBao/index.js";
import {downloadWorkBook} from "@/global/utils/excel.js";
import _ from 'lodash'
import {parse, format} from 'date-fns'
import usePublic from "@/composables/use-public.js";

const {Modal} = usePublic();

// 系统数据
const systemData = ref([]);
// 外部数据
const outer = ref({
  //支付宝
  zhiFuBaoData: [],

})

function handleCLickClear() {
  systemData.value = [];
  outer.value.zhiFuBaoData = []
  Modal.msg('已清空')
}

function handleCLickExport() {
  const systemDataAmountGroup = _.groupBy(systemData.value, 'amount');

  const workbook = new ExcelJS.Workbook();
  writeZhiFuBaoCheckResultSheet({
    workbook,
    systemDataAmountGroup,
    zhiFuBaoData: outer.value.zhiFuBaoData
  });
  downloadWorkBook({
    workbook,
    fileName: '参考.xlsx'
  })
}
</script>
<style>

</style>
