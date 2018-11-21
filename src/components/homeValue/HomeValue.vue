<template>
  <div>
    <Header title="Find My Home's Value"></Header>
    <div id="home-value" class="container">
      <h2>How much is my home worth?</h2>
      <form>

        <div class="box">
          <div class="label">
            <p>Street Address</p>
          </div>
          <div class="input">
            <input type="text" name="streetAddress" v-model="streetAddress" :class="{ inputError : streetAddressError }">
            <p v-if="streetAddressError" class="error">Please enter a valid street address</p>
          </div>
        </div>

        <div class="box">
          <div class="label">
            <p>City</p>
          </div>
          <div class="input">
            <input type="text" name="city" v-model="city" :class="{ inputError : cityError }">
            <p v-if="cityError" class="error">Please enter a valid city name</p>
          </div>
        </div>

        <div class="box">
          <div class="label">
            <p>Zip Code</p>
          </div>
          <div class="input">
            <input type="text" name="zipcode" v-model="zip" :class="{ inputError : zipError }">
            <p v-if="zipError" class="error">Please enter a valid zip code</p>
          </div>
        </div>

        <div class="box">
          <div class="label">
            <p>First Name</p>
          </div>
          <div class="input">
            <input type="text" name="firstName" v-model="firstName" :class="{ inputError : firstNameError }">
            <p v-if="firstNameError" class="error">We'd love to know your first name!</p>
          </div>
        </div>

        <div class="box">
          <div class="label">
            <p>Last Name</p>
          </div>
          <div class="input">
            <input type="text" name="lastName" v-model="lastName" :class="{ inputError : lastNameError }">
            <p v-if="lastNameError" class="error">We'd love to know your last name!</p>
          </div>
        </div>

        <div class="box">
          <div class="label">
            <p>Email</p>
          </div>
          <div class="input">
            <input type="email" name="email" v-model="email" :class="{ inputError : emailError }">
            <p v-if="emailError" class="error">Please enter a valid email address</p>
          </div>
        </div>

        <div class="box">
          <button type="button" @click="submitForm">Find My Home's Value</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import api from '@/api/api'
export default {
  components: {
    Header
  },
  data () {
    return {
      streetAddress: null,
      streetAddressError: false,
      city: null,
      cityError: false,
      state: null,
      stateError: false,
      zip: null,
      zipError: false,
      firstName: null,
      firstNameError: false,
      lastName: null,
      lastNameError: false,
      email: '',
      emailError: false,
    }
  },
  methods: {
    checkEmail () {
      if (this.email.includes('@')) {
        this.emailError = false
      } else {
        this.emailError = true
      }
    },
    checkAddress () {
      if (this.streetAddress) {
        this.streetAddressError = false
      } else {
        this.streetAddressError = true
      }
    },
    checkCity () {
      if (this.city) {
        this.cityError = false
      } else {
        this.cityError = true
      }
    },
    checkZip () {
      if (this.zip) {
        this.zipError = false
      } else {
        this.zipError = true
      }
    },
    checkFirstName () {
      if (this.firstName) {
        this.firstNameError = false
      } else {
        this.firstNameError = true
      }
    },
    checkLastName () {
      if (this.lastName) {
        this.lastNameError = false
      } else {
        this.lastNameError = true
      }
    },
    sendHomeValue () {
      api.sendHomeValue = () => {
        api.axios.post(`${api.baseURL}/sendHomeValue`, {
          email: this.email,
          street: this.streetAddress,
          city: this.city,
          zip: this.zip,
          firstName: this.firstName,
          lastName: this.lastName
        })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
      }
      api.sendHomeValue()
    },
    submitForm () {
      this.checkAddress()
      this.checkCity()
      this.checkZip()
      this.checkEmail()
      this.checkFirstName()
      this.checkLastName()
      if (!this.streetAddressError && !this.cityError && !this.zipError && !this.emailError && !this.firstNameError && !this.lastNameError) {
        this.sendHomeValue()
        this.$router.push('homeValue/confirmed')
      }
    }
  }
}
</script>

<style scoped>
  #home-value {
    padding-top: 100px;
    flex-flow: column nowrap;
    align-items: center;
  }

  form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }

  .box {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding-bottom: 10px;
  }

  .label {
    padding-right: 15px;
    width: 250px;
  }

  .input {
    width: 250px;
  }

  input {
    width: 90%;
    padding: 5px 0 5px 20px;
  }

  .error {
    color: red;
  }

  .inputError {
    outline: thin solid red;
  }

  button {
    background-color: #fff;
    width: 250px;
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
