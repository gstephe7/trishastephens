<template>
  <div id="client-view">
    <div id="client-container">
      <div class="box">
        <p><b>{{ firstName }} {{ lastName }}</b></p>
        <p>{{ phone }}</p>
        <p>{{ email }}</p>
      </div>
      <div class="box">
        <ul>
          <li v-for="address in addresses">{{ address }}</li>
        </ul>
      </div>
    </div>
    <div v-if="showEdit">
      <button @click="toggleEdit">Close</button>
    </div>
    <div v-else>
      <button @click="toggleEdit">Edit</button>
    </div>
    <ClientEdit :firstName="firstName"
                :lastName="lastName"
                :phone="phone"
                :email="email"
                class="edit"
                :class="{ show : showEdit }">
    </ClientEdit>
  </div>
</template>

<script>
import ClientEdit from '@/components/admin/ClientEdit'

export default {
  props: ['firstName', 'lastName', 'phone', 'email', 'addresses'],
  components: { ClientEdit },
  data () {
    return {
      showEdit: false
    }
  },
  methods: {
    toggleEdit () {
      this.showEdit = !this.showEdit
    }
  }
}
</script>

<style scoped>
  #client-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid thin var(--midnight);
    border-radius: 10px;
    border-left: none;
    border-right: none;
    padding: 15px;
  }

  #client-container {
    display: flex;
    max-width: 800px;
    justify-content: space-around;
    flex-flow: row wrap;
  }

  .box {
    min-width: 300px;
  }

  .edit {
    height: 0;
    opacity: 0;
    z-index: -1;
    transition: 250ms all;
  }

  .show {
    opacity: 1;
    z-index: 1;
    height: 450px;
  }

  button {
    background-color: #fff;
    width: 150px;
    padding: 5px;
    font-size: 18px;
    transition: 250ms all;
    color: var(--coral);
    border: thin solid var(--coral);
    border-radius: 10px;
    border-top: none;
    border-bottom: none;
    margin-top: 15px;
  }

  button:hover {
    color: var(--leather);
    background-color: var(--coral);
    transform: scaleX(1.05);
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }
</style>
