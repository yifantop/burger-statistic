<template>
  <div class="spider-chart">
    <div class="spider-chart-title">
      Spider Chart
    </div>
    <canvas-chart></canvas-chart>
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


  .spider-chart-title {
    font-size: 31px;
    text-align: center;
    margin-bottom: 30px;
  }

}
</style>