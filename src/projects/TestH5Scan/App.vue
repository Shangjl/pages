<template>
  <div class="page">
    <van-icon class="scan" @click="handleClickScan" name="scan" />

    <div style="font-size: 1.5em; word-break: break-all; word-wrap: break-word;padding: 1em;text-align: center">
      识别结果:<br/> {{scanResult}}
    </div>
  </div>
</template>

<script setup>
//import ScanCode from '@/components/ScanCode/main.js'
import StartScan from './temp/jsl-h5-scan.js'
import vConsole from 'vconsole'

new vConsole()
const scanResult = ref('')


function handleClickScan() {
  StartScan().then((res) => {
    console.log('res', res)
    scanResult.value = res
  })
}

</script>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 1em;
}

.scan {
  font-size: 30vmin;
}
</style>
