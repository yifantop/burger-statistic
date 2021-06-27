<template>
  <div class="home">
    <nav-bar></nav-bar>
    <map-area></map-area>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import MapArea from "./MapArea";

export default {
  name: "Home",
  components: {
    NavBar,
    MapArea,
  }
}
</script>

<style lang="scss">
  .home {
    padding-top: 10px;
  }
</style>