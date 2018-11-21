<template>
  <div id="header">
    <div class="layer">
      <img class="header-logo" src="../../assets/img/tslogo.png" alt="Trisha Stephens Logo"/>
      <h4 class="header-title">{{ title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
  #header {
    height: 80px;
    background-image: url('../../assets/img/athens.jpg');
    background-position: center;
    background-size: cover;
  }

  .layer {
    background-image: linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, 1));
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .header-logo {
    height: 40px;
    padding-left: 25px;
  }

  .header-title {
    padding-left: 25px;
    margin: 0;
    width: 60%;
  }
</style>
