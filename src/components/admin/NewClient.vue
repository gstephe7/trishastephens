<template>
  <div id="client-edit">

    <div class="box">
      <div class="label">
        <p>First Name</p>
      </div>
      <div class="input">
        <input type="text" v-model="firstName">
      </div>
    </div>

    <div class="box">
      <div class="label">
        <p>Last Name</p>
      </div>
      <div class="input">
        <input type="text" v-model="lastName">
      </div>
    </div>

    <div class="box">
      <div class="label">
        <p>Phone</p>
      </div>
      <div class="input">
        <input type="text" v-model="phone">
      </div>
    </div>

    <div class="box">
      <div class="label">
        <p>Email</p>
      </div>
      <div class="input">
        <input type="text" v-model="email">
      </div>
    </div>

    <div class="buttons">
      <div>
        <button @click="createClient">Create</button>
      </div>
    </div>

  </div>
</template>

<script>
import api from '@/api/api'

export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    }
  },
  methods: {
    createClient () {
      api.axios.post(`${api.baseURL}/clients/createClient`, {
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
        email: this.email
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

      location.reload()
    }
  }
}
</script>

<style scoped>
#client-edit {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.buttons {
  display: flex;
  padding-top: 20px;
  align-items: center;
}

button {
  background-color: #fff;
  width: 100px;
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
