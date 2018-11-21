<template>
  <div id="marketData">
    <h3 class="name">{{ county }}</h3>
    <img class="county-img" :src="img" alt="County whose data is shown">
    <h3 class="price">${{ price }}</h3>
    <font-awesome-icon class="arrow" :icon="arrow" :style="{ color: arrowColor }"></font-awesome-icon>
  </div>
</template>

<script>
export default {
  props: ['county', 'price', 'arrow', 'img'],
  computed: {
    arrowColor () {
      if (this.arrow === 'sort-up') {
        return '#0fbc4e'
      } else {
        return '#bc110f'
      }
    }
  }
}
</script>

<style>
  #marketData {
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .county-img {
    opacity: 1;
    height: 75px;

  }

  .price {
    margin-bottom: 12px;
  }

  .arrow {
    font-size: 24px;
  }
</style>
