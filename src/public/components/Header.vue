<template>
  <div class="header">
    <div class="logo">
      <span class="logo-item">LOGO</span>
    </div>
    <div class="nav">
      <el-link
        class="nav-item"
        :underline="false"
        v-for="(nav, index) of navList"
        :key="index"
      >
        {{nav}}
      </el-link>
    </div>
    <div class="language">EN</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      navList: ['公司简介', '企业动态', '产品介绍', '客户服务', '人力资源', '联系方式']
    }
  }
}
</script>

<style scoped>
  .header {
    position: relative;
    padding: 0;
    width: 1366px;
    height: 100px;
  }
  /* ---------------logo---------------- */
  .logo {
    text-align: center;
    line-height: 60px;
    position: absolute;
    top: 20px;
    left: 115px;
    width: 60px;
    height: 60px;
    color: #fff;
    background-color: #FF5C5C;
  }
  .logo-item {
    display: inline-block;
    width: 44px;
    height: 21px;
    font-size: 15px;
    font-family: PingFang-SC-Bold,PingFang-SC;
    font-weight: bold;
    color: rgba(255,255,255,1);
    line-height: 21px;
  }
  /* ----------------nav 导航---------------- */
  .nav {
    position: absolute;
    top: 0;
    left: 299px;
    width: 900px;
    height: 100px;
  }
  .nav-item {
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 36px;
    width: 80px;
    height: 28px;
    font-size: 20px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: rgba(0,0,0,1);
    line-height: 28px;
  }
  .nav-item:first-child {
    margin-left: 60px;
  }
  /* ----------------EN 语言----------------- */
  .language {
    position: absolute;
    top: 30px;
    right: 125px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border:1px solid rgba(42,42,42,1);
    cursor: pointer;
  }
</style>
