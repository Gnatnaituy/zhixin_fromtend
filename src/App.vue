<template>
  <div id="app">
    <el-row>
      <component-header />
    </el-row>
    <router-view/>
    <el-row>
      <component-footer />
    </el-row>
    <component-license />
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
import License from "./components/License";

export default {
  components: {
    "component-header": Header,
    "component-footer": Footer,
    "component-license": License,
  }
}
</script>

<style>
  * { margin: 0; padding: 0; }

  body {
    background-color: #ffffff;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

  #app {
    min-width: 1200px;
  }
</style>
