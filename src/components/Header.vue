<template>
  <div id="menu">
    <div class="logo-container">
      <router-link :to="{name: 'Home'}">
        <el-image style="width: 100%; height: 100%; margin-left: 60px;" object-fit="cover" :src="'/images/logo/logo.svg'" />
      </router-link>
    </div>
    <div class="menu-container">
      <el-menu :default-active="this.$route.path"
               active-text-color="#48a2fe"
               mode="horizontal" router>

        <el-menu-item index="/" route="/">
          首页
        </el-menu-item>

        <el-menu-item v-for="(type, index) in moduleTypes"
                      :key="index"
                      :index="'/' + type.path"
                      :route="'/' + type.path">
          {{ type.name }}
        </el-menu-item>

        <el-menu-item index="/contact" route="/contact">
          联系我们
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",

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
  width: 200px;
  height: 60px;
}

.menu-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

</style>
