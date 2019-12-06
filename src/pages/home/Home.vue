<template>
  <el-container class="web-box">
    <el-header>
      <home-header></home-header>
    </el-header>
    <el-main>
      <home-main></home-main>
    </el-main>
    <el-footer>
      <home-footer></home-footer>
    </el-footer>
  </el-container>
</template>

<script>
import HomeHeader from '@/public/components/Header'
import HomeMain from './components/Main.vue'
import HomeFooter from '@/public/components/Footer'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeMain,
    HomeFooter
  }
}
</script>

<style scoped>
  .el-header {
    height: 100px !important;
    padding: 0px;
  }
  .el-main {
    padding: 0px;
  }
  .el-footer {
    padding: 0px;
    height: 500px !important;
  }
  .web-box {
    max-width: 1366px;
    margin: 0 auto;
  }
</style>
