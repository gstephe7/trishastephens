<template>
  <div>
    <Header title="Admin"></Header>

    <div id="clients">

      <h2>Leads</h2>

      <div class="box">
        <button v-if="showNewClient" @click="toggleNewClient">Close</button>
        <button v-else @click="toggleNewClient">Create New Lead</button>
      </div>

      <div class="box">
        <NewClient class="new-client" :class="{ show : showNewClient }"></NewClient>
      </div>

      <div class="box" v-for="client in clients">
        <ClientView :firstName="client.firstName"
                    :lastName="client.lastName"
                    :phone="client.phone"
                    :email="client.email"
                    :addresses="client.addressesOfInterest">
        </ClientView>
      </div>

    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import ClientView from '@/components/admin/ClientView'
import NewClient from '@/components/admin/NewClient'
import api from '@/api/api'

export default {
  components: { Header, ClientView, NewClient },
  data () {
    return {
      showNewClient: false,
      clients: []
    }
  },
  created () {
    api.axios.get(`${api.baseURL}/clients/allClients`)
      .then((res) => {
        this.clients = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    toggleNewClient () {
      this.showNewClient = !this.showNewClient
    }
  }
}
</script>

<style scoped>
  #clients {
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    padding-top: 100px;
    width: 100%;
  }

  .box {
    margin: 5px;
    z-index: 1;
  }

  .new-client {
    height: 0;
    opacity: 0;
    z-index: -1;
    transition: 250ms all;
  }

  .show {
    height: 400px;
    opacity: 1;
    z-index: 1;
  }

  button {
    background-color: #fff;
    width: 200px;
    padding: 5px;
    font-size: 18px;
    transition: 250ms all;
    color: var(--success);
    border: thin solid var(--success);
    border-radius: 10px;
    border-top: none;
    border-bottom: none;
    margin: 20px;
  }

  button:hover {
    color: #fff;
    background-color: var(--success);
    transform: scaleX(1.05);
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }
</style>
