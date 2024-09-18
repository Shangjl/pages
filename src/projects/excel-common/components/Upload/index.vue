<template>
  <el-upload drag :accept :before-upload="handleUpload">
    <el-icon size="3em">
      <icon-ep-upload-filled/>
    </el-icon>
    <div class="el-upload__text">
      拖拽上传 <em>点击上传</em>
    </div>
    <template #tip>
      <div style="display: flex;justify-content: space-between;align-items: center">
        <el-switch disabled v-model="state"/>
        <span>{{ name }}</span>
      </div>
    </template>
  </el-upload>
</template>
<script setup>
import {importCsv, importExcel} from "@/global/utils/excel.js";

const props = defineProps({
  name: String,
  accept: {
    type: String,
    default: '.xlsx, .xls, .csv'
  },
  filter: {
    type: Function,
    default: row => true
  },
  map: {
    type: Function,
    default: row => row
  }
});

const data = defineModel();

const state = computed(() => {
  return data.value.length > 0
})

async function handleUpload(file) {
  const option = {
    file,
    filter: props.filter,
    map: props.map
  }
  const fileName = file.name;
  if (fileName.endsWith('xlsx') || fileName.endsWith('xls')) {
    data.value = await importExcel(option)

  }

  if (fileName.endsWith('csv')) {
    data.value = await importCsv(option);
  }

  console.log('RR', JSON.stringify(data.value))
  return false
}
</script>

<style scoped lang="scss">

</style>