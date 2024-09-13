<template>
  <div class="scan-container">

    <div v-show="show" class="scan-container-header">
      <van-icon class="close" name="clear" @click="cancel"/>

      <el-dropdown trigger="click" @command="handleSwitchCamera" >
        <div class="action-icon">
          <van-icon class="icon" name="replay" />
          <span>切换摄像头</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :style="{color: item.value === refStore.currentCameraDeviceId ? '#5eadff': null}" :command="item.value"
                              v-for="item in refStore.allCameraDevices" :key="item"> {{item.label}}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <video id="scan-video" autoplay></video>

    <div v-show="show" class="scan-container-bottom">
      <van-uploader :after-read="afterRead" >
        <div class="action-icon">
          <van-icon class="icon" name="photo" />
          <span>相册</span>
        </div>
      </van-uploader>
    </div>

  </div>
</template>

<script setup>
import {refStore} from '@/composables/use-public.js'

defineProps({
  cancel: {
    type: Function, default: () => {
    }
  },
  afterRead: {
    type: Function, default: () => {
    }
  },
  handleSwitchCamera:{
    type: Function, default: () => {
    }
  }
})


const show = ref(false)
onMounted(() => {
  document.querySelector('#scan-video').addEventListener('play', function() {
    setTimeout(() => {
      show.value = true
    }, 100)
  })

})

</script>

<style scoped lang="scss">
@import "@/global/styles/qr-scanner.css";

.scan-container {
  width: 100vw;
  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
}

#scan-video {
  height: 100%;
  width: 100vw;
  object-fit: cover;
  z-index: 11;
}
.scan-container-header {
  position: absolute;
  box-sizing: border-box;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 12;
  padding: 0.5em 1.5em;

  .close {
    font-size: 2em;
    color: white;
  }
}

.scan-container-bottom{
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1002;
  padding: 1.5em;

}

.action-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  .icon {
    font-size: 2em;
  }

}

</style>