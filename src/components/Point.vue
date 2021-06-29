<template>
  <div class="point" :style="{left: confirmPositionLeft(), top: confirmPositionTop()}"></div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "Point",
  props: {
    quality: {
      type: Number,
      required: true
    },
    category: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState({
      pointOriginalPositionLeft: state => state.spiderChartData.pointOriginalPositionLeft,
      pointOriginalPositionTop: state => state.spiderChartData.pointOriginalPositionTop
    })
  },
  methods: {
    confirmPositionLeft() {
      // coordinatesX初始值能使点位于(0, 0)处
      let coordinatesX = this.pointOriginalPositionLeft;
      let offset = 0;
      switch (this.category) {
        case 1:
          offset= 0;
          break;
        case 2:
          offset = this.quality / 1000 * 235 * Math.cos(Math.PI / 4);
          break
        case 3:
          offset = this.quality / 1000 * 235;
          break;
        case 4:
          offset = this.quality / 1000 * 235 * Math.cos(Math.PI / 4);
          break;
        case 5:
          offset = 0;
          break;
        case 6:
          offset = this.quality / 1000 * 235 * Math.cos(Math.PI / 4) * (-1);
          break;
        case 7:
          offset = this.quality / 1000 * 235 * (-1);
          break;
        case 8:
          offset = this.quality / 1000 * 235 * Math.cos(Math.PI / 4) * (-1);
          break;
      }
      return coordinatesX + offset + 'px';
    },
    confirmPositionTop() {
      let coordinatesY = this.pointOriginalPositionTop;
      let offset = 0;
      switch (this.category) {
        case 1:
          offset = this.quality / 1000 * 235 * (-1);
          break;
        case 2:
          offset = this.quality / 1000 * 235 * Math.sin(Math.PI / 4) * (-1);
          break;
        case 3:
          offset = 0;
          break;
        case 4:
          offset = this.quality / 1000 * 235 * Math.sin(Math.PI / 4);
          break;
        case 5:
          offset = this.quality / 1000 * 235;
          break;
        case 6:
          offset = this.quality / 1000 * 235 * Math.sin(Math.PI / 4);
          break;
        case 7:
          offset = 0;
          break;
        case 8:
          offset = this.quality / 1000 * 235 * Math.sin(Math.PI / 4) * (-1);
      }
      return coordinatesY + offset + 'px';
    }
  }
}
</script>

<style lang="scss">
  .point {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #FFFFFF;
    border: 2px solid #9BA2B0;
    position: absolute;
  }
</style>