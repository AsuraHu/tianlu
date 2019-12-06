<template>
  <div>
    <div class="others">
      <div class="others-left">
        <dl
          class="wrapper"
          v-for="item of navList"
          :key="item.title"
        >
          <router-link
            tag="dt"
            to="/"
            class="title"
            :class="item.style">
            {{item.title}}
          </router-link>
          <router-link
            tag="dd"
            to="/"
            :class="item.style"
            class="item"
            v-for="(inner, index) of item.children"
            :key="index"
          >
            {{inner}}
          </router-link>
        </dl>
      </div>
      <div class="others-right">
        <div class="others-right-img">
          <p class="two-dimensional-code">二维码</p>
        </div>
      </div>
    </div>
    <div class="copy-right">
      <p class="copy-right-text">版权所有：四川发展天路电力有限公司 </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      navList: [{
        title: '关于我们',
        children: ['公司治理', '公司高管', '联系方式']
      }, {
        title: '企业概括',
        style: 'margin',
        children: ['企业简介', '业务模块', '资本运营']
      }, {
        title: '人才战略',
        style: 'margin',
        children: ['人才理念', '人才选用', '人才招揽']
      }]
    }
  }
}
</script>

<style scoped>
  /* -------------others------------- */
  .others {
    width: 1366px;
    height: 400px;
    background: rgba(74,74,74,1);
  }
  /* -------------others left---------- */
  .others-left {
    width: 1014px;
    height: 400px;
    float: left;
  }
  .wrapper {
    margin-top: 70px;
    margin-left: 116px;
    display: inline-block;
    height: 330px;
  }
  .title {
    width: 80px;
    height: 28px;
    font-size: 20px;
    font-family: PingFang-SC-Bold,PingFang-SC;
    font-weight: bold;
    color: rgba(255,255,255,1);
    line-height: 28px;
    cursor: pointer;
  }
  .item {
    margin-top: 30px;
    width: 64px;
    height: 22px;
    font-size: 16px;
    font-family: PingFang-SC-Bold,PingFang-SC;
    font-weight: bold;
    color: rgba(208,208,208,1);
    line-height: 22px;
    cursor: pointer;
  }
  .margin {
    margin-left: 160px;
  }
  /* -------------others-right------------ */
  .others-right {
    height: 400px;
    width: 352px;
    float: left;
  }
  .others-right-img {
    padding: 55px 42px;
    margin-top: 100px;
    margin-left: 104px;
    width: 48px;
    height: 22px;
    background: rgba(255,255,255,1);
  }
  .two-dimensional-code {
    width: 48px;
    height: 22px;
    font-size: 16px;
    font-family: PingFang-SC-Bold,PingFang-SC;
    font-weight: bold;
    color: rgba(128,128,128,1);
    line-height: 22px;
  }
  /* -------------copy-------------- */
  .copy-right {
    position: relative;
    width: 1366px;
    height: 100px;
    background: rgba(58,58,58,1);
  }
  .copy-right-text {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    margin: auto auto;
    width: 278px;
    height: 22px;
    font-size: 16px;
    font-family: PingFang-SC-Bold,PingFang-SC;
    font-weight: bold;
    color: rgba(208,208,208,1);
    line-height: 22px;
  }
</style>
