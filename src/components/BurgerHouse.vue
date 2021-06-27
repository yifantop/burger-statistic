<template>
  <div class="burger-house">
    <div class="house-area">
      <img src="../assets/img/arrow.png" alt="">
      <div class="text-area">
        <div class="title">Burger House</div>
        <div class="city">California</div>
      </div>
      <div class="price">
        $234,730
      </div>
      <div class="horizontal-dividing">
        <div class="line-first"></div>
        <div class="line-second"></div>
        <div class="line-third"></div>
      </div>
    </div>
    <div class="menu">
      <div class="title">
        <span class="text">
          Burger Menu
          <img src="../assets/img/arrow.png" alt="">
        </span>
        <div class="price">$9,290</div>
      </div>
      <bar-chart></bar-chart>
      <div class="foot"></div>
    </div>
  </div>
</template>

<script>
import BarChart from "./BarChart";

export default {
  name: "BurgerHouse",
  components: {
    BarChart,
  }
}
</script>

<style lang="scss">
.burger-house {
  position: absolute;
  left: 300px;
  top: 300px;
  width: 542px;
  height: 652px;
  border: 1px solid red;

  .house-area {
    border: 1px solid green;
    font-size: 38px;
    width: 425px;
    height: 208px;
    position: absolute;
    left: 0;
    top: 0;

    img {
      position: absolute;
      left: 0;
      top: 23px;
    }

    .text-area {
      position: absolute;
      left: 70px;
      top: 10px;

      .title {
        display: block;
      }

      .city {
        display: block;
        opacity: 70%;
      }
    }

    .price {
      position: absolute;
      left: 80px;
      top: 125px;
    }

    .horizontal-dividing {
      display: flex;
      position: absolute;
      right: 0;
      bottom: 0;

      .line-first {
        width: 135px;
        height: 12px;
        background: #59CEE6;
        border: 3px solid #0B829B;
        border-radius: 50px;
        margin-right: 10px;
      }

      .line-second {
        width: 87px;
        height: 12px;
        background: #F3A93B;
        border: 3px solid #EA930E;
        border-radius: 50px;
        margin-right: 10px;
      }

      .line-third {
        width: 114px;
        height: 12px;
        background: #F0F1F2;
        border: 3px solid #E2E4E7;
        border-radius: 50px;
      }
    }
  }
  .menu {
    width: 469px;
    height: 336px;
    position: absolute;
    right: 0;
    bottom: 0;
    border: 1px solid red;

    .title {
      font-size: 28px;
      position: relative;
      left: 0;
      top: 0;
      padding-top: 10px;

      .text {
        position: relative;
        left: 0;
        top: 0;

        img {
          position: absolute;
          right: -50px;
          top: 14px;
        }
      }
      .price {
        position: absolute;
        right: 20px;
        top: 10px;
      }
    }
    .foot {

    }
  }
}
</style>