<template>
  <el-container class="web-box">
    <el-header>
      <detail-header></detail-header>
    </el-header>
    <detail-banner></detail-banner>
    <el-main>
      <detail-main></detail-main>
    </el-main>
    <el-footer>
      <detail-footer></detail-footer>
    </el-footer>
  </el-container>
</template>

<script>
import DetailHeader from '@/public/components/Header'
import DetailBanner from './components/Banner'
import DetailMain from './components/Main'
import DetailFooter from '@/public/components/Footer'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner,
    DetailMain,
    DetailFooter
  }
}
</script>

<style scoped>
  .el-header {
    height: 100px !important;
    padding: 0px;
  }
  .el-main {
    margin: 0 auto;
    overflow: hidden;
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
