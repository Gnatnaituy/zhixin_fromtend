<template>
  <div id="company">
    <div id="company-name">
      <span>{{ company.name }}</span>
    </div>
    <div id="company-contact">
      <el-row>
        <el-col :span="24 / contacts.length" v-for="(contact, index) in contacts" :key="index">
          <component-contact  v-bind:contact="contact" />
        </el-col>
      </el-row>
    </div>
    <div id="company-location" v-if="company.location !== null && company.location !== ''">
      <span>地址: {{ company.location }}</span>
    </div>
    <div id="company-map" v-if="company.lat !== null && company.lng !== null">
      <el-amap class="amap-box" :zoom="zoom" :center="[company.lng, company.lat]">
        <el-amap-marker :position="[company.lng, company.lat]" clickable></el-amap-marker>
      </el-amap>
    </div>
  </div>
</template>

<script>
import Contact from "./Contact";

export default {
  name: "Company",

  components: {
    "component-contact": Contact
  },

  props: {
    company: {},
    contacts: []
  },

  data() {
    return {
      zoom: 16
    }
  }
}
</script>

<style scoped>
 #company {
   margin: 30px 0;
   text-align: center;
 }
 #company-name {
   font-size: 22px;
 }
 #company-location {
   margin-top: 20px;
   font-size: 14px;
 }
 #company-map {
   margin: 15px 0;
   width: 100%;
   height: 400px;
   display: inline-block;
 }
 #company-contact {
   margin-top: 30px;
   width: 100%;
   display: inline-block;
   align-content: center;
 }

</style>
