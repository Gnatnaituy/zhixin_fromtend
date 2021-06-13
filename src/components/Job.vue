<template>
  <div class="job-content">
    <div v-html="job.content"></div>
  </div>
</template>

<script>
export default {
  name: "Job",

  props: {
    job: {}
  }
}
</script>

<style scoped>
.job-content {
  margin-top: 10px;
}

</style>
