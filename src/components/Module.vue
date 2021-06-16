<template>
  <div class="module-container">
    <div v-if="showInfo" class="module-path">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">
          首页
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' + type.path }">
          {{ type.name }}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' + type.path + '/' + subType.id }">
          {{ subType.name }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ module.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="module-content">
      <div v-html="module.content"></div>
    </div>
  </div>
</template>

<script>
import {formatTime} from '../utils/time'

export default {
  name: "Module",

  props: {
    type: {},
    subType: {},
    module: {},
    showInfo: false
  },

  methods: {
    formatTime(time) {
      return formatTime(time)
    }
  }
}
</script>

<style scoped>
  .module-container {
    margin-top: 10px;
  }
  .module-path {
    margin-top: -20px;
  }
  .module-title {
    margin-top: 60px;
    font-size: 22px;
    text-align: center;
  }
  .module-time {
    font-size: 14px;
    text-align: right;
    color: #5f5f5f;
  }
  .module-content {
    margin-top: 40px;
  }
</style>
