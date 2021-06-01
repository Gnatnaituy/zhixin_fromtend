<template>
  <div id="contact">
    <div id="title">{{contact.title}}</div>
    <div id="info">
      <span v-for="(item, index) in contact.items" :key="index">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",

  props: {
    contact: {}
  }
}
</script>

<style scoped>
 #contact {

 }
 #title {
   font-size: 20px;
   display: inline-block;
 }
 #info {
   align-content: center;
   font-size: 14px;
   display: inline-block;
 }
</style>
