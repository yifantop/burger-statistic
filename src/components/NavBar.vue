<template>
  <div class="nav-bar">
    <div class="menu">
      <ul>
        <li class="c"><img class="menu-img" src="../assets/img/menu.png" alt=""></li>
        <li class="big"><span>Comparison</span></li>
        <li class="sep"></li>
        <li class="have-down-li"><span>Custom Date</span><img class="down-pull" src="../assets/img/arrow.png" alt="">
        </li>
        <li class="sep"></li>
        <li class="have-down-li"><span>Burger House</span> <img class="down-pull" src="../assets/img/arrow.png" alt="">
        </li>
        <li class="sep"></li>
        <li class="have-down-li"><span>Country</span> <img class="down-pull" src="../assets/img/arrow.png" alt=""></li>
        <li class="sep"></li>
      </ul>
      <div class="search">
        <img src="../assets/img/Search.png" alt="">
      </div>
      <div class="download">
        <span>Download</span>
        <img src="../assets/img/down.png" alt="">
      </div>
    </div>
    <div class="horizontal-dividing-line"></div>
    <div class="input-area">
      <general-input></general-input>
      <general-input></general-input>
    </div>
  </div>
</template>

<script>
import GeneralInput from "./GeneralInput";

export default {
  name: "NavBar",
  components: {
    GeneralInput,
  }
}
</script>

<style lang="scss">
.nav-bar {
  width: 1716px;
  height: 190.5px;
  margin-left: 35px;

  .menu {
    position: relative;

    ul {
      list-style-type: none;
      display: flex;
      margin: 0;
      padding: 0;

      li {
        margin-right: 30px;
        padding-top: 12px;
      }

      li span {
        margin-right: 50px;
      }

      .menu-img-li {

      }

      .have-down-li {
        position: relative;

        img {
          position: absolute;
          right: 0;
          top: 18px;
        }
      }

      li:nth-child(2) {
        font-size: 38px;
        color: #181B30;
      }

      li:not(.big, .menu-img-li) {
        font-size: 28px;
        color: #AAAFB7;
      }

      .sep {
        width: 2px;
        height: 56px;
        background: #D8D8D8;
      }
    }
    .search {
       position: absolute;
       right: 200px;
       top: 0;
     }

    .download {
      width: 173px;
      height: 53px;
      background: #F0F1F2;
      border: 1px solid #EDEEF0;
      border-radius: 10px;
      position: absolute;
      right: 0;
      top: 0;
      font-size: 16px;
      padding-top: 17px;

      span {
        margin-left: 30px;
      }
      img {
        margin-left: 40px;
      }
    }
  }

  .horizontal-dividing-line {
    background: #F0F0F0;
    width: 1663px;
    height: 2px;
    margin-left: 53px;
    margin-top: 42px;

  }

  .input-area {
    margin: 43px 0 0 50px;
    display: flex;
    justify-content: space-between;
  }

}
</style>