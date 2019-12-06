<template>
  <!-- ----right------- -->
  <div class="right">
    <!-- -----内容------ -->
    <dl
      :class="item.sty"
      class="list-wrapper"
      v-for="item of list"
      :key="item.id"
    >
      <dt class="list-img">
        <img src="~assets/images/位图备份 6.png"/>
      </dt>
      <dd class="list-cont">
        <div class="list-title">
          {{item.title}}
        </div>
        <div class="list-desc">
          {{item.desc}}
        </div>
        <div class="more">
          <p class="date">{{item.date}}</p>
          <el-button>+阅读全文</el-button>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'InfoNav1',
  data () {
    return {
      list: [{
        id: '0001',
        title: '标题标题标题标题标题标题',
        desc: '四川发展资产管理公司积极利用资本市场融资能力四川发展资产管理公司四川发展资产管理公司四川发展资产管理公司四川发展资产管理公司',
        date: '2019-08-20 10:35',
        sty: 'list-wrapper-spc'
      }, {
        id: '0002',
        title: '标题标题标题标题标题标题',
        desc: '四川发展资产管理公司积极利用资本市场融资能力四川发展资产管理公司四川发展资产管理公司四川发展资产管理公司四川发展资产管理公司',
        date: '2019-08-20 10:35',
        sty: 'list-wrapper-spc'
      }, {
        id: '0003',
        title: '标题标题标题标题标题标题',
        desc: '四川发展资产管理公司积极利用资本市场融资能力四川发展资产管理公司四川发展资产管理公司四川发展资产管理公司四川发展资产管理公司',
        date: '2019-08-20 10:35',
        sty: 'list-wrapper-spc'
      }, {
        id: '0004',
        title: '标题标题标题标题标题标题',
        desc: '四川发展资产管理公司积极利用资本市场融资能力四川发展资产管理公司四川发展资产管理公司四川发展资产管理公司四川发展资产管理公司',
        date: '2019-08-20 10:35'
      }]
    }
  }
}
</script>

<style scoped>
  .right {
    margin-top: 30px;
    width: 794px;
  }
  .el-divider--horizontal {
    height: 2px;
    color: #ababab;
    margin-top: 0;
  }
  .first-title {
    width: 96px;
    height: 90px;
    font-size: 24px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: rgba(0,0,0,1);
    line-height: 90px;
  }
  /* -----右侧内容-------- */
  .list-wrapper {
    position: relative;
    width: 793px;
    height: 160px;
    margin-bottom: 60px;
  }
  .list-wrapper-spc:after {
    content: "";
    width: 100%;
    height: 0px;
    background-color: #fff;
    border: 1px #ababab dashed;
    position: absolute;
    bottom: -35px;
    z-index: 1;
    left: 0;
  }
  .list-img {
    position: absolute;
    top: 5px;
    left: 0;
    width: 201px;
    height: 160px;
  }
  .list-cont {
    position: absolute;
    top: 5px;
    left: 232px;
    font-family: PingFangSC-Regular,PingFang SC;
  }
  .list-title {
    width: 240px;
    height: 28px;
    margin-bottom: 15px;
    font-size: 20px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: rgba(0,0,0,1);
    line-height: 28px;
  }
  .list-desc {
    width: 563px;
    height: 52px;
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(128,128,128,1);
    line-height: 26px;
  }
  .more {
    display: flex;
    justify-content: space-between;
  }
  .date {
    width:144px;
    height:22px;
    font-size:16px;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:22px;
  }
  .el-button--default {
    padding: 0;
    width:111px;
    height:30px;
    line-height: 30px;
    font-size: 16px;
    font-weight: 400px;
    color: rgba(255,92,92,1);
    border-radius: none;
    border:2px solid rgba(255,92,92,1);
  }
</style>
