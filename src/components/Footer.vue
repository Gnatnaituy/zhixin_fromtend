<template>
  <div id="footer" v-if="company !== null">
    <el-row>
      <el-col :offset="5" :span="12">
        <div id="footer-company">
          <span>{{company.name }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="5" :span="12">
        <div id="footer-contact" v-for="(contact, index) in company.contacts[0].items" :key="index">
          <span>{{contact.name }}: {{ contact.value }}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Footer",

  mounted() {
    this.loadPrimaryCompany()
  },

  data() {
    return {
      companies: [],
      company: null
    }
  },

  methods: {
    loadPrimaryCompany() {
      axios.get('/company/list').then(res => {
        if (res.status === 200 && res.data.success === true) {
          const companies = res.data.data
          this.company = companies.length > 0 ? companies.filter(o => o.isPrimary === '1')[0] : null
        }
      })
    }
  }
}
</script>

<style scoped>
 #footer {
   margin-top: 50px;
   width: 100%;
   height: 200px;
   background-color: #f5f5f5;
 }
 #footer-company {
   /*display: inline-block;*/
   padding: 40px 0 10px 0;
   font-size: 16px;
   font-weight: normal;
   color: #4a4a4a;
 }
 #footer-contact {
   /*display: inline-block;*/
   font-size: 13px;
   font-weight: normal;
   padding-top: 5px;
   color: #808080;
 }

</style>
