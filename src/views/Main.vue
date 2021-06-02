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
      const typeId = to.params.typeId;
      this.loadModuleType(typeId)
    }
  },

  data() {
    return {
      moduleType: {}
    }
  },

  methods: {
    loadModuleType(id) {
      axios.get('/module_type/detail/' + id).then(res => {
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
