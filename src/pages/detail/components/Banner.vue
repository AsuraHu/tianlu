<template>
  <div class="detail-banner">
    <div class="text-wrapper">
      <p class="first-title">
        标题标题标题标题
      </p>
      <p class="desc">
        标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner'
}
</script>

<style scoped>
  .detail-banner {
    position: relative;
    width: 100%;
    height: 400px;
    background-color: #606193;
  }
  .text-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;
    width: 545px;
    height: 150px;
    text-align: center;
  }
  .first-title {
    height: 70px;
    font-size: 50px;
    font-weight: 400;
    color: rgba(255,255,255,1);
    line-height: 70px;
    letter-spacing: 2px;
    margin-bottom: 15px;
  }
  .desc {
    height: 56px;
    font-size: 20px;
    font-weight: 400;
    color: rgba(255,255,255,1);
    line-height: 28px;
  }
</style>
