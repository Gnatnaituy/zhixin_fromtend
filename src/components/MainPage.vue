<template>
  <div id="main-page">
    <el-row>
      <el-col v-if="!showModule" :offset="4" :span="4">
        <div id="sub-type">
          <div v-if="type.showSubTypeAll === '1'">
            <a :class="{ active: subType.id === undefined }"
               v-on:click="loadModules({}, 1)" >
              全部
            </a>
            <div class="sub-type-divider">
              <el-divider/>
            </div>
          </div>

          <div v-for="(item, index) in subTypes" :key="index" v-on:click="loadModules(item, 1)">
            <router-link :to="'/' + type.path + '/' + item.id">
              <a :class="{ active: subType.id === item.id }">
                {{ item.name }}
              </a>
            </router-link>
            <div class="sub-type-divider">
              <el-divider/>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :offset="showModule ? 4 : 0" :span="showModule ? 16 : 12">
        <div v-if="!showModule && subType.expandModuleContent !== '1' && modules.total > 0">
          <el-row :gutter="20">
            <el-col :span="8" v-for="(item, index) in modules.records" :key="index">
              <router-link :to="'/' + type.path + '/' + item.subTypeId + '/' + item.id">
                <component-module-card v-bind:moduleCard="item"/>
              </router-link>
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
        </div>
        <div v-else-if="!showModule && subType.expandModuleContent === '1' && modules.total > 0">
          <div v-for="(item, index) in modules.records" :key="index">
            <component-module v-bind:module="item" v-bind:showInfo=false />
          </div>
        </div>
        <div v-else-if="showModule && this.module !== {}">
          <component-module v-bind:type="type"
                            v-bind:subType="subType"
                            v-bind:module="module"
                            v-bind:showInfo=true />
        </div>
        <div class="module-none" v-else>
          <el-row>
            <el-col :offset="7" :span="16">
              <div>
                <span>暂无内容</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ModuleCard from './ModuleCard'
import Module from "./Module";
import axios from "axios";

export default {
  name: "MainPage",

  components: {
    "component-module-card": ModuleCard,
    "component-module": Module
  },

  data() {
    return {
      type: {},
      subType: {},
      subTypes: [],
      pageIndex: 1,
      pageSize: 12,
      modules: {},
      module: {},
      showModule: false
    }
  },

  watch: {
    $route(to, from) {
      this.initDatas()
      this.loadModule()
    }
  },

  mounted() {
    this.initDatas()
    this.loadModule()
  },

  methods: {
    initDatas() {
      this.showModule = false
      const typePath = this.$route.params.typePath
      const subTypeId = Number(this.$route.params.subTypeId)
      axios.get('/module_type/detail_by_path/' + typePath).then(res => {
        if (res.status === 200 && res.data.success === true) {
          this.type = res.data.data
          axios.get('/module_sub_type/list/' + this.type.id).then(res => {
            if (res.status === 200 && res.data.success === true) {
              this.subTypes = res.data.data
              if (isNaN(subTypeId)) {
                if (this.type.showSubTypeAll === '1') {
                  this.subType = {}
                } else {
                  this.subType = this.subTypes.length <= 0 ? {} : this.subTypes[0]
                }
              } else {
                if (this.subTypes.length <= 0) {
                  this.subType = {}
                } else {
                  this.subType = this.subTypes.filter(o => o.id === subTypeId)[0]
                }
              }
              axios.post('/module/list', {
                typeId: this.type.id,
                subTypeId: this.subType.id,
                pageLength: 12
              }).then(res => {
                if (res.status === 200 && res.data.success === true) {
                  this.modules = res.data.data
                }
              })
            }
          })
        }
      })
    },
    loadModule() {
      const moduleId = this.$route.params.moduleId
      if (moduleId !== undefined) {
        this.showModule = true
        axios.get('/module/detail/' + moduleId).then(res => {
          if (res.status === 200 && res.data.success === true) {
            this.module = res.data.data
          }
        })
      }
    },
    loadModules(subType, pageIndex) {
      this.showModule = false
      this.subType = subType
      this.pageIndex = pageIndex
      axios.post('/module/list', {
        typeId: this.type.id,
        subTypeId: this.subType.id,
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
      this.loadModules(this.subType, this.pageIndex)
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
 .module-none {
   color: #9b9b9b;
   padding: 100px 0;
   text-align: left;
 }
 .active{
   color: #48a2fe;
 }
 a {
   text-decoration: none;
   color: #515151;
 }

</style>
