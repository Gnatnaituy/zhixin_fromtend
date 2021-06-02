<template>
  <div id="main">
    <div>
      <el-image style="width: 100%; height: 400px;" object-fit="cover"
                :src="moduleType.background" />
      <component-page-header v-bind:title="moduleType.name"/>
<!--      {{ path }}-->
    </div>
  </div>
</template>

<script>
import Header from "../components/Header"
import PageHeader from "../components/PageHeader"
import Footer from "../components/Footer"
import axios from "_axios@0.17.1@axios";

export default {
  name: "Main",

  components: {
    "component-header": Header,
    "component-page-header": PageHeader,
    "component-footer": Footer
  },

  watch: {
    $route(to, from) {
      this.loadModuleType(to.params.id)
    }
  },

  data() {
    return {
      // path: this.$route.params.moduleTypePath
      moduleType: {}
    }
  },

  methods: {
    loadModuleType(id) {
      console.log("loadModuleType")
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
