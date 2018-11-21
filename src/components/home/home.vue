<template>
  <div>
    <Jumbotron></Jumbotron>
    <div class="slider-container container">
      <MarketDataSlider class="box"></MarketDataSlider>
      <AreaDetailsSlider class="box"></AreaDetailsSlider>
    </div>

    <About></About>

    <Message></Message>

  </div>
</template>

<script>
import Jumbotron from './jumbotron'
import MarketDataSlider from './marketDataSlider'
import AreaDetailsSlider from './areaDetailsSlider'
import About from './about'
import Message from './Message'

export default {
  components: {
    Jumbotron,
    MarketDataSlider,
    AreaDetailsSlider,
    About,
    Message
  }
}
</script>

<style scoped>
  .slider-container {
    justify-content: center;
  }

  .box {
    flex: 1;
  }
</style>
