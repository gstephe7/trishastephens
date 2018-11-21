<template>
  <div id="client-edit">

    <div class="box">
      <div class="label">
        <p>First Name</p>
      </div>
      <div class="input">
        <input type="text" v-model="firstNameEdit">
      </div>
    </div>

    <div class="box">
      <div class="label">
        <p>Last Name</p>
      </div>
      <div class="input">
        <input type="text" v-model="lastNameEdit">
      </div>
    </div>

    <div class="box">
      <div class="label">
        <p>Phone</p>
      </div>
      <div class="input">
        <input type="text" v-model="phoneEdit">
      </div>
    </div>

    <div class="box">
      <div class="label">
        <p>Email</p>
      </div>
      <div class="input">
        <input type="text" v-model="emailEdit">
      </div>
    </div>

    <div class="buttons">
      <div>
        <button class="delete" @click="toggleDelete">Delete</button>
      </div>
      <div>
        <button @click="saveInfo">Save</button>
      </div>
    </div>

    <div class="delete-div" :class="{ show : showDelete }">
      <p>Is you sho you wan dat?</p>
      <div class="delete-buttons">
        <div>
          <button class="delete" @click="toggleDelete">No</button>
        </div>
        <div>
          <button @click="deleteClient">Yes</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import api from '@/api/api'

export default {
  props: ['firstName', 'lastName', 'phone', 'email'],
  data () {
    return {
      firstNameEdit: this.firstName,
      lastNameEdit: this.lastName,
      phoneEdit: this.phone,
      emailEdit: this.email,
      showDelete: false
    }
  },
  methods: {
    saveInfo () {
      api.axios.put(`${api.baseURL}/clients/updateClient`, {
        oldEmail: this.email,
        firstName: this.firstNameEdit,
        lastName: this.lastNameEdit,
        email: this.emailEdit,
        phone: this.phoneEdit
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

      location.reload()
    },
    toggleDelete () {
      this.showDelete = !this.showDelete
    },
    deleteClient () {
      api.axios.delete(`${api.baseURL}/clients/deleteClient`, {
        email: this.emailEdit
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

  .delete {
    color: var(--coral);
    border-color: var(--coral);
  }

  .delete:hover {
    color: var(--leather);
    background-color: var(--coral);
  }

  .delete-div {
    height: 0;
    opacity: 0;
    z-index: -1;
    transition: 250ms all;
    text-align: center;
  }

  .show {
    opacity: 1;
    z-index: 1;
    height: 375px;
  }

  .delete-buttons {
    display: flex;
    margin-top: -20px;
  }
</style>
