<template>
  <div>
    <Header title="Home Value Confirmaton"></Header>
    <div id="confirmation">
      <div class="box">
        <h3>An email has been sent to you with a detailed report regarding your home's value!</h3>
        <router-link :to="{ name: 'Home' }">Return to the homepage</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header'

export default {
  components: {
    Header
  }
}
</script>

<style scoped>
  #confirmation {
    height: 500px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  .box {
    text-align: center;
    width: 80%;
    max-width: 600px;
  }
</style>
