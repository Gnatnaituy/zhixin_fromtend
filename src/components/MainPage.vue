<template>
  <div id="main-page">
    <el-row>
      <el-col :offset="4" :span="4">
        <div id="sub-type">
          <div v-for="(subType, index) in moduleSubTypes" :key="index">
            <a v-on:click="loadModules(subType.moduleTypeId, subType.id, index)" :class="{ active: current === index }">
              {{ subType.name }}
            </a>
            <div id="sub-type-divider">
              <el-divider/>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :span="12">
        <el-row :gutter="20">
          <el-col :span="8" v-for="(module, key) in modules" :key="key">
            <component-module-card v-bind:moduleCard="module"/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ModuleCard from './ModuleCard'
import axios from "axios";

export default {
  name: "MainPage",

  components: {
    "component-module-card": ModuleCard
  },

  data() {
    return {
      current: 0,
      moduleSubTypes: [],
      modules: []
    }
  },

  watch: {
    $route(to, from) {
      const typeId = to.params.typeId;
      this.loadModuleSubTypes(typeId, null)
      this.loadModules(typeId)
    }
  },

  methods: {
    loadModuleSubTypes(id) {
      axios.get('/module_sub_type/list/' + id).then(res => {
        if (res.status === 200 && res.data.success === true) {
          this.moduleSubTypes = res.data.data
        }
      })
    },
    loadModules(typeId, subTypeId, index) {
      this.current = index
      axios.post('/module/list', {
        typeId: typeId,
        subTypeId: subTypeId
      }).then(res => {
        if (res.status === 200 && res.data.success === true) {
          this.modules = res.data.data.records
        }
      })
    }
  }
}
</script>

<style scoped>
 #main-page {
   margin-top: 40px;
 }
 #sub-type {
   margin-top: 20px;
   font-size: 14px;
 }
 #sub-type-divider {
   width: 85%;
   margin-top: -15px;
 }
 .active{
   color: #87cefa;
 }

</style>
