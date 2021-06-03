<template>
  <div id="module">
    <div id="module-image">
      <el-image :src="moduleCard.cover" />
    </div>
    <el-row>
      <el-col :span="18">
        <div id="module-footer">
          <div id="module-name">
            <span>{{ moduleCard.title }}</span>
          </div>
          <div id="module-description">
            <span>{{ moduleCard.description }}</span>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <el-row>
          <el-col :offset="8" :span="8">
            <i class="el-icon-right" style="font-weight: bold; padding-top: 20px; color: #9b9b9b"/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ModuleCard",

  data() {
    return {
      currentDate: new Date()
    };
  },

  props: {
    moduleCard: {
      cover: "",
      title: "",
      description: ""
    }
  }
}
</script>

<style scoped>
  #module {
    background-color: #ffffff;
    border-bottom: 1px #d9d9d9 solid;
    margin-top: 20px;
  }
  #module-image {
    width: 100%;
    height: 160px;
    background-size: cover;
    overflow: hidden;
  }
  #module-footer {
    padding: 8px 16px;
  }
  #module-name {
    font-size: 16px;
    color: #515151;
  }
  #module-description {
    font-size: 13px;
    color: #808080;
    margin-top: 2px;
  }
</style>
