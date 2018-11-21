<template>
  <div id="area-details-div">
    <h3 class="area-name">{{ name }}</h3>
    <div class="img-div">
      <img class="area-img" :src="img" alt="Neighborhood of Athens">
    </div>
    <p class="area-quote">{{ quote }}</p>
  </div>
</template>

<script>
export default {
  props: ['name', 'quote', 'img']
}
</script>

<style scoped>
  #area-details-div {
    max-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .img-div {
    width: 100px;
    height: 100px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .area-img {
    height: 100%;
  }

  .area-quote {
    font-style: italic;
    text-align: center;
    width: 80%;
  }
</style>
