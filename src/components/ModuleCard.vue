<template>
  <div id="module">
    <div class="module-image" ref="ref-module-image">
      <el-image :style="{height: imageHeight + 'px'}" :src="moduleCard.cover" object-fit="fill" />
    </div>
    <el-row>
      <el-col :span="24">
        <div class="module-footer">
          <div class="module-name">
            <p id="module-title">{{ moduleCard.title }}</p>
          </div>
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
      imageHeight: 250
    };
  },

  mounted() {
    let moduleImageWidth = window.getComputedStyle(this.$refs["ref-module-image"]).width.slice(0, -2);
    this.imageHeight = moduleImageWidth / 9 * 5;
  },

  props: {
    moduleCard: {
      cover: "",
      title: ""
    }
  }
}
</script>

<style scoped>
  #module {
    transition: transform .3s ease-in-out, 
                box-shadow .3s cubic-bezier(.47, 0, .745, .715), 
                border .3s linear .3s;
    margin-top: 24px;
    background-color: #ffffff;
    border-bottom: 1px #d9d9d9 solid;
  }
  #module:hover {
    box-shadow: 0 16px 16px rgba(34, 34, 34, 0.25);
    -webkit-transform: translateY(-1px);
    -moz-transform: translateY(-1px);
    transform: translateY(-1px);
    margin-top: 8px;
  }

  #module:hover #module-title {
    height: 32px;
    white-space: normal;
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
    font-size: 14px;
    color: #515151;
  }
  #module-title {
    line-height: 16px;
    height: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -ms-text-overflow: ellipsis;
  }
</style>
