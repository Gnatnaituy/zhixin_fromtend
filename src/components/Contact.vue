<template>
  <div id="contact">
    <el-row>
      <el-col>
        <div id="title">{{contact.title}}</div>
      </el-col>
    </el-row>
    <div id="items">
      <el-row>
        <el-col>
          <div id="item" v-for="(item, index) in contact.items" :key="index">
            <span >{{ item.name }}: {{ item.value }}</span>
          </div>
        </el-col>
      </el-row>
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
   margin-bottom: 10px;
   font-size: 16px;
   display: inline-block;
 }
 #items {
   align-content: center;
   font-size: 14px;
   display: inline-block;
 }
 #item {
   margin-bottom: 5px;
 }
</style>
