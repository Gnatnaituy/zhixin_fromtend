<template>
  <div>
    <div>
      <el-image style="width: 100%; height: 400px;" object-fit="cover"
        :src="'/images/2021/5/8b5c3f78eb8e41d8beb5d83692c4442b-t01e4c1a6fad8c7be4b.jpg'" />
      <component-page-header title="联系我们" />
    </div>
    <el-row>
      <el-col :offset="4" :span="4">
        <div id="sub-type">
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
        <div id="container-contact" v-if="activeIndex === 0">
          <div id="container-company" v-for="(company, index) in companies" :key="index">
            <component-company v-bind:company="company" v-bind:contacts="company.contacts" />
            <div v-if="index !== companies.length - 1" id="company-divider">
              <el-divider/>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Header from "../components/Header"
import Company from "../components/Company"
import PageHeader from "../components/PageHeader"
import axios from "axios";

export default {
  name: "ContactUs",

  components: {
    "component-header": Header,
    "component-company": Company,
    "component-page-header": PageHeader
  },

  mounted() {
    this.loadCompanies()
  },

  data() {
    return {
      activeIndex: 0,
      companies: []
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
      axios.get('/company/list').then(res => {
        if (res.status === 200 && res.data.success === true) {
          this.companies = res.data.data
        }
      })
    }
  }
}
</script>

<style scoped>
 #container-contact {
   padding-top: 30px;
 }
  #container-company {
    text-align: center;
  }
  #company-divider {
    width: 66%;
    display: inline-block;
  }
 #sub-type {
   margin-top: 60px;
   font-size: 14px;
 }
 .sub-type-divider {
   width: 85%;
   margin-top: -15px;
 }
 .active{
   color: #48a2fe;
 }
</style>
