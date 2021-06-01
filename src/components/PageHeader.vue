<template>
  <el-row>
    <el-col :offset="3" :span="18">
      <div id="page-header">
        <span>联系我们</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "PageHeader"
}
</script>

<style scoped>

#page-header {
  text-align: center;
  padding: 15px;
  background: #ffffff;
  margin-top: -64px;
  font-size: 20px;
  color: #515151;
  border-radius: 2px;
}

</style>
