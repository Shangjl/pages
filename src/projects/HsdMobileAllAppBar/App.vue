<template>
  <div class="container">
    简单移动端模板

    <van-uploader :after-read="afterRead" />
    <el-button @click="callAppScan1">扫码1</el-button>
    <span>扫码1： {{text1}}</span>
    <el-button @click="callAppScan2">扫码2</el-button>
    <span>扫码2： {{text2}}</span>

  </div>
</template>
<script setup>
import { useCallAppScan } from '@/composables/use-uni-web-view.js';



const { callAppScan: callAppScan1 } = useCallAppScan('app_vue1', (res) => text1.value = res)
const { callAppScan: callAppScan2 } = useCallAppScan('app_vue2', (res) => text2.value = res)

const text1 = ref('')
const text2 = ref('')

const afterRead = (file) => {
  // 此时可以自行将文件上传至服务器
  console.log('file', file);
};
</script>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
}
</style>
