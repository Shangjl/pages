<template>
  <el-button @click="inc">{{count}}</el-button>
</template>

<script setup>
const count = ref(100);
function inc() {
  count.value += 2;
}
</script>

<style scoped lang="scss">

</style>