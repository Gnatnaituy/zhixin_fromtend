<template>
  <div id="menu">
    <el-menu :default-active="this.$route.path" active-text-color="#000000" mode="horizontal">

      <el-menu-item index="0">
        <router-link :to="{name: 'Home'}">
          <el-image style="width: 150px; height: 50px;" object-fit="cover" :src="'/images/logo/logo.jpeg'" />
        </router-link>
      </el-menu-item>

      <el-menu-item index="1">
        <router-link :to="{name: 'Home'}">
          首页
        </router-link>
      </el-menu-item>

      <el-menu-item v-for="(type, index) in moduleTypes" :key="index" :index="type.path">
        <router-link :to="{name: 'Main', params: {typePath: type.path, typeId: type.id}}">
          {{type.name}}
        </router-link>
      </el-menu-item>

      <el-menu-item index="100">
        <router-link :to="{name: 'About'}">
          联系我们
        </router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",

  watch: {
    $route(to, from) {
      console.log("from: ", from.path)
      console.log("to: ", to.path)
    }
  },

  data() {
    return {
      moduleTypes: []
    };
  },

  mounted() {
    this.loadModuleTypes()
  },

  methods: {
    loadModuleTypes() {
      axios.get('/module_type/list').then(res => {
        if (res.status === 200 && res.data.success === true) {
          this.moduleTypes = res.data.data
        }
      })
    }
  }
}
</script>

<style scoped>
  #menu {
    text-align: center;
  }

</style>
