<template>
  <div id="home">
    <el-row>
      <component-header />
    </el-row>
    <el-row>
      <component-banner />
    </el-row>
    <el-row>
      <el-col :offset="3" :span="18">
        <component-group />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Header from "../components/Header"
import Banner from "../components/Banner"
import Group from "../components/Group"
import Footer from "../components/Footer"

export default {
  name: 'Home',

  components: {
    "component-header": Header,
    "component-banner": Banner,
    "component-group": Group,
    "component-footer": Footer
  }
};
</script>

<style>

</style>
