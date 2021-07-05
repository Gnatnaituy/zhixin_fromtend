<template>
  <div class="group">

    <div class="group-header">
      <span>{{ typeName }}</span>
      <div class="type-more">
        <router-link :to="'/' + typePath">
          更多 <i class="el-icon-right" />
        </router-link>
      </div>
    </div>

    <el-row :gutter="20" v-if="layout == '1'">
      <el-col :span="8" v-for="(module, index) in modules" :key="index">
        <router-link :to="'/' + module.typePath + '/' + module.subTypeId + '/' + module.id">
          <component-module-card v-bind:moduleCard="module"/>
        </router-link>
      </el-col>
    </el-row>

    <el-row :gutter="20" v-else>
      <el-col :offset="1" :span="9">
        <router-link :to="'/' + modules[0].typePath + '/' + modules[0].subTypeId + '/' + modules[0].id">
          <div class="module-image">
            <el-image style="height:220px" fit="fill" :src="modules[0].cover" />
            <div class="module-image-alt">
              <p class="module-link-title"> {{ modules[0].title }} </p>
              <p class="module-link-date"> {{ formatTime(modules[0].createTimestamp) }} </p>
            </div>
          </div>
        </router-link>
      </el-col>
      <el-col :span="13">
        <div class="module-link">
          <router-link v-for="(module, index) in modules.slice(1, 4)" :key="index"
            :to="'/' + module.typePath + '/' + module.subTypeId + '/' + module.id">
            <div class="module-link-container">
              <p class="module-link-title"> {{ module.title }} </p>
              <p class="module-link-date"> {{ formatTime(module.createTimestamp) }} </p>
            </div>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ModuleCard from './ModuleCard'

export default {
  name: "Group",

  components: {
    "component-module-card": ModuleCard
  },

  methods: {
    formatTime(time) {
      const d = new Date(time)
        const month = d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth()
        const day = d.getDay() < 9 ? '0' + (d.getDay() + 1) : d.getDay() + 1
        return d.getFullYear() + '年' + month + '月' + day + '日'
    }
  },
  
  props: {
    layout: null,
    typeName: {},
    typePath: '',
    modules: []
  }
}
</script>

<style scoped>
  .group-header {
    margin: 60px 0 10px 0;
    font-size: 24px;
    color: #515151;
  }
  .module-image {
    margin-top: 30px;
    transition: transform .3s ease-in-out, box-shadow .3s cubic-bezier(.47, 0, .745, .715), border .3s linear .1s;
    width: 100%;
    height: 300px;
    background-size: fit;
    overflow: hidden;
  }
  .module-image:hover {
    box-shadow: 0 10px 10px rgba(34, 34, 34, 0.25);
    -webkit-transform: translateY(-1px);
    -moz-transform: translateY(-1px);
    transform: translateY(-1px);
    margin-top: 13px;
    height: 318px;
  }
  .module-image:hover .module-link-title {
    white-space: normal;
    position: relative;
    height: 34px;
  }
  .module-image-alt {
    padding: 20px;
  }
  .module-link {
    margin: 40px;
    height: 300px;
    background-color: #ffffff;
  }
  .module-link-container {
    transition: transform .3s ease-in-out, box-shadow .3s cubic-bezier(.47, 0, .745, .715), border .3s linear .1s;
    padding: 20px 20px 0 20px;
    height: 60px;
    border-bottom: 1px #d9d9d9 solid;
  }
  .module-link-container:hover {
    box-shadow: 0 10px 10px rgba(34, 34, 34, 0.25);
    -webkit-transform: translateY(-1px);
    -moz-transform: translateY(-1px);
    transform: translateY(-1px);
    height: 94px;
  }
  .module-link-container:hover .module-link-title {
    white-space: normal;
    position: relative;
    height: 51px;
  }
  .module-link-title {
    font-size: 15px;
    line-height: 17px;
    height: 17px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -ms-text-overflow: ellipsis;
  }
  .module-link-date {
    margin-top: 10px;
    font-size: 13px;
    text-align: right;
  }
  .type-more {
    font-size: 14px;
    text-align: right;
    margin-top: -30px;
  }
  a {
   text-decoration: none;
   color: #515151;
  }
</style>
