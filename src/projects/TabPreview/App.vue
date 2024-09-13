<template>
  <div class="container">

    <van-image class="image"
               v-for="(item, index) in images" :key="index"
               :src="item"
    />
    <a :href="threeDLink" target="_blank">3D模型</a>

    <!--水印蒙版       -->
    <van-image class="mark" fit="cover"
               src="https://auto.hsdzipper.cn/minio-hsd-crm/hsd/hsd-mobile/search-tab-bgimg.png"
    />


  </div>
</template>
<script setup>

import { useWebViewInit } from '@/composables/use-uni-web-view.js'
import { useAnalyzeQrcode } from '@/composables/use-images.js'

const images = ref([])
const threeDLink = ref('')
const { analyzeQrcodeByImgUrl } = useAnalyzeQrcode()
onMounted(() => {
  const uniData = useWebViewInit()
  if (uniData) {
    images.value = uniData.split(',')

    analyzeQrcodeByImgUrl(images.value[images.value.length - 1]).then(res => {
      threeDLink.value = res;
      console.log('threeDLink.value', threeDLink.value)
    })

  }

})


</script>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  gap: 1em;

}

.image {
  border: 1px solid #ccc;
  pointer-events: none;

}

.mark {
  position: fixed;
  height: 100%;
  width: 100%;
  pointer-events: none;
  z-index: 999;
}

</style>
