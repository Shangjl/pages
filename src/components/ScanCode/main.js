import { BrowserMultiFormatReader } from '@zxing/library'
import usePublic, { refStore } from '@/composables/use-public.js'
import { createApp } from 'vue'
import ScanCode from './index.vue'
import { showToast, closeToast, showLoadingToast } from 'vant'
import {
  stopMediaStream,
  immediateInterval,
  vibration,
  initializationDevice,
  log
} from '@/global/utils/index.js'

const {} = usePublic()
export const sessionKey = 'available-camera-id'

ScanCode.startScan = async () => {
  return new Promise(async (resolve) => {
    //取消扫码
    function cancel() {
      endScan(null)
    }

    //结束扫码
    function endScan(text) {
      scanReader.reset()
      ScanCodeApp.unmount()
      containerBox.remove()
      stopMediaStream(stream)
      vibration()
      resolve(text)
    }

    //切换相机设备
    function handleSwitchCamera(deviceId) {
      console.log('handleSwitchCamera', deviceId)
      if (deviceId === refStore.value.currentCameraDeviceId) {
        showToast('此设备为当前设备，请更换其它设备')
        return
      }
      refStore.value.currentCameraDeviceId = deviceId
      endScan(null)
    }

    //从相册选择
    async function afterRead(file) {
      log.info('选择了图片')
      showLoadingToast({ message: '识别中...', forbidClick: true })
      const image = new Image()
      image.crossOrigin = ''
      let count = 0
      async function tryDecode() {
        try {
          log.info('尝试解码' + count)
          const photoReader = new BrowserMultiFormatReader()
          const res = await photoReader.decodeFromImageElement(image)
          console.log('解码成功', res)
          photoReader.reset()
          endScan(res.text)
          return true
        } catch (e) {
          console.warn('解码错误', e)
          return false
        }
      }

      image.onload = function () {
        log.info('图片加载完成')
        console.log('image', image)
        const intervalId = immediateInterval(async () => {
          if (count >= 3) {
            closeToast()
            showToast('识别失败')
            clearInterval(intervalId)
          } else {
            count++
            const result = await tryDecode()
            if (result === true) {
              closeToast()
              count = 3
              clearInterval(intervalId)
            }
          }
        }, 600)
      }
      image.src = file.objectUrl
    }

    const props = {
      cancel,
      afterRead,
      handleSwitchCamera
    }
    const ScanCodeApp = createApp(ScanCode, props)
    const containerBox = document.createElement('div')
    document.body.appendChild(containerBox)
    ScanCodeApp.mount(containerBox)

    const currentCameraDeviceId = await initializationDevice()

    const {width, height} = window.screen
    console.log('width, height', width, height)
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        deviceId: currentCameraDeviceId,
        width: { min: 1280, ideal: 2560, max: 4096 },
      }
    });
    const settings = stream.getVideoTracks()[0].getSettings();
    console.log('getSettings', settings)
    const scanReader = new BrowserMultiFormatReader()
    //const res = await scanReader.decodeOnceFromStream(stream, 'scan-video');
    await scanReader.decodeFromStream(stream, 'scan-video', (res) => {
      if (res) {
        endScan(res.text)
      }
    })


  })
}

export default ScanCode
