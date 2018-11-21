<template>
  <div>
    <Header title="Admin Login"></Header>
    <div id="login">

      <div class="box">
        <div class="label">
          <p>Username</p>
        </div>
        <div class="input">
          <input type="text" name="username" v-model="username" :class="{ inputError : userNameError }">
          <p v-if="userNameError" class="error">Please enter your username</p>
        </div>
      </div>

      <div class="box">
        <div class="label">
          <p>Password</p>
        </div>
        <div class="input">
          <input type="password" name="password" v-model="password" :class="{ inputError : passwordError }">
          <p v-if="passwordError" class="error">Please enter your password</p>
        </div>
      </div>

      <div class="box">
        <button type="button" @click="login">Login</button>
      </div>

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
      username: '',
      password: '',
      userNameError: false,
      passwordError: false
    }
  },
  methods: {
    login () {
      api.axios.post(`${api.baseURL}/auth/login`, {
        username: this.username,
        password: this.password
      })
      .then((res) => {
        localStorage.setItem('jwt', res.data.token)

        if (localStorage.getItem('jwt') != null) {
          this.$router.push('/admin')
        }
      })
      .catch((err) => {
        console.log(err)
      })
    },
    checkUserName () {
      if (this.username) {
        this.userNameError = false
      } else {
        this.userNameError = true
      }
    },
    checkPassword () {
      if (this.password) {
        this.passwordError = false
      } else {
        this.passwordError = true
      }
    },
    submitForm () {
      this.checkUserName()
      this.checkPassword()
      if (!this.userNameError && !this.passwordError) {

      }
    }
  }
}
</script>

<style scoped>
  #login {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    width: 100px;
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
