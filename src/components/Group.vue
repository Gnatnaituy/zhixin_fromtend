<template>
  <div>
    <div id="group-header">
      <span>产品介绍</span>
    </div>
    <el-row :gutter="20">
      <el-col :span="8" v-for="(o) in 6" :key="o">
        <component-module />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Module from '../components/Module'

export default {
  name: "Group",

  components: {
    "component-module": Module
  }
}
</script>

<style scoped>
  #group-header {
    margin-top: 60px;
    font-size: 24px;
    color: #515151;
  }
</style>
