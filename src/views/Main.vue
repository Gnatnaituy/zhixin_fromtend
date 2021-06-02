<template>
  <div id="main">
    <div>
      <el-image style="width: 100%; height: 400px;" object-fit="cover"
                :src="'/images/2021/5/8b5c3f78eb8e41d8beb5d83692c4442b-t01e4c1a6fad8c7be4b.jpg'" />
      <component-page-header />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header"
import PageHeader from "../components/PageHeader"
import Footer from "../components/Footer"

export default {
  name: "Main",

  components: {
    "component-header": Header,
    "component-page-header": PageHeader,
    "component-footer": Footer
  }
}
</script>

<style scoped>

</style>
