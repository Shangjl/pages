import Cache from '@/global/utils/cache.js'
import Modal from '@/global/utils/modal.js'
import Constants from '@/global/constants/index.js'
import { ref } from 'vue'

export const refStore = ref({
  //当前使用的摄像头设备id
  currentCameraDeviceId: undefined,
  //所有摄像头设备信息
  allCameraDevices: [],
})

export default function usePublic() {

  const open = ref(false);
  const refsMap = ref({});

  return {
    open,
    Cache,
    Constants,
    Modal,
    refsMap
  }
}