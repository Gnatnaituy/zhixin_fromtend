<template>
  <div id="main-page">
    <el-row>
      <el-col :offset="4" :span="4">
        <div id="sub-type">
          <div v-if="type.showSubTypeAll === '1'">
            <a :class="{ active: subTypeId === null }"
               v-on:click="loadModules(null, 1)" >
              全部
            </a>
            <div class="sub-type-divider">
              <el-divider/>
            </div>
          </div>
          <div v-for="(subType, index) in moduleSubTypes" :key="index">
            <a :class="{ active: subTypeId === subType.id }" v-on:click="loadModules(subType.id, 1)">
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
      type: {},
      subTypeId: null,
      pageIndex: 1,
      pageSize: 12,
      moduleSubTypes: [],
      modules: {}
    }
  },

  watch: {
    $route(to, from) {
      this.subTypeId = null
      axios.get('/module_type/detail_by_path/' + this.$route.params.typePath).then(res => {
        if (res.status === 200 && res.data.success === true) {
          this.type = res.data.data
          axios.get('/module_sub_type/list/' + this.type.id).then(res => {
            if (res.status === 200 && res.data.success === true) {
              this.moduleSubTypes = res.data.data
              this.subTypeId = this.type.showSubTypeAll === '1' ? null :
                this.moduleSubTypes.length > 0 ? this.moduleSubTypes[0].id : null;
              axios.post('/module/list', {
                typeId: this.type.id,
                subTypeId: this.subTypeId,
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
    }
  },

  mounted() {
    axios.get('/module_type/detail_by_path/' + this.$route.params.typePath).then(res => {
      if (res.status === 200 && res.data.success === true) {
        this.type = res.data.data
        axios.get('/module_sub_type/list/' + this.type.id).then(res => {
          if (res.status === 200 && res.data.success === true) {
            this.moduleSubTypes = res.data.data
            this.subTypeId = this.type.showSubTypeAll === '1' ? null :
                this.moduleSubTypes.length > 0 ? this.moduleSubTypes[0].id : null;
            axios.post('/module/list', {
              typeId: this.type.id,
              subTypeId: this.subTypeId,
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

  methods: {
    async loadModules(subTypeId, pageIndex) {
      this.subTypeId = subTypeId
      this.pageIndex = pageIndex
      let res = await axios.post('/module/list', {
        typeId: this.type.id,
        subTypeId: this.subTypeId,
        pageStart: this.pageIndex,
        pageLength: 12
      })
      if (res.status === 200 && res.data.success === true) {
        this.modules = res.data.data
      }
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
