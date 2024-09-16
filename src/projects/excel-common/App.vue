<template>
  <div style="display: flex;height: 100vh;flex-direction: column;gap: 2em;padding: 1em;box-sizing: border-box">
    <div style="display: flex;gap: 20px;">
      <Upload name="现金银行系统数据"
              v-model="systemData"
              :filter="row => row?.[1]?.trim?.() === 'Indeterminate'"
      />

    </div>
    <div style="display: flex;gap: 20px;">

      <Upload name="支付宝"
              v-model="outer.zhiFuBaoData"
              :filter="row => row?.[11]?.trim?.() === '交易成功'"
      />
    </div>

    <div style="display: flex;justify-content: center">
      <el-button type="primary" size="large" @click="handleCLickExport">导出</el-button>
    </div>

  </div>
</template>
<script setup>
import Upload from '@/projects/excel-common/components/Upload/index.vue'

// 系统数据
const systemData = ref([]);
// 外部数据
const outer = ref({
  //支付宝
  zhiFuBaoData: []
})

function handleCLickExport() {
  console.log('systemData', systemData.value)
  console.log('outer', outer.value)
}
</script>
<style>

</style>
