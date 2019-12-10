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
  /* ---------tabs---------- */
  /*
    el-tabs el-tabs--left
    --左边：el-tabs__header is-left
      --el-tabs__nav-wrap is-left
        --el-tabs__nav-scroll
          --el-tabs__nav-scroll:after
    --右边：el-tabs__content
   */
  .el-tabs {
    height: 100% !important;
    overflow: hidden;
  }
  /* 左侧导航的宽高和边框*/
  .el-tabs >>> .el-tabs__header {
    margin-right: 0px;
    width: 280px;
    height: 100%;
    border: 1px solid rgba(171,171,171,1);
    border-top: none;
    border-bottom: 1px solid rgba(171, 171, 171,1);
  }
  /* 改变左侧导航的背景、宽高 */
  .info-wrapper >>> .el-tabs__nav-wrap,
  .info-wrapper >>> .is-left:after {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  /* 取消激活导航右侧跟随的竖线 */
  .info-wrapper >>> .el-tabs__active-bar {
    width: 0;
  }
  /* 修改每项导航的样式 */
  .info-wrapper >>> .el-tabs__item {
    padding: 0;
    font-size: 20px;
    font-weight: 400px;
    height: 88px;
    text-indent: 30px;
    line-height: 88px;
    text-align: left;
  }
  /* 激活状态导航的样式 */
  .info-wrapper >>> .is-active {
    color: rgba(255,92,92,1);
    background-color: rgba(241,241,241,1);
  }
  .el-tabs__header >>> .el-tabs--left {
    margin-right: 0;
  }
  .el-tabs >>> .el-tabs__content {
    width: 857px;
    margin-left: 60px;
    height: 978px;
    overflow: unset;
    left: 221px;
  }
  .el-tab-pane {
    margin-left: 60px;
  }
</style>
