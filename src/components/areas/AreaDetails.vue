<template>
  <div>
    <Header :title="$route.params.title"></Header>
    <div id="area-details">
      <div class="profile-div">
        <div class="image-box">
          <img class="profile-image" :src="areaImage" :alt="$route.params.title"/>
        </div>
        <div class="box">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div class="section">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import Image from '@/assets/img/area.jpeg'

export default {
  components: {
    Header
  },
  data () {
    return {
      areaImage: Image
    }
  }
}
</script>

<style scoped>
  #area-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
  }

  .profile-div {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    max-width: 900px;
  }

  .box {
    width: 300px;
  }

  .image-box {
    width: 300px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .profile-image {
    height: 300px;
  }

  .section {
    padding-top: 100px;
    width: 90%;
    max-width: 900px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
  }
</style>
