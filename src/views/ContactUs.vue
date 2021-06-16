<template>
  <div>
    <div>
      <el-image style="width: 100%; height: 400px;" object-fit="cover"
        :src="'/images/2021/5/8b5c3f78eb8e41d8beb5d83692c4442b-t01e4c1a6fad8c7be4b.jpg'" />
      <component-page-header title="联系我们" />
    </div>
    <el-row>
      <el-col :offset="4" :span="4">
        <div class="sub-type">
          <div>
            <a :class="{ active: activeIndex === 0 }" v-on:click="loadCompanies" >
              联系方式
            </a>
            <div class="sub-type-divider">
              <el-divider/>
            </div>
          </div>
          <div>
            <a :class="{ active: activeIndex === 1 }" v-on:click="loadJobs" >
              诚聘英才
            </a>
            <div class="sub-type-divider">
              <el-divider/>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :span="12">
        <div v-if="activeIndex === 0 && companies !== undefined && companies.length > 0"
             class="contact-container">
          <div class="contact-item" v-for="(item, index) in companies" :key="index">
            <component-company v-bind:company="item" v-bind:contacts="item.contacts" />
            <div v-if="index !== companies.length - 1" class="item-divider">
              <el-divider/>
            </div>
          </div>
        </div>
        <div v-else-if="activeIndex === 1 && jobs !== undefined && jobs.length > 0"
             class="contact-container">
          <div class="contact-item" v-for="(item, index) in jobs" :key="index">
            <component-job v-bind:job="item" />
            <div v-if="index !== jobs.length - 1" class="item-divider">
              <el-divider/>
            </div>
          </div>
        </div>
        <div v-else class="empty-content">
          <el-row>
            <el-col :offset="7" :span="17">
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
import Header from "../components/Header"
import Company from "../components/Company"
import Job from "../components/Job";
import PageHeader from "../components/PageHeader"
import axios from "axios";

export default {
  name: "ContactUs",

  components: {
    "component-header": Header,
    "component-company": Company,
    "component-job": Job,
    "component-page-header": PageHeader
  },

  mounted() {
    this.loadCompanies()
  },

  data() {
    return {
      activeIndex: 0,
      companies: [],
      jobs: []
    }
  },

  methods: {
    loadCompanies() {
      this.activeIndex = 0
      axios.get('/company/list').then(res => {
        if (res.status === 200 && res.data.success === true) {
          this.companies = res.data.data
        }
      })
    },
    loadJobs() {
      this.activeIndex = 1
      axios.post('/job/list', {
        pageStart: 0,
        pageLength: 10
      }).then(res => {
        if (res.status === 200 && res.data.success === true) {
          this.jobs = res.data.data.records
        }
      })
    }
  }
}
</script>

<style scoped>
 .contact-container {
   padding-top: 30px;
 }
  .contact-item {
    text-align: center;
  }
 .sub-type {
   margin-top: 60px;
   font-size: 14px;
 }
 .item-divider {
   width: 66%;
   display: inline-block;
 }
 .sub-type-divider {
   width: 85%;
   margin-top: -15px;
 }
 .empty-content {
   color: #9b9b9b;
   padding: 100px 0;
   text-align: left;
 }
 .active{
   color: #48a2fe;
 }
</style>
