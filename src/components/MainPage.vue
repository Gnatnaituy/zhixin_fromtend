<template>
  <div id="main-page">
    <el-row>
      <el-col :offset="4" :span="4">
        <div id="sub-type">
          <div v-for="(subType, index) in moduleSubTypes" :key="index">
            <a v-on:click="loadModules(subType.moduleTypeId, subType.id, index, 1)"
               :class="{ active: subTypeIndex === index }">
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
      subTypeIndex: 0,
      moduleSubTypes: [],
      modules: {}
    }
  },

  watch: {
    $route(to, from) {
      this.typeId = to.params.typeId;
      this.loadModuleSubTypes(this.typeId, null, null)
      this.loadModules(this.typeId)
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
    loadModules(typeId, subTypeId, index, pageIndex) {
      this.typeId = typeId === null ? this.typeId : typeId
      this.subTypeId = subTypeId === null ? this.subTypeId : subTypeId
      this.subTypeIndex = index === null ? this.subTypeIndex : index
      this.pageIndex = pageIndex === null ? this.pageIndex : pageIndex
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
      this.loadModules(null, null, null, null)
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
