<template>
  <div id="home">
    <el-row>
      <component-banner />
    </el-row>
    <el-row>
      <el-col :offset="3" :span="18">
        <component-group v-for="(type, index) in typeModules" :key="index"
                         v-bind:type-name="type.name"
                         v-bind:modules="type.modules" />
      </el-col>
    </el-row>
  </div>
</template>

<script>

import Banner from "../components/Banner"
import Group from "../components/Group"
import axios from "axios";

export default {
  name: 'Home',

  components: {
    "component-banner": Banner,
    "component-group": Group
  },

  mounted() {
    this.loadGroups()
  },

  data() {
    return {
      typeModules: []
    }
  },

  methods: {
    loadGroups() {
      axios.get('/module_type/list/in-home').then(res => {
        if (res.status === 200 && res.data.success === true) {
          this.typeModules = res.data.data
        }
      })
    }
  }
};
</script>

<style>

</style>
