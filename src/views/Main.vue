<template>
  <div id="main">
    <div>
      <el-image style="width: 100%; height: 400px;" object-fit="cover"
                :src="moduleType.background" />
      <component-page-header v-bind:title="moduleType.name"/>
    </div>
    <div>
      <component-main-page />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header"
import PageHeader from "../components/PageHeader"
import MainPage from "../components/MainPage";
import Footer from "../components/Footer"
import axios from "axios";

export default {
  name: "Main",

  components: {
    "component-header": Header,
    "component-page-header": PageHeader,
    "component-main-page": MainPage,
    "component-footer": Footer
  },

  watch: {
    $route(to, from) {
      this.loadModuleTypeDetail(this.$route.params.typePath)
    }
  },

  mounted() {
    this.loadModuleTypeDetail(this.$route.params.typePath)
  },

  data() {
    return {
      moduleType: {}
    }
  },

  methods: {
    loadModuleTypeDetail(path) {
      axios.get('/module_type/detail_by_path/' + path).then(res => {
        if (res.status === 200 && res.data.success === true) {
          this.moduleType = res.data.data
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
