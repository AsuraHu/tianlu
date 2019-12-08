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
          <el-button  @click="handleClick">+阅读全文</el-button>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'InfoNav2',
  data () {
    return {
      list: [{
        id: '0001',
        title: '价值理念--标题111111',
        desc: '四川发展资产管理公司积极利用资本市场融资能力四川发展资产管理公司四川发展资产管理公司四川发展资产管理公司四川发展资产管理公司',
        date: '2019-08-20 10:35',
        sty: 'list-wrapper-spc'
      }, {
        id: '0002',
        title: '价值理念--标题222222',
        desc: '四川发展资产管理公司积极利用资本市场融资能力四川发展资产管理公司四川发展资产管理公司四川发展资产管理公司四川发展资产管理公司',
        date: '2019-08-20 10:35',
        sty: 'list-wrapper-spc'
      }, {
        id: '0003',
        title: '价值理念--标题333333',
        desc: '四川发展资产管理公司积极利用资本市场融资能力四川发展资产管理公司四川发展资产管理公司四川发展资产管理公司四川发展资产管理公司',
        date: '2019-08-20 10:35',
        sty: 'list-wrapper-spc'
      }, {
        id: '0004',
        title: '价值理念--标题444444',
        desc: '四川发展资产管理公司积极利用资本市场融资能力四川发展资产管理公司四川发展资产管理公司四川发展资产管理公司四川发展资产管理公司',
        date: '2019-08-20 10:35',
        sty: 'list-wrapper-last'
      }]
    }
  },
  methods: {
    handleClick () {
      this.$router.push('/detail')
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
    width: 795px;
    height: 160px;
    margin-bottom: 30px;
  }
  /* ------虚线-------- */
  .list-wrapper-spc {
    border-bottom:2px dashed #ababab;
    padding-bottom: 30px;
  }
  .list-wrapper-last {
    margin-bottom: 126px;
  }
  .list-img {
    position: absolute;
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
    height:30px;
    font-size:16px;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:30px;
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
