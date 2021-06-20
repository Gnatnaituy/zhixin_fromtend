<template>
  <div class="module">
    <div class="module-image">
      <el-image style="height: 250px;" :src="moduleCard.cover" />
    </div>
    <el-row>
      <el-col :span="24">
        <div class="module-footer">
          <div class="module-name">
            <p class="module-title">{{ moduleCard.title }}</p>
          </div>
<!--          <div id="module-description">-->
<!--            <p>{{ moduleCard.description }}</p>-->
<!--          </div>-->
        </div>
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
  .module {
    background-color: #ffffff;
    border-bottom: 1px #d9d9d9 solid;
    margin-top: 20px;
  }
  .module-image {
    width: 100%;
    background-size: cover;
    overflow: hidden;
  }
  .module-footer {
    padding: 10px 16px;
  }
  .module-name {
    font-size: 16px;
    color: #515151;
  }
  .module-title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -ms-text-overflow: ellipsis;
  }
  #module-description {
    font-size: 13px;
    color: #808080;
    margin-top: 2px;
  }
</style>
