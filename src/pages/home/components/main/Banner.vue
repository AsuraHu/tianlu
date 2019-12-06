<template>
  <div class="banner">
    <p class="title1">标题标题标题标题</p>
    <p class="title2">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</p>
    <div class="form">
      <el-input
        placeholder="请输入搜索内容"
      >
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-button>搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainBanner'
}
</script>

<style scoped>
  .banner {
    position: relative;
    width: 1366px;
    height: 600px;
    background-color: #2E3B6F;
  }
  /* ------------标题------------- */
  .title1 {
    position: absolute;
    top: 196px;
    right: 474px;
    bottom: 334px;
    left: 475px;
    width: 417px;
    height: 70px;
    font-size: 50px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: rgba(255,255,255,1);
    line-height: 70px;
    text-align: center;
  }
  .title2 {
    position: absolute;
    top: 281px;
    right: 411px;
    bottom: 263px;
    left: 411px;
    width: 544px;
    height: 56px;
    font-size: 20px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: rgba(255,255,255,1);
    line-height: 28px;
    text-align: center;
  }
  /* -------------表单-------------- */
  .form {
    position: absolute;
    top: 441px;
    left: 336px;
  }
  /* ------搜索图标--------------- */
  .el-icon-search:before {
    margin-left: 25px;
    line-height: 60px;
    color: #000;
  }
  /* --------搜索框--------------- */
  .el-input {
    width: 500px;
    height: 60px;
  }
  .el-input >>> .el-input__inner {
    width: 100%;
    height: 60px;
    font-size: 20px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: rgba(204,204,204,1);
    padding-left: 90px;
  }
  .el-icon-search {
    font-size: 30px;
  }
  /* ----------搜索按钮---------------- */
  .el-button {
    width: 120px;
    height: 60px;
    border: none;
    border-radius: 5px;
    background-color: rgba(255,92,92,1);
    margin-left: 15px;
    font-size:20px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: rgba(255,255,255,1);
  }
</style>
