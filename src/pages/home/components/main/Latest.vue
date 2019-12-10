<template>
  <div class="latest">
    <a href="#" name="企业动态"></a>
    <div class="left">
      <dl>
        <dt class="title">最新动态</dt>
        <dd class="text">发展要闻</dd>
        <dd class="text">公示公告</dd>
        <dd class="text">重要活动</dd>
        <div>
          <router-link
            to='/culture'
            class="seeMore"
            :underline="false"
            href="culture"
          >查看更多</router-link>
        </div>
      </dl>
    </div>
    <div class="right">
      <dl
        :class="item.wrapper"
        v-for="item of list"
        :key="item.id"
      >
        <dt class="wrapper-img">
          <img src="~assets/images/位图282_180.png">
          <!-- <img :src="item.url"/> -->
          <!-- <el-image
            src="~assets/images/位图282_180.png"
            fit="fit">
          </el-image> -->
        </dt>
        <router-link
          class=wrapper-desc
          to="/culture"
          tag="dd"
        >
          {{item.desc}}
        </router-link>
      </dl>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'MainLatest',
  data () {
    return {
      list: [{
        id: '0001',
        desc: '四川发展资产管理公司积极利用资本市场融资能力四川发展资产管理公司积极利用资本市场融资能力',
        url: '~assets/images/位图282_180.png',
        wrapper: 'wrapper'
      }, {
        id: '0002',
        desc: '四川发展资产管理公司积极利用资本市场融资能力四川发展资产管理公司积极利用资本市场融资能力',
        url: '~assets/images/位图282_180.png',
        wrapper: 'wrapper'
      }, {
        id: '0003',
        desc: '四川发展资产管理公司积极利用资本市场融资能力四川发展资产管理公司积极利用资本市场融资能力',
        url: '~assets/images/位图282_180.png',
        wrapper: 'wrapper1'
      }]
    }
  }
}
</script>

<style scoped>
  .latest {
    position: relative;
    width: 1166px;
    height: 900px;
    margin: 100px 0 0 115px;
  }
  /* -----------left------------------------ */
  .left {
    width: 170px;
    height: 300px;
    float: left;
    font-family: PingFang-SC-Bold,PingFang-SC;
  }
  .title {
    width: 80px;
    height: 28px;
    margin-bottom: 60px;
    font-size: 20px;
    font-weight: bold;
    color: rgba(0,0,0,1);
    line-height: 28px;
    cursor: pointer;
  }
  .text {
    width: 64px;
    height: 22px;
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: 400;
    color: rgba(0,0,0,1);
    line-height: 22px;
    cursor: pointer;
  }
  .seeMore {
    width: 64px;
    height: 22px;
    margin-top: 34px;
    font-size: 16px;
    font-weight: 400;
    color: rgba(24,101,216,1);
    line-height: 22px;
    text-decoration: none;
  }
  .seeMore:hover {
    color: #409eff;
  }
  /* ----------------right------------------ */
  .right {
    float: left;
    height: 300px;
  }
  .wrapper {
    float: left;
    width: 282px;
    height: 300px;
    margin-right: 60px;
  }
  .wrapper1 {
    float: left;
    width: 282px;
    height: 300px;
  }
  .wrapper-img {
    width: 281px;
    height: 180px;
    margin-bottom: 30px;
  }
  .wrapper-desc {
    width: 282px;
    height: 83px;
    text-align: justify;
    font-size: 16px;
    font-family: PingFang-SC-Medium,PingFang-SC;
    font-weight: 500;
    color: rgba(42,42,42,1);
    line-height: 26px;
    cursor: pointer;
  }
  /* -----------------bottom--------------- */
  .bottom {
    position: absolute;
    top: 400px;
    left: -115px;
    float: left;
    width: 1366px;
    height: 500px;
    background-image: url('~assets/images/位图 1366_500.png');
  }
</style>
