<template>
  <div class="spider-chart">
    <div class="spider-chart-title">
      Spider Chart
    </div>
    <canvas-chart></canvas-chart>
    <div class="line-left"></div>
    <div class="line-right"></div>
  </div>
</template>

<script>
import Point from "./Point";
import CanvasChart from "./CanvasChart";

import {mapState} from 'vuex';

export default {
  name: "SpiderChart",
  components: {
    Point,
    CanvasChart
  },
  computed: {
    ...mapState({
      qualityAndCategory: state => state.spiderChartData.qualityAndCategory,
    }),
  }
}
</script>

<style lang="scss">
.spider-chart {
  position: absolute;
  left: 528px;
  top: 598px;

  .line-left {
    width: 100px;
    height: 2px;
    position: absolute;
    top: 314px;
    right: -100px;
    background: rgba(218, 222, 228, 38%);
  }
  .line-right {
    width: 100px;
    height: 2px;
    position: absolute;
    top: 314px;
    left: -100px;
    background: rgba(218, 222, 228, 38%);
  }

  .spider-chart-title {
    font-size: 31px;
    text-align: center;
    margin-bottom: 30px;
  }

}
</style>