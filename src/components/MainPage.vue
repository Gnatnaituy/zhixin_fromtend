<template>
  <div id="main-page">
    <el-row>
      <el-col :offset="4" :span="4">
        <div id="sub-type">
          <div>
            <a :class="{ active: subTypeId === null }"
               v-on:click="loadModules(null, 1)" >
              全部
            </a>
            <div class="sub-type-divider">
              <el-divider/>
            </div>
          </div>
          <div v-for="(subType, index) in moduleSubTypes" :key="index">
            <a :class="{ active: subTypeId === subType.id }"
               v-on:click="loadModules(subType.id, 1)">
              {{ subType.name }}
            </a>
            <div class="sub-type-divider">
              <el-divider/>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :span="12">
        <el-row :gutter="20">
          <el-col :span="8" v-for="(module, key) in modules.records" :key="key">
            <component-module-card v-bind:moduleCard="module"/>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div id="module-pager">
              <el-pagination background hide-on-single-page
                layout="prev, pager, next"
                :total="modules.total"
                :current-page="pageIndex"
                :page-size="pageSize"
                :page-sizes="[6, 9, 12, 15]"
                v-on:size-change="pageSizeChange"
                v-on:current-change="this.pageIndexChange">
              </el-pagination>
            </div>
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
      typeId: null,
      subTypeId: null,
      pageIndex: 1,
      pageSize: 12,
      moduleSubTypes: [],
      modules: {}
    }
  },

  watch: {
    $route(to, from) {
      this.typeId = to.params.typeId;
      this.loadModuleSubTypes(this.typeId)
      this.loadModules(null, 1)
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
    loadModules(subTypeId, pageIndex) {
      this.subTypeId = subTypeId
      this.pageIndex = pageIndex
      axios.post('/module/list', {
        typeId: this.typeId,
        subTypeId: this.subTypeId,
        pageStart: this.pageIndex,
        pageLength: 12
      }).then(res => {
        if (res.status === 200 && res.data.success === true) {
          this.modules = res.data.data
        }
      })
    },
    pageSizeChange() {

    },
    pageIndexChange(currentPage) {
      this.pageIndex = currentPage
      this.loadModules(this.subTypeId, this.pageIndex)
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
 .sub-type-divider {
   width: 85%;
   margin-top: -15px;
 }
 #module-pager {
   margin-top: 40px;
   width: 100%;
   display: flex;
   justify-content: center;
 }
 .active{
   color: #48a2fe;
 }

</style>
