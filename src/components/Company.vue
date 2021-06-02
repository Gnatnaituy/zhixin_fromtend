<template>
  <div id="company">
    <div id="company-name">
      <span>{{ company.name }}</span>
    </div>
    <div id="company-description">
      <span>{{ company.description }}</span>
    </div>
    <div id="company-contact">
      <el-row>
        <el-col :span="12" v-for="(contact, index) in contacts" :key="index">
          <component-contact  v-bind:contact="contact" />
        </el-col>
      </el-row>
    </div>
    <div id="company-divider">
      <el-divider/>
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
  }
}
</script>

<style scoped>
 #company {
   text-align: center;
   margin-top: 80px;
   color: #4a4a4a;
 }
 #company-name {
   font-size: 22px;
 }
 #company-description {
   width: 60%;
   display: inline-block;
   font-size: 14px;
   margin-top: 60px;
 }
 #company-contact {
   margin-top: 60px;
   width: 40%;
   display: inline-block;
 }
 #company-divider {
   width: 75%;
   display: inline-block;
 }

</style>
