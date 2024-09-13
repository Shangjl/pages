<template>
  <div style="border: 1px solid #ccc">
    <Toolbar v-if="showToolbar"
             style="border-bottom: 1px solid #ccc"
             :editor="editorRef"
             :defaultConfig="toolbarConfig"
             :mode="mode"
    />
    <Editor
      :style="editorStyle"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script setup>
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const props = defineProps({
  modelValue: {},
  showToolbar: {
    type: Boolean,
    default: true
  },
  readonly: {
    type: Boolean,
    default: false
  },
  height: {
    default: '500px'
  }
})
const mode = ref('default')
const editorRef = shallowRef()
const valueHtml = ref('<p>hello</p>')
watch(() => props.modelValue, val => {
  valueHtml.value = val
}, { immediate: true })

const toolbarConfig = {}
const editorStyle = computed(() => {
  return {
    height: props.height

  }
})
const editorConfig = {
  readOnly: props.readonly,
  placeholder: '请输入内容...'
}

onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor
}
</script>

