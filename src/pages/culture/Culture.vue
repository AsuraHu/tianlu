<template>
  <el-container class="web-box">
    <!-- ------头部导航------- -->
    <el-header>
      <culture-header></culture-header>
    </el-header>
    <!-- -------页面主体------ -->
    <el-main>
      <!-- -----banner图----- -->
      <culture-banner></culture-banner>
      <!-- -------内容------- -->
      <culture-info></culture-info>
    </el-main>
    <!-- ------底部信息------- -->
    <el-footer>
      <culture-footer></culture-footer>
    </el-footer>
  </el-container>
</template>

<script>
import CultureHeader from '@/public/components/Header'
import CultureBanner from '@/pages/home/components/main/Banner'
import CultureInfo from './components/Info'
import CultureFooter from '@/public/components/Footer'
export default {
  name: 'Culture',
  components: {
    CultureHeader,
    CultureFooter,
    CultureBanner,
    CultureInfo
  }
}
</script>

<style scoped>
  .el-header {
    height: 100px !important;
    padding: 0px;
  }
  .el-main {
    height: 1900px;
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
