<template>
  <div id="message" class="container">
    <h2 class="title">Message Trisha</h2>

    <div class="contact-form">

      <div class="box">
        <input id="text" class="radio-btn" type="radio" name="contact" value="text" v-model="contact" checked="true" display="none">
        <label class="radio" for="text">TEXT</label>
        <input id="email" class="radio-btn" type="radio" name="contact" value="email" v-model="contact">
        <label class="radio" for="email">EMAIL</label>
      </div>

      <div class="user-contact">
        <div v-if="contact === 'email'">
          <input v-model="email" class="input" type="email" placeholder="Email" name="email">
          <p v-if="emailError" class="error">Please enter a valid email address</p>
        </div>

        <div v-else>
          <input v-model="phone" type="text" name="phone" placeholder="Phone" class="input">
          <p v-if="phoneError" class="error">Please enter a valid phone number</p>
        </div>

        <div>
          <input type="text" class="input" name="firstName" v-model="firstName" placeholder="First Name">
          <p v-if="firstNameError" class="error">I would love to know your first name!</p>
        </div>

        <div>
          <input type="text" class="input" name="lastName" v-model="lastName" placeholder="Last Name">
          <p v-if="lastNameError" class="error">I would love to know your last name!</p>
        </div>
      </div>

      <textarea v-model="msg"></textarea>
      <p v-if="msgError" class="error">Don't forget to send a message!</p>
      <button @click="sendMessage" :style="successStyle">{{buttonText}}</button>

    </div>

  </div>
</template>

<script>
import api from '@/api/api'

export default {
  data () {
    return {
      contact: 'text',
      phone: '',
      phoneError: false,
      email: '',
      emailError: false,
      firstName: '',
      firstNameError: false,
      lastName: '',
      lastNameError: false,
      msg: '',
      msgError: false,
      buttonText: 'SEND',
      successStyle: {
        backgroundColor: null,
        borderColor: null,
        color: null
      }
    }
  },
  methods: {
    checkPhone () {
      if (this.contact === 'text') {
        if (this.phone.length > 8) {
          this.phoneError = false
        } else {
          this.phoneError = true
        }
      } else {
        this.phoneError = false
      }
    },
    checkEmail () {
      if (this.contact === 'email') {
        if (this.email) {
          this.emailError = false
        } else {
          this.emailError = true
        }
      } else {
        this.emailError = false
      }
    },
    checkFirstName () {
      if (this.firstName) {
        this.firstNameError =  false
      } else {
        this.firstNameError = true
      }
    },
    checkLastName () {
      if (this.lastName) {
        this.lastNameError =  false
      } else {
        this.lastNameError = true
      }
    },
    checkMessage () {
      if (this.msg) {
        this.msgError = false
      } else {
        this.msgError = true
      }
    },
    sendMessage () {
      this.checkEmail()
      this.checkPhone()
      this.checkFirstName()
      this.checkLastName()
      this.checkMessage()

      if (!this.emailError && !this.phoneError && !this.firstNameError && !this.lastNameError) {
        api.axios.post(`${api.baseURL}/contact`, {
          contact: this.contact,
          phone: this.phone,
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          msg: this.msg
        })
        .then((res) => {
          this.msg = ''
          this.phone = ''
          this.email = ''
          this.firstName = ''
          this.lastName = ''
          this.messageSent()
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    messageSent () {
      this.successStyle.backgroundColor = 'var(--success)'
      this.successStyle.borderColor = 'var(--success)'
      this.successStyle.color = '#fff'
      this.buttonText = 'SENT!'
      setTimeout(() => {
        this.successStyle.backgroundColor = null
        this.successStyle.borderColor = null
        this.successStyle.color = null
        this.buttonText = 'SEND'
      }, 2000)
    }
  }
}
</script>

<style scoped>
  #message {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 5px 25px 5px;
  }

  .title {
    color: var(--leather);
  }

  .contact-form {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 80%;
    max-width: 600px;
  }

  .radio {
    background-color: #fff;
    color: var(--midnight);
    padding: 5px;
    display: inline-block;
    width: 100px;
    border-radius: 5px;
    border: thin solid var(--midnight);
    border-bottom: none;
    border-top: none;
    margin: 10px 0 10px 0;
    cursor: pointer;
    text-align: center;
    transition: 250ms all;
  }

  .user-contact {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .radio-btn {
    position: fixed;
    opacity: 0;
    width: 0;
  }

  .input {
    font-size: 18px;
    margin: 10px 0 10px 0;
    padding: 5px;
    font-family: 'Raleway', helvetica, sans-serif;
    font-weight: 400;
  }

  input[type="radio"]:checked + label {
    background-color: var(--midnight);
    color: #fff;
    transform: scale(1.1);
  }

  .error {
    color: red;
  }

  textarea {
    height: 150px;
    margin-top: 10px;
    width: 100%;
    font-family: helvetica, sans-serif;
    font-weight: 200;
    color: var(--midnight);
    font-size: 14px;
  }

  button {
    margin-top: 25px;
    width: 150px;
    background-color: #fff;
    color: var(--coral);
    padding: 5px;
    border: thin solid var(--coral);
    border-top: none;
    border-bottom: none;
    border-radius: 10px;
    font-size: 18px;
    transition: 250ms all;
  }

  button:hover {
    color: var(--leather);
    background-color: var(--coral);
    cursor: pointer;
    transform: scaleX(1.05);
  }

  button:focus {
    outline: none;
  }
</style>
