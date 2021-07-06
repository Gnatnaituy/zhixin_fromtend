<template>
  <div id="app">
    <el-row>
      <component-header />
    </el-row>
    <div class="main-container" :style="{width: mainWidth + 'px'}">
      <router-view/>
    </div>
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
  },

  data() {
    return {
      mainWidth: 1920
    };
  },

  mounted() {
    this.mainWidth = document.body.clientWidth
    this.mainWidth = Math.max(1080, this.mainWidth)
    this.mainWidth = Math.min(1920, this.mainWidth)
    console.log("client_width:", document.body.clientWidth, " main_width:", this.mainWidth)
  },
}
</script>

<style>
  * { margin: 0; padding: 0; }

  body {
    background-color: #ffffff;
    font-weight: 400px;
    -webkit-tap-highlight-color: transparent;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

  #app {
    min-width: 1200px;
    height: 100%;
  }

  .main-container {
    margin: 0 auto
  }
</style>
