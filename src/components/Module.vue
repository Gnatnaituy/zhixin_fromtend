<template>
  <div id="module">
    <div id="module-image" style="background: url('/images/2021/5/8b5c3f78eb8e41d8beb5d83692c4442b-t01e4c1a6fad8c7be4b.jpg') no-repeat center;" />
    <div id="module-footer">
      <div id="module-name">
        <span>自由高达</span>
      </div>
      <div id="module-description">
        <span>自由高达自由高达自由高达</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Module",

  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>

<style scoped>
  #module {
    border-bottom: 1px #d9d9d9 solid;
    padding-top: 20px;
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
