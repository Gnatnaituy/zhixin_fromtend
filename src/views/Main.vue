<template>
  <div id="main">
    <el-row>
      <component-header />
    </el-row>
  </div>

</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer";

export default {
  name: "Main",

  components: {
    "component-header": Header,
    "component-footer": Footer
  }
}
</script>

<style scoped>

</style>
