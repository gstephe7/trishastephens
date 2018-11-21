<template>

  <div id="jumbotron">

    <div id="welcome" class="container">
      <img class="logo" src="@/assets/img/tslogo.png" alt="Trisha Stephens Real Estate Logo">
      <h2 class="title">The best real estate agent in Athens, GA</h2>
    </div>

  </div>

</template>

<script>
export default {
}
</script>

<style scoped>
  #jumbotron {
    height: 450px;
    background-image: url('../../assets/img/athens.jpg');
    background-position: center;
    background-size: cover;
  }

  #welcome {
    background-image: linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, 1));
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo {
    height: 225px;
  }

  .title {
    text-align: center;
    font-style: italic;
    padding: 0 20px 0 20px;
  }
</style>
