<template>
  <canvas class="chart-region" width="553px" height="500px"></canvas>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "CanvasChart",
  computed: {
    ...mapState({
      qualityAndCategory: state => state.spiderChartData.qualityAndCategory,
      colorSpider: state => state.spiderChartData.colorSpider,
    })
  },
  methods: {
    // 画4个同心圆
    drawConcentricCircles(ctx) {
      ctx.strokeStyle = 'rgba(176, 183, 196, 15%)';
      ctx.beginPath();
      ctx.arc(0, 0, 236, 0, Math.PI * 2, true);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(176, 183, 196, 15%)';
      ctx.moveTo(180, 0);
      ctx.arc(0, 0, 180, 0, Math.PI * 2, true);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(176, 183, 196, 24%)';
      ctx.moveTo(124, 0);
      ctx.arc(0, 0, 124, 0, Math.PI * 2, true);
      ctx.stroke();


      ctx.moveTo(80, 0);
      ctx.arc(0, 0, 80, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.closePath();
    },
    // 画米字线
    drawCrossLine(ctx) {
      ctx.strokeStyle = 'rgba(218, 222, 228, 38%)';
      ctx.setLineDash([]);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 191);
      ctx.lineTo(0, -190);
      ctx.stroke();

      ctx.moveTo(276, 0);
      ctx.lineTo(-276, 0);
      ctx.stroke();

      ctx.moveTo(150, -150);
      ctx.lineTo(-150, 150);
      ctx.stroke();

      ctx.moveTo(-150, -150);
      ctx.lineTo(150, 150);
      ctx.stroke();
      ctx.closePath();
    },
    // 画标识
    drawLabel(ctx) {
      ctx.font = '14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(32, 35, 55, 70%)';
      // 1
      ctx.fillText("Burger Tier 1", 0, -236);
      ctx.fillText("350 g", 0, -216);
      // 2
      ctx.fillText("Burger Tier 2", 200, -170);
      ctx.fillText("450 g", 200, -150);
      // 3
      ctx.fillText("Burger Tier 3", 230, -8);
      ctx.fillText("480 g", 230, 12);
      // 4
      ctx.fillText("Bistro Fries", 200, 150);
      ctx.fillText("250 g", 200, 170);
      // 5
      ctx.fillText("County Fair Fries", 0, 226);
      ctx.fillText("250 g", 0, 246);
      // 6
      ctx.fillText("Yuengling", -200, 150);
      ctx.fillText("Beer 0,5", -200, 170);
      ctx.fillText("COMBO", -200, 190);
      // 7
      ctx.fillText("Samuel Adams", -226, -8);
      ctx.fillText("Beer 0,5", -226, 12);
      // 8
      ctx.fillText("Promo Burger", -200, -170);
      ctx.fillText("COMBO", -200, -150);

    },
    // 获取8个点的坐标以及它们的控制点(调用8次)
    getPointPositionAndCpx(pointInfo, controlPointDistance) {
      let coordinateX = 0;
      let coordinateY = 0;
      let cpx = [];
      // 在米字线上的占比像素
      let len = pointInfo.quality / 1000 * 236;
      switch (pointInfo.category) {
        case 1:
          coordinateX = 0;
          coordinateY = len * (-1);
          cpx[0] = controlPointDistance * Math.sin(Math.PI / 8);
          cpx[1] = controlPointDistance * Math.cos(Math.PI / 8) * (-1);
          break;
        case 2:
          coordinateX = len * Math.cos(Math.PI / 4);
          coordinateY = coordinateX * (-1);
          cpx[0] = controlPointDistance * Math.cos(Math.PI / 8);
          cpx[1] = controlPointDistance * Math.sin(Math.PI / 8) * (-1);
          break;
        case 3:
          coordinateX = len;
          coordinateY = 0;
          cpx[0] = controlPointDistance * Math.cos(Math.PI / 8);
          cpx[1] = controlPointDistance * Math.sin(Math.PI / 8);
          break;
        case 4:
          coordinateX = len * Math.cos(Math.PI / 4);
          coordinateY = len * Math.cos(Math.PI / 4);
          cpx[0] = controlPointDistance * Math.sin(Math.PI / 8);
          cpx[1] = controlPointDistance * Math.cos(Math.PI / 8);
          break;
        case 5:
          coordinateX = 0;
          coordinateY = len;
          cpx[0] = controlPointDistance * Math.sin(Math.PI / 8) * (-1);
          cpx[1] = controlPointDistance * Math.cos(Math.PI / 8);
          break;
        case 6:
          coordinateX = len * Math.cos(Math.PI / 4) * (-1);
          coordinateY = coordinateX * (-1);
          cpx[0] = controlPointDistance * Math.cos(Math.PI / 8) * (-1);
          cpx[1] = controlPointDistance * Math.sin(Math.PI / 8);
          break;
        case 7:
          coordinateX = len * (-1);
          coordinateY = 0;
          cpx[0] = controlPointDistance * Math.cos(Math.PI / 8) * (-1);
          cpx[1] = controlPointDistance * Math.sin(Math.PI / 8) * (-1);
          break;
        case 8:
          coordinateX = len * Math.cos(Math.PI / 4) * (-1);
          coordinateY = len * Math.cos(Math.PI / 4) * (-1);
          cpx[0] = controlPointDistance * Math.sin(Math.PI / 8) * (-1);
          cpx[1] = controlPointDistance * Math.cos(Math.PI / 8) * (-1);
      }
      return [coordinateX, coordinateY, cpx[0], cpx[1]];
    },
    // 连接8个点
    connectPoints(ctx, pointPosition, backgroundColor, borderColor, lineType) {
      ctx.fillStyle = backgroundColor;
      ctx.strokeStyle = borderColor;
      // 确定画实线还是虚线
      if (lineType === 'dash') {
        ctx.setLineDash([10]);
      } else {
        ctx.setLineDash([0]);
      }
      ctx.beginPath();
      ctx.moveTo(pointPosition[0][0], pointPosition[0][1]);
      for (let i = 0, j = 1; i < pointPosition.length; i++, j++) {
        if (i === 7) {
          j = 0;
        }
        ctx.quadraticCurveTo(pointPosition[i][2], pointPosition[i][3], pointPosition[j][0], pointPosition[j][1]);
      }
      ctx.stroke();
      ctx.fill();
    },
    // 画8个点（连虚线）
    drawPoint(ctx, PointPositionAndCpx, radius) {
      ctx.setLineDash([0]);
      ctx.beginPath();
      ctx.moveTo(PointPositionAndCpx[0] + radius, PointPositionAndCpx[1]);
      ctx.arc(PointPositionAndCpx[0], PointPositionAndCpx[1], radius, 0, Math.PI * 2, false);
      ctx.stroke();
      ctx.fill();
    },
    // 虚线构成的外层雷达图
    drawOuterSpiderChart(ctx) {
      // 8个点的坐标
      let pointPosition = [];
      for (let i = 0; i < this.qualityAndCategory.length; i++) {
        pointPosition[i] = this.getPointPositionAndCpx(this.qualityAndCategory[i], 80);
      }
      // 8个点连成边，并填充背景色
      this.connectPoints(ctx, pointPosition, 'rgba(242, 243, 245, 20%)', 'rgba(147, 155, 170, 92%)', 'dash');
      // 画8个点
      ctx.fillStyle = '#FFFFFF';
      ctx.strokeStyle = '#9BA2B0';
      ctx.lineWidth = 3;
      for (let i = 0; i < pointPosition.length; i++) {
        this.drawPoint(ctx, pointPosition[i], 5);
      }
    },
    // 内层有背景颜色的雷达图
    drawInnerSpiderChart(ctx) {
      // 获取8个点的坐标
      let pointPosition = [];
      for (let i = 0; i < this.colorSpider.length; i++) {
        pointPosition[i] = this.getPointPositionAndCpx(this.colorSpider[i], 210);
      }
      // 8个点连成边，并填充背景色
      this.connectPoints(ctx, pointPosition, 'rgba(89, 206, 230, 38%)', 'rgba(11, 130, 155, 100%)', 'full');
      // 画8个点
      ctx.fillStyle = '#81D7E8';
      ctx.strokeStyle = '#0B829B';
      ctx.lineWidth = 2;
      for (let i = 0; i < pointPosition.length; i++) {
        this.drawPoint(ctx, pointPosition[i], 5);
      }
    },
    // 画有背景的两个同心圆
    drawCenterCircles(ctx) {
      // 外层圆
      ctx.fillStyle = 'rgba(125, 216, 235, 82%)';
      ctx.strokeStyle = '#0B829B';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(40, 0);
      ctx.arc(0, 0, 40, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.fill();
      // 内层圆
      ctx.fillStyle = 'rgba(255, 255, 255, 100%)';
      ctx.strokeStyle = 'rgb(11, 130, 155)';
      ctx.beginPath();
      ctx.moveTo(15, 0);
      ctx.arc(0, 0, 15, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.fill();
      // 左三角形
      ctx.fillStyle = '#0B829B';
      ctx.beginPath();
      ctx.moveTo(-60, 0);
      ctx.lineTo(-50, -6);
      ctx.lineTo(-50, 6);
      ctx.fill();
      // 右三角形
      ctx.beginPath();
      ctx.moveTo(60, 0);
      ctx.lineTo(50, -6);
      ctx.lineTo(50, 6);
      ctx.fill();
    }
  },
  mounted() {
    const ctx = document.querySelector(".chart-region").getContext('2d');
    ctx.translate(276, 250);
    ctx.setLineDash([10]);
    // 4个同心圆
    this.drawConcentricCircles(ctx);
    // 米字线
    this.drawCrossLine(ctx);
    // 画Label
    this.drawLabel(ctx);
    // 画有背景颜色的雷达图
    this.drawInnerSpiderChart(ctx);
    // 画无背景色虚线的雷达图
    this.drawOuterSpiderChart(ctx);
    // 画有背景的两个同心圆
    this.drawCenterCircles(ctx);
  }
}
</script>

<style lang="scss">
.chart-region {
  background: #FFFFFF;
  position: relative;
  left: 0;
  top: 0;
  margin-bottom: 50px;
}
</style>