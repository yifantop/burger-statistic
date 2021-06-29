<template>
  <div class="bar-chart">
    <div class="bar-chart-title">
      <div class="label">
        <div class="label-icon"></div>
        <div class="label-text">Active Goal</div>
      </div>
      <div class="number">30</div>
    </div>
    <div class="main-area">
      <div class="dividing-line"></div>
      <ul class="bar-chart-img">
        <li v-for="burger in burgers"
            :key="burger.id"
            class="single-bar">
          <div
              :class="{active: burger.isActive, notActive: !burger.isActive}"
              class="single-bar-img"
              :style="{height: burger.quantity * 1.5 + 'px'}"></div>
          <div class="single-bar-description">
            {{burger.quantity}}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "BarChart",
  props: {
    burgers: {
      type: Array,
      required: true
    }
  },

}
</script>

<style lang="scss">
  .bar-chart {
    position: absolute;
    left: 0;
    top: 80px;
    width: 469px;
    height: 194px;
    border: 2px solid #EDEEF0;
    border-radius: 20px;
    background: #FFFFFF;
    z-index: 6;

    .bar-chart-title {
      position: relative;
      left: 0;
      top: 30px;

      .label {
        font-size: 14px;
        margin-left: 30px;

        .label-icon {
          display: inline-block;
          width: 10px;
          height: 10px;
          background: #59CEE6;
          border: 2px solid #0B829B;
          border-radius: 50%;

        }
        .label-text {
          display: inline-block;
          margin-left: 15px;
        }
      }
      .number {
        font-size: 14px;
        position: absolute;
        right: 20px;
        top: 0;
      }
    }
    .main-area {
      position: absolute;
      top: 50px;
      left: 18px;

      .dividing-line {
        width: 428px;
        height: 1px;
        background: rgba(218, 222, 228, 100%);
        border-radius: 20px;
        position: relative;
        top: 40px;
      }
      .bar-chart-img {
        list-style-type: none;
        display: flex;
        justify-content: space-around;
        align-items: baseline;
        padding: 0;
        margin: 0;
        position: relative;

        .single-bar {
          .active {
            background: rgba(89, 206, 230, 52%);
            border: 1.6px solid #0B829B;
          }
          .notActive {
            background: rgba(240, 241, 242, 40%);
            border: 1.6px solid #E2E4E7;
          }
          .single-bar-img {
            width: 15px;
            border-radius: 8px;
            box-shadow: #00AED3;
          }
          .single-bar-description {
            margin-top: 10px;
            font-size: 13px;
            color: #AFB1B8;
          }
        }
      }
    }
  }
</style>