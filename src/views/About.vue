<template>
  <div>
    <div>
      <el-image style="width: 100%; height: 400px;" object-fit="cover"
        :src="'/images/2021/5/8b5c3f78eb8e41d8beb5d83692c4442b-t01e4c1a6fad8c7be4b.jpg'" />
      <component-page-header title="联系我们" />
    </div>
    <div id="container-about">
      <div id="container-company" v-for="(company, index) in companies" :key="index">
        <component-company v-bind:company="company" v-bind:contacts="company.contacts" />
        <div v-if="index !== companies.length - 1" id="company-divider">
          <el-divider/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header"
import Company from "../components/Company"
import PageHeader from "../components/PageHeader"
import axios from "axios";

export default {
  name: "About",

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
      companies: []
    }
  },

  methods: {
    loadCompanies() {
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
 #container-about {
   padding-top: 60px;
 }
  #container-company {
    text-align: center;
  }
  #company-divider {
    width: 50%;
    display: inline-block;
  }
</style>
