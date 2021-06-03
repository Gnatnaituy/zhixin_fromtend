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
        <el-col :span="24 / contacts.length" v-for="(contact, index) in contacts" :key="index">
          <component-contact  v-bind:contact="contact" />
        </el-col>
      </el-row>
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
   margin: 30px 0;
   text-align: center;
 }
 #company-name {
   font-size: 22px;
 }
 #company-description {
   margin: 30px 0;
   width: 60%;
   display: inline-block;
   font-size: 14px;
 }
 #company-contact {
   margin-top: 30px;
   width: 50%;
   display: inline-block;
   align-content: center;
 }

</style>
