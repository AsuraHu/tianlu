<template>
  <div class=info-container>
    <div class="info-wrapper">
      <p class="info-title">企业文化</p>
      <p class="frist-title">{{inner}}</p>
      <el-tabs :tab-position="tabPosition" style="height: 200px;" @tab-click="handleChange">
        <el-tab-pane label="最新动态">
          <info-nav1></info-nav1>
        </el-tab-pane>
        <el-tab-pane label="价值理念">
          <info-nav2></info-nav2>
        </el-tab-pane>
        <el-tab-pane label="员工风采">
          <info-nav3></info-nav3>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- -----分页器------- -->
    <div class="pages">
      <div class="block">
        <el-pagination
          :current-page.sync="currentPage"
          :page-size="4"
          layout=" prev, pager, next"
          :total="4">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import InfoNav1 from './components/nav1.vue'
import InfoNav2 from './components/nav2.vue'
import InfoNav3 from './components/nav3.vue'
export default {
  name: 'CultureInfo1',
  components: {
    InfoNav1,
    InfoNav2,
    InfoNav3
  },
  data () {
    return {
      inner: '最新动态',
      pages: '',
      tabPosition: 'left',
      currentPage: 1
    }
  },
  methods: {
    handleChange (val) {
      this.inner = this.inner === val.label ? this.inner : val.label
    }
  }
}
</script>

<style scoped>
  .info-container {
    font-family: PingFang-SC-Bold,PingFang-SC;
    position: relative;
    width: 1366px;
  }
  .info-wrapper {
    margin-top: 100px;
    margin-left: 115px;
  }
  .info-title {
    width: 282px;
    line-height: 90px;
    text-indent: 30px;
    font-size: 24px;
    font-weight: bold;
    color: rgba(255,255,255,1);
    background-color: rgba(255, 92, 92, 1);
  }
  .frist-title {
    width: 793px;
    position: absolute;
    top: 0;
    left: 457px;
    height: 90px;
    font-weight: 400;
    font-size: 24px;
    line-height: 90px;
    color: rgba(0, 0, 0, 1.0);
  }
  /* ----分割线---------- */
  .frist-title:after {
    content: "";
    width: 100%;
    height: 2px;
    background-color: #ababab;
    position: absolute;
    bottom: 0;
    z-index: 1;
    left: 0;
  }
  .el-tabs {
    height: 100% !important;
    overflow: hidden;
  }
  .el-tabs >>> .el-tabs__header {
    margin-right: 0px;
    width: 282px;
    height: 500px;
  }
  .el-tabs__nav-scroll >>> .el-tabs__nav {
    width: 282px;
    height: 500px;
  }
  .el-tabs__nav >>> .el-tabs__item {
    margin: 40px 0;
  }
  .el-tabs__header >>> .el-tabs--left {
    margin-right: 0;
  }
  .el-tabs >>> .el-tabs__content {
    width: 857px;
    height: 100%;
    margin-left: 60px;
  }
  .el-tab-pane {
    margin-left: 60px;
  }
  /* ----------分页器-------- */
  .pages {
    width: 300px;
    margin: 0 auto;
  }
  .el-pagination {
    width: 300px;
    padding: 0;
  }
</style>
