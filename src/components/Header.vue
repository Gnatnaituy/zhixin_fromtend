<template>
  <div id="menu">
    <el-menu :default-active="this.$route.path" router active-text-color="#000000" mode="horizontal" @select="handleSelect">

      <el-menu-item index="0" route="/">
        <el-image style="width: 150px; height: 50px;" object-fit="cover" :src="'/images/logo/logo.jpeg'" />
      </el-menu-item>

      <el-menu-item index="1" route="/">
        首页
      </el-menu-item>

      <el-menu-item v-for="(type, index) in moduleTypes" :key="index" :index="type.path">
        <router-link :to="{name: 'Main', params: {path: type.path, id: type.id}}">
          {{type.name}}
        </router-link>
      </el-menu-item>

      <el-menu-item index="100" route="/about">
        联系我们
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",

  data() {
    return {
      moduleTypes: []
    };
  },

  mounted() {
    this.loadModuleTypes()
  },

  methods: {
    handleSelect(key, keyPath) {

    },
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
