<template>
  <div id="nav">

    <button id="menu-btn" type="button" @click="toggleMenu">
        <font-awesome-icon v-if="showMenu" icon="times"></font-awesome-icon>
        <font-awesome-icon v-else icon="bars"></font-awesome-icon>
    </button>

    <Menu @closeMenu="toggleMenu" :showMenu="showMenu"></Menu>

  </div>
</template>

<script>
import Menu from './menu'

export default {
  components: {
    Menu
  },
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style scoped>
  #nav {
    height: 60px;
    right: 0;
    overflow: visible;
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: flex-end;
  }

  #menu-btn {
    text-align: center;
    margin: 25px 25px 0 0;
    font-size: 28px;
    color: var(--coral);
    background: none;
    border: none;
    z-index: 10;
    transition: 250ms all;
  }

  #menu-btn:hover, #menu-btn:focus {
    cursor: pointer;
    color: var(--leather);
    outline: none;
  }
</style>
