<template>
  <div @click="closeMenu" :class="{ show: showMenu }" class="menu">
    <ul>
      <li>
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Mortgage' }">Mortgage Affordability Calculator</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'HomeValue' }">Find My Home's Value</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Areas' }">Area Overview</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Contact' }">Contact</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['showMenu'],
  methods: {
    closeMenu () {
      this.$emit('closeMenu')
    }
  }
}
</script>

<style scoped>
  .menu {
    height: 0;
    width: 0;
    opacity: 0;
    background-color: var(--coral);
    color: #fff;
    position: fixed;
    transition: 250ms all;
  }

  .show {
    height: 100vh;
    width: 100vw;
    opacity: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  ul {
    text-align: center;
    padding-left: 0;
  }

  li {
    padding: 50px 20px 0 20px;
    font-size: 28px;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #fff;
    transition: 250ms all;
  }

  a:hover {
    color: var(--leather);
  }
</style>
