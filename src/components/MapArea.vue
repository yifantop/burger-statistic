<template>
  <div class="map-area">
    <img class="map-img" src="../assets/img/map.png" alt="">
    <div class="label-1">
      <div class="focus-point">
        <div class="center-point">
        </div>
      </div>
      <span>California</span>
    </div>
    <div class="label-2">
      <div class="focus-point">
        <div class="view-insight">
          <div class="inner">
            <div class="center-point"></div>
            <div class="text2">+ $344,560</div>
          </div>
          <div class="text1">
            View Insight
            <img src="../assets/img/arrow-right.png" alt="">
          </div>
        </div>
      </div>
      <span>Barcelona</span>
    </div>
    <burger-house></burger-house>

  </div>
</template>

<script>
import BurgerHouse from "./BurgerHouse";

export default {
  name: "MapArea",
  components: {
    BurgerHouse,
  }
}
</script>

<style lang="scss">
  .map-area {
    width: 1588px;
    position: absolute;
    left: 128px;
    top: 146px;


    .map-img {
      width: 1588px;
    }

    .label-1 {
      width: 74.4px;
      height: 100px;
      position: absolute;
      left: 157px;
      top: 260px;


      .focus-point {
        width: 70.4px;
        height: 70.4px;
        background: #FEFEFE;
        border: 3px solid rgb(218,222,228);
        border-radius: 50%;
        position: relative;

        .center-point {
          width: 33.66px;
          height: 33.66px;
          border: 4px solid #0B829B;
          background: #59CEE6;
          border-radius: 50%;
          position: relative;
          left: 25%;
          top: 24%;
        }
      }
      span {
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 18px;
        opacity: 70%;
      }
    }

    .label-2 {
      width: 513px;
      height: 134px;
      position: absolute;
      left: 560px;
      top: 187px;

      span {
        position: absolute;
        left: 0;
        bottom: 0;
        font-size: 18px;
        opacity: 70%;
      }

      .focus-point {
        width: 100px;
        height: 100px;
        background: #FEFEFE;
        border: 3px solid rgb(218,222,228);
        border-radius: 50%;
        position: relative;

        .view-insight {
          width: 496px;
          height: 68px;
          border: 3px solid rgb(218,222,228);
          border-radius: 50px;
          position: absolute;
          left: 13px;
          top: 13px;
          background: rgba(245, 247, 249, 87%);

          .inner {
            width: 229px;
            height: 68px;
            border: 3px solid rgb(218,222,228);
            border-radius: 50px;
            background: #FEFEFE;
            position: absolute;
            left: -3px;
            top: -3px;

            .center-point {
              width: 34px;
              height: 34px;
              border: 4px solid #0B829B;
              background: #59CEE6;
              border-radius: 50%;
              position: relative;
              left: 13px;
              top: 13px;
            }

            .text2 {
              position: absolute;
              left: 64px;
              top: 16px;
              font-size: 25px;
              opacity: 70%;
            }
          }

          .text1 {
            font-size: 25px;
            position: absolute;
            right: 35px;
            top: 16px;
            opacity: 70%;

            img {
              margin-left: 50px;
              margin-bottom: 2px;
            }
          }
        }
      }
    }
  }
</style>