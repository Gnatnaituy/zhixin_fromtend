<template>
  <div>
    <div>
      <el-row>
        <component-header />
      </el-row>
      <el-image style="width: 100%; height: 400px;" object-fit="cover"
        :src="'/images/2021/5/8b5c3f78eb8e41d8beb5d83692c4442b-t01e4c1a6fad8c7be4b.jpg'" />
      <component-page-header />
    </div>
    <div>
      <component-company v-for="(company, index) in companies" v-bind:company="company" :key="index"/>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header"
import Company from "../components/Company"
import PageHeader from "../components/PageHeader"
import axios from "_axios@0.17.1@axios";

export default {
  name: "About",

  components: {
    "component-header": Header,
    "component-company": Company,
    "component-page-header": PageHeader,
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
          console.log(this.companies)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
