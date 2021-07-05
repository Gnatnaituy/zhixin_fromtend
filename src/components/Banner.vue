<template>
  <el-carousel height="400px" arrow="cover">
    <el-carousel-item v-for="banner in banners" :key="banner.id">
      <el-image style="height:400px" object-fit="fill" v-bind:src="banner.image" />
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
