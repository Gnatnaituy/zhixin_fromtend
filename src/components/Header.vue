<template>
  <div id="menu">
    <div class="logo-container">
      <router-link :to="{name: 'Home'}">
        <el-image style="width: 100%; height: 100%;" object-fit="cover" :src="'/images/logo/logo.jpeg'" />
      </router-link>
    </div>
    <div class="menu-container">
      <el-menu :default-active="this.$route.path"
               active-text-color="#48a2fe"
               mode="horizontal">
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",

  watch: {
    $route(to, from) {
      this.clickCount += 1
      console.log("clickCount: ", this.clickCount, " | from: ", from.path, " | to: ", to.path)
    }
  },

  data() {
    return {
      clickCount: 0,
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
  display: flex;
}
.logo-container {
  position: absolute;
  z-index: 1;
  width: 150px;
  height: 60px;
}

.menu-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

</style>
