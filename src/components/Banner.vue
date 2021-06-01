<template>
  <el-carousel height="600px" arrow="cover">
    <el-carousel-item v-for="banner in banners" :key="banner.id">
      <el-image v-bind:src="banner.image" object-fit="cover" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import axios from 'axios'

export default {
  name: "Banner",

  data() {
    return {
      banners: []
    }
  },

  mounted() {
    this.loadBanners()
  },

  methods: {
    loadBanners() {
      axios.get('/banner/list').then(res => {
        if (res.status === 200 && res.data.success === true) {
          this.banners = res.data.data
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
