<template>
  <div class="about container">
    <div class="box">
      <h2 id="about" class="title">Trisha Stephens</h2>
      <h4 class="subtitle">Licensed Realtor&reg;</h4>
      <img src="@/assets/img/trisha.jpg" alt="Trisha Stephens" class="img">
    </div>
    <div class="box">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .about {
    justify-content: center;
    align-items: center;
    padding: 125px 5px 25px 5px;
  }

  .box {
    min-width: 300px;
    max-width: 350px;
    padding: 0 5% 0 5%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    text-align: center;
    color: var(--leather);
  }

  .subtitle {
    text-align: center;
    margin-top: -20px;
    font-style: italic;
  }

  .img {
    border-radius: 50%;
    width: 250px;
  }
</style>
