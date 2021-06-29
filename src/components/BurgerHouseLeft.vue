<template>
  <div class="burger-house-left">
    <div class="house-area">
      <img src="../assets/img/arrow.png" alt="">
      <div class="text-area">
        <div class="title">Burger House</div>
        <div class="city">
          {{ houseCity }}
        </div>
      </div>
      <div class="price">
        {{ cityPriceAmount }}
      </div>
      <div class="horizontal-dividing">
        <div class="line-first"></div>
        <div class="line-second"></div>
        <div class="line-third"></div>
      </div>
    </div>
    <div class="sep"></div>
    <div class="menu">
      <div class="title">
        <span class="text">
          Burger Menu
          <img src="../assets/img/arrow.png" alt="">
        </span>
        <div class="price">
          {{ burgerMenuPriceAmount }}
        </div>
      </div>
      <bar-chart :burgers="burgersLeft"></bar-chart>
      <foot-bar-chart></foot-bar-chart>
    </div>
  </div>
</template>

<script>
import BarChart from "./BarChart";
import FootBarChart from "./FootBarChart";
import moneyFormSwitch from "../tools/moneyFormSwitch";
import {mapState} from 'vuex';

export default {
  name: "BurgerHouseLeft",
  components: {
    BarChart,
    FootBarChart,
  },
  props: {
    houseCity: {
      type: String,
      required: true
    },
    cityPrice: {
      type: Number,
      required: true
    },
    burgerMenuPrice: {
      type: Number,
      required: true
    }
  },
  computed: {
    cityPriceAmount() {
      return moneyFormSwitch(this.cityPrice);
    },
    burgerMenuPriceAmount() {
      return moneyFormSwitch(this.burgerMenuPrice);
    },
    ...mapState({
      burgersLeft: state => state.burgerMenuData.burgersLeft,
    })
  }
}
</script>

<style lang="scss">
.burger-house-left {
  position: absolute;
  left: -87px;
  top: 443px;
  width: 542px;
  height: 652px;

  .house-area {
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
      left: 55px;
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
      left: 66px;
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
        background: rgba(89, 206, 230, 52%);
        border: 3px solid #0B829B;
        border-radius: 50px;
        margin-right: 15px;
      }

      .line-second {
        width: 87px;
        height: 12px;
        background: rgba(243, 169, 59, 40%);
        border: 3px solid #EA930E;
        border-radius: 50px;
        margin-right: 15px;
      }

      .line-third {
        width: 114px;
        height: 12px;
        background: rgba(240, 241, 242, 40%);
        border: 3px solid #E2E4E7;
        border-radius: 50px;
      }
    }
  }

  .sep {
    height: 2px;
    width: 469px;
    background: #F1F3F5;
    position: absolute;
    left: 71px;
    top: 262px;
  }

  .menu {
    width: 469px;
    height: 336px;
    position: absolute;
    right: 0;
    bottom: 0;

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
  }
}
</style>