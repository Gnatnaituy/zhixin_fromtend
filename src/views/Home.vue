<template>
  <div id="home">
    <el-row>
      <component-banner />
    </el-row>
    <el-row>
      <el-col :offset="5" :span="14">
        <component-group v-for="(type, index) in types" :key="index"
                         v-bind:layout="type.homePageLayout"
                         v-bind:type-name="type.name"
                         v-bind:type-path="type.path"
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
      types: []
    }
  },

  methods: {
    loadGroups() {
      axios.get('/module_type/list/in-home').then(res => {
        if (res.status === 200 && res.data.success === true) {
          this.types = res.data.data
        }
      })
    }
  }
};
</script>
