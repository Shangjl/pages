<template>
  <div>
    <WangEditor :show-toolbar="false" readonly v-model="editorContent" height="calc(100vh - 5em)" />
    <div style="display: flex;align-items: center;justify-content: center; gap: 2em;;height: 4rem;">
      <el-button :disabled="disableAgree" @click="handleAgree()" style="background-color:#152e3b;color: white"> 同意
      </el-button>
      <el-button @click="handleCancel()" style="background-color:#212121;color: white"> 取消</el-button>
    </div>
  </div>
</template>
<script setup>

import WangEditor from '@/components/WangEditor/index.vue'

import usePublic from '@/composables/use-public.js'
import { getTabAgreement } from '@/projects/TabAgree/api/index.js'
import { userUniMessage, useWebViewInit } from '@/composables/use-uni-web-view.js'

const { Modal } = usePublic()

const disableAgree = ref(false)
onMounted(() => {
  useWebViewInit()
  getTabAgreement().then(res => {
    editorContent.value = res.data.zh
  }).catch(() => {
    Modal.msgError('获取拉片协议失败，请联系管理员')
    disableAgree.value = true
  })
})
const editorContent = ref(undefined)
const { uniPostMsg } = userUniMessage()


function handleAgree() {
  handlePostMsg('agree')
}

function handleCancel() {
  Modal.msgError('拒绝同意协议将无法查看')
  setTimeout(() => {
    handlePostMsg('cancel')
  }, 1500)
}

async function handlePostMsg(msg) {
  await uniPostMsg(msg)
}
</script>
<style lang="scss">
.my-btn {
  width: 5.3em;
  height: 2.5em;
  color: white;
  border-radius: 0.2em;
  cursor: pointer;
}
</style>
