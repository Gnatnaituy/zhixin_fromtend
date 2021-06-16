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
  },

  created() {
    if (sessionStorage.getItem("state") !== null) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("state"))))
    }

    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("state", JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style>
  * { margin: 0; padding: 0; }

  body {
    background-color: #ffffff;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-weight: 400;
  }

  a {
      cursor: pointer;
      text-decoration: none;
      transition: none 86ms ease-out;
  }

  html{height:100%;}
  body{min-height:100%;}
  body{position:relative;}
  body{color:#515151;}

</style>
