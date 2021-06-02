<template>
  <div id="group">

    <div id="group-header">
      <span>{{ typeName }}</span>
    </div>

    <el-row :gutter="20">
      <el-col :span="8" v-for="(module, key) in modules" :key="key">
        <component-module-card v-bind:moduleCard="module"/>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import ModuleCard from './ModuleCard'

export default {
  name: "Group",

  components: {
    "component-module-card": ModuleCard
  },

  props: {
    typeName: {},
    modules: []
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
