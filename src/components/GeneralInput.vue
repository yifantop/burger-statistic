<template>
  <div class="general-input">
    <input type="text" placeholder="Burger Menu"/>
    <img class="remove-icon" src="../assets/img/remove.png" alt="">
    <img class="arrow-icon" src="../assets/img/arrow.png" alt="">
  </div>
</template>

<script>
export default {
  name: "GeneralInput"
}
</script>

<style lang="scss">

.general-input {
  width: 233px;
  position: relative;

  .remove-icon {
    position: absolute;
    right: 40px;
    top: 16px;
  }
  .arrow-icon {
    position: absolute;
    right: 20px;
    top: 19px;
  }

  input {
    width: 233px;
    height: 44px;
    border-radius: 20px;
    padding: 10px 10px 10px 20px;
    outline: none;
    border: #EDEEF0 2px solid;
    box-shadow: none;
    font-size: 18px;
  }
}
</style>