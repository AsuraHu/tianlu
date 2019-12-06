<template>
  <div class="detail-main">
    <div class="detail-container">
      <div class="content-title">
        标题标题，标题标题标题标题标题标题
      </div>
      <div class="date-and-mark">
        <div class="date">2019-08-20  10:35</div>
        <div class="mark">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/culture' }">企业文化</el-breadcrumb-item>
            <el-breadcrumb-item>价值理念</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="img-wrapper">
        <img src="~assets/images/位图备份 6-700_200.png">
      </div>
      <div class="synopsis">
        四川发展资产管理公司积极利用资本市场，融资能力四川发展资产管理公司四川发展资产，公司四川发展资产管理公司四川发展资产管理公司发展资产管理公司四川发展资。产管理公司发展资产管理公司四川发展资产管理公司发展资产管理公司四川发展资产管理公司发展资产管理，公司四川发展资产管理公司发展资产管理公司四川发展资产管理。公司发展资产管理公司四川发展资产管理公司发展资产管理公司四川发展资产管理公司发展资产管理公司四川。
      </div>
      <div class="subtitle">
        标题标题，标题标题标题标题标题标题
      </div>
      <div class="content">
        四川发展资产管理公司积极利用资本市场，融资能力四川发展资产管理公司四川发展资产，公司四川发展资产管理公司四川发展资产管理公司发展资产管理公司四川发展资。产管理公司发展资产管理公司四川发展资产管理公司发展资产管理公司四川发展资产管理公司发展资产管理，公司四川发展资产管理公司发展资产管理公司四川发展资产管理。公司发展资产管理公司四川发展资产管理公司发展资产管理公司四川发展资产管理公司发展资产管理公司四川，发展资产管理公司发展资产管理公司四川发展资产管理公司发展资产管。理公司四川发展资产管理公司发展资，产管理公司四川发展资产管理公司发展资产管理公司四。川发展资产管理公司发展资产管理公司四川发展资产管理公司，发展资产管理公司四川发展资产管理公司发展资产管理公司四川发展资产管理公司。发展资产管理公司四川发展资产管理公司发展资产管理公司四川发展资产管理公司。发展资产管理公司四川发展资产管理公司发展资产管理公司四川发展资产管理公司。
      </div>
      <!---------上下文-------- -->
      <div class="prev-next">
        <div class="prev">
          <el-button
            icon="el-icon-arrow-left"
          ></el-button>
          <el-link :underline="false">上一篇</el-link>
        </div>
        <div class="next">
          <el-link :underline="false">下一篇</el-link>
          <el-button
            icon="el-icon-arrow-right"
          ></el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailMain'
}
</script>

<style scoped>
  .detail-main {
    position: relative;
    width: 1134px;
    font-family: PingFangSC-Regular,PingFang SC;
  }
  .content-title {
    width: 482px;
    height: 40px;
    font-size: 28px;
    font-weight: 400;
    line-height: 40px;
    margin: 100px auto 50px;
  }
  .date-and-mark {
    display: flex;
    justify-content: space-between;
  }
  .el-breadcrumb {
    font-size: 20px;
  }
  .el-breadcrumb >>> .is-link,
  .el-breadcrumb >>> .el-breadcrumb__inner {
    font-size: 20px;
    height: 28px;
    line-height: 28px;
    font-weight: 500;
    color: rgba(128,128,128,1);
  }
  .el-breadcrumb >>> .is-link:hover {
    color: blue;
  }
  .el-divider {
    height: 2px;
    background-color: #ababab;
    margin: 13px 0 59px;
  }
  /* --------图片------- */
  .img-wrapper {
    width: 700px;
    height: 200px;
    margin: 0 auto 50px;
  }
  /* --------简介- 标题- 内容-------- */
  .synopsis {
    margin: 0 auto;
    width: 911px;
    height: 190px;
    font-size: 20px;
    font-weight: 500;
    text-indent: 40px;
    color: rgba(128,128,128,1);
    line-height: 40px;
  }
  .subtitle {
    margin-left: 112px;
    margin-top: 50px;
    margin-bottom: 50px;
    width: 412px;
    height: 27px;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
  }
  .content {
    margin-left: 112px;
    margin-bottom: 122px;
    width: 911px;
    font-size: 20px;
    text-indent: 40px;
    font-weight: 500;
    color: rgba(128,128,128,1);
    line-height: 40px;
  }
  /* -------prev and next------- */
  .prev-next {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }
  .prev {
    margin-left: 116px;
  }
  .el-button {
    padding: 9px 12px;
    border-radius: 0;
    width: 30px;
    height: 30px;
    border: 1px solid rgba(241, 241, 241, 1);
  }
  .prev > .el-button {
    margin-right: 15px;
  }
  .next > .el-button {
    margin-left: 15px;
  }
  .el-button >>> .el-icon-arrow-left:before,
  .el-button >>> .el-icon-arrow-right:before {
    width: 6px;
    height: 12px;
    margin: -6px;
    color: #808080;
  }
  .next {
    margin-right: 116px;
  }
</style>
