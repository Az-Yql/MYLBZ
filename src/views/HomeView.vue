<template>
  <el-container>
    <el-aside width="200px" style="height: 100vh;" class="left" >
      <Left></Left>
    </el-aside>
    <el-container>
      <el-header class="top">Header</el-header>
      <el-main class="bottom">Main </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">

import Left from '@/components/Left.vue'







</script>
<style lang='scss' scoped>
.left {
  background-color: #545c64;
  color: white;
}

.top {
  background-color: #b3c0d1;
  color: white;
}

.bottom {
  background-color: #e9eef3;
  color: white;
}
</style>