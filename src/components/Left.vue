<template>
<p style="text-align: center; width: 100%;">青牛前端</p>
      <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" router default-active="2"
        text-color="#fff">
        <el-menu-item index="1-1">首页</el-menu-item>

        <el-sub-menu :index="item.link" v-for="item in menuList" :key="item.id">
          <template #title>
            
            <span>{{ item.menuname }}</span>
          </template>
          <el-menu-item :index="ele.link" v-for="ele in item.children" :key="ele.id">{{ ele.menuname }}</el-menu-item>
          



        </el-sub-menu>

      </el-menu>

</template>
<script setup lang="ts">
import { ref,reactive } from 'vue'
import {menuApi} from '@/api/index'
const menuList = ref([])

menuApi().then((res: any)=>{
  console.log(res);
  menuList.value = res.data
  
})



</script>
<style lang='scss' scoped>

</style>