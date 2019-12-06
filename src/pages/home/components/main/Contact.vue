<template>
  <div class="contact">
    <div class="left">联系我们</div>
    <div class="mid">
      <img src="~assets/images/1981565168836_.pic_hd.png">
    </div>
    <div class="right">
      <dl>
        <dt class=title>四川发展天路电力有限公司</dt>
        <dd
          class="info"
          v-for="(item, index) of list"
          :key="index"
        >
          {{item}}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContact',
  data () {
    return {
      list: ['公司地址：中国·四川省成都市锦江区某某路555号', '邮政编码：610555', '联系电话：+86 028-86658866', '邮箱地址： scei@scnyw.com']
    }
  }
}
</script>

<style scoped>
  .contact {
    position: relative;
    width: 1366px;
    height: 500px;
    background: rgba(246,246,246,1);
  }
  .left {
    position: absolute;
    top: 100px;
    left: 115px;
    width: 80px;
    height: 28px;
    font-size: 20px;
    font-family: PingFang-SC-Bold,PingFang-SC;
    font-weight: bold;
    color: rgba(0,0,0,1);
    line-height: 28px;
  }
  .mid {
    position: absolute;
    top: 104px;
    left: 265px;
    width: 480px;
    height: 280px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 1);
  }
  .right {
    position: absolute;
    top: 114px;
    left: 845px;
    width: 420px;
  }
  .title {
    width: 282px;
    height: 28px;
    margin-bottom: 30px;
    font-size: 20px;
    font-family: PingFang-SC-Bold,PingFang-SC;
    font-weight: bold;
    color: rgba(29,90,174,1);
    line-height: 26px;
  }
  .info {
    margin-bottom: 30px;
    font-size:16px;
    font-family:PingFang-SC-Bold,PingFang-SC;
    font-weight:bold;
    color:rgba(42,42,42,1);
    line-height:26px;
  }
</style>
