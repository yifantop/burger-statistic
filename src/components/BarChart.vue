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
    <div class="foot"></div>
  </div>
</template>

<script>
export default {
  name: "BarChart",
  data() {
    return {
      burgers: [
        {id: 0, quantity: 34, isActive: true},
        {id: 1, quantity: 24, isActive: false},
        {id: 2, quantity: 40, isActive: true},
        {id: 3, quantity: 22, isActive: false},
        {id: 4, quantity: 12, isActive: false},
        {id: 5, quantity: 40, isActive: true},
        {id: 6, quantity: 26, isActive: false},
        {id: 7, quantity: 55, isActive: true},
        {id: 8, quantity: 25, isActive: false},
        {id: 9, quantity: 39, isActive: true},
        {id: 10, quantity: 21, isActive: false},
        {id: 11, quantity: 10, isActive: false},
      ],

    }
  }
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
        background: #DADEE4;
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
            background: #59CEE6;
            border: 1px solid #0B829B;
          }
          .notActive {
            background: #F0F1F2;
            border: 1px solid #E2E4E7;
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