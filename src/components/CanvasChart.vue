<template>
  <canvas class="chart-region" width="553px" height="500px"></canvas>
</template>

<script>
export default {
  name: "CanvasChart",
  mounted() {
    const ctx = document.querySelector(".chart-region").getContext('2d');
    ctx.translate(276, 250);
    ctx.setLineDash([5]);

    // 四个同心圆
    ctx.strokeStyle = 'rgba(176, 183, 196, 24%)';

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

    // 米字线
    ctx.strokeStyle = 'rgba(218, 222, 228, 38%)';
    ctx.setLineDash([]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 195);
    ctx.lineTo(0, -195);
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
  }
}
</script>

<style lang="scss">
  .chart-region {
    background: #FFFFFF;
    border: 1px solid red;
  }
</style>