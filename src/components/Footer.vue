<template>
  <div id="footer">
    <el-row>
      <el-col :offset="3" :span="18">
        <div id="footer-company">
          <span>{{company}}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="3" :span="18">
        <div id="footer-contact" v-for="(contact, index) in contacts" :key="index">
          <span>{{contact}}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Footer",

  data() {
    return {
      company: "上海狗狗农商银行",
      contacts: [
        "邮箱：10000000@11.com",
        "手机：18526325350",
        "地址：上海市嘉定区祁连山南路2345号"
      ]
    }
  },

  methods: {
    loadPrimaryCompany() {
      axios.get('/banner/list').then(res => {
        if (res.status === 200 && res.data.success === true) {
          this.banners = res.data.data
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
