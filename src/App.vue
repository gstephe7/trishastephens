<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '@/components/nav/nav'
import Footer from '@/components/footer/Footer'

export default {
  name: 'app',
  components: {
    'Navbar': Nav,
    'Footer': Footer
  }
}
</script>

<style>
  @import './assets/css/style.css';
</style>
