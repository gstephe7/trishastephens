<template>
  <div id="area-preview" :style="{ backgroundImage: `url(${img})` }">
    <router-link :to="{ name: 'AreaDetails', params: { area: params, title: title } }">
      <div class="layer">
        <h2 class="title">{{ title }}</h2>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['img', 'title', 'params'],
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  #area-preview {
    border-radius: 50%;
    background-size: cover;
    background-position: center;
  }

  .layer {
    background-image: linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, 1));
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .layer:hover {
    background-image: none;
    cursor: pointer;
    color: #fff;
  }

  a {
    color: var(--midnight);
    text-decoration: none;
  }
</style>
