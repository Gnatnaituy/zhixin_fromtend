<template>
  <div id="company">
    <div id="company-name">
      <span>{{ company.name }}</span>
    </div>
    <div id="company-description">
      <span>{{ company.description }}</span>
    </div>
    <div id="company-contact">
      <component-contact v-for="(contact, index) in contacts" v-bind:contact="contact" :key="index"/>
    </div>
    <div id="company-divider">
      <el-divider/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Contact from "./Contact";

export default {
  name: "Company",

  components: {
    "component-contact": Contact
  },

  mounted() {
    this.loadContacts()
  },

  data() {
    return {
      contacts: []
    }
  },

  methods: {
    loadContacts() {
      axios.get('/contact/list/' + this.company.id).then(res => {
        if (res.status === 200 && res.data.success === true) {
          this.contacts = res.data.data
          console.log(this.contacts)
        }
      })
    }
  },

  props: {
    company: {}
  }
}
</script>

<style scoped>
 #company {
   text-align: center;
   margin-top: 40px;
   color: #4a4a4a;
 }
 #company-name {
   font-size: 22px;
 }
 #company-description {
   width: 60%;
   display: inline-block;
   font-size: 14px;
   margin-top: 30px;
 }
 #company-contact {
   padding-top: 30px;;
   width: 40%;
   display: inline-block;
 }
 #company-divider {
   width: 75%;
   display: inline-block;
 }

</style>
