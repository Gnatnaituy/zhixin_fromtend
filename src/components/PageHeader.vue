<template>
  <el-row>
    <el-col :offset="3" :span="18">
      <div id="page-header">
        <span>{{ title }}</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "PageHeader",

  props: {
    title: ""
  }
}
</script>

<style scoped>

#page-header {
  text-align: center;
  padding: 24px;
  background: #ffffff;
  margin-top: -80px;
  font-size: 20px;
  color: #515151;
  border-radius: 2px;
}

</style>
