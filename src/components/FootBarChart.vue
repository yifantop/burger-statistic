<template>
  <div class="foot-bar-chart">
    <div class="func-box">X-Ray</div>
    <div class="sep-func-box"></div>
    <div class="func-box">Export</div>
    <div class="sep-func-box"></div>
    <div class="func-box">Save</div>
  </div>
</template>

<script>
export default {
  name: "FootBarChart"
}
</script>

<style lang="scss">
  .foot-bar-chart {
    width: 469px;
    height: 194px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(230, 234, 230, 20%);
    border: 2px solid #EAEEEF;
    border-radius: 20px;
    z-index: 5;
    display: flex;

    .func-box {
      width: 33.2%;
      height: 100%;
      text-align: center;
      font-size: 18px;
      opacity: 40%;
      line-height: 321px;
    }
    .func-box:first-child {
      opacity: 70%;
    }
    .sep-func-box {
      width: 2px;
      height: 194px;
      background: #F1F3F5;
    }
  }
</style>