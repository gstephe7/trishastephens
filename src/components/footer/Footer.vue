<template>
  <div id="footer">
    <div class="layer">
      <div class="content container">
        <div class="box">
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
        <div class="box logos">
          <a href="http://www.greaterathensproperties.com" target="_blank">
            <img class="logo" src="../../assets/img/gap.png" alt="Greater Athens Properties Logo">
          </a>
          <a href="https://www.nar.realtor/" target="_blank">
            <img class="logo" src="../../assets/img/nar.png" alt="National Association of Realtors Logo">
          </a>
        </div>
      </div>
      <div class="social">
        <a href="https://www.facebook.com/trishastephensrealtor" target="_blank">
          <font-awesome-icon class="social-icon" :icon="{ prefix: 'fab', iconName: 'facebook' }"></font-awesome-icon>
        </a>
        <a href="https://twitter.com/tcsrealtor" target="_blank">
          <font-awesome-icon class="social-icon" :icon="{ prefix: 'fab', iconName: 'twitter' }"></font-awesome-icon>
        </a>
        <a href="https://www.instagram.com/trishasellsathens/" target="_blank">
          <font-awesome-icon class="social-icon" :icon="{ prefix: 'fab', iconName: 'instagram' }"></font-awesome-icon>
        </a>
        <a href="tel:678-233-7110" target="_blank">
          <font-awesome-icon class="social-icon" :icon="{ prefix: 'fas', iconName: 'phone' }"></font-awesome-icon>
        </a>
      </div>
      <hr>
      <div class="copyright">
        <p>&copy; Trisha Stephens Real Estate. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  #footer {
    background-image: url('../../assets/img/uga.jpg');
    background-position: center;
    background-size: cover;
    margin-top: 100px;
  }

  .layer {
    background-image: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, .8));
    height: 100%;
    width: 100%;
  }

  .content {
    align-items: center;
    justify-content: space-around;
  }

  .box {
    flex: 1;
    max-width: 300px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  li {
    padding-bottom: 20px;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    transition: 250ms all;
    color: var(--midnight);
  }

  a:hover {
    color: var(--leather);
  }

  .logos {
    text-align: right;
  }

  .logo {
    width: 125px;
    margin: 25px;
  }

  .social {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    font-size: 30px;
  }

  .social-icon {
    padding: 25px;
    opacity: .5;
  }

  hr {
    margin: 0 25px 0 25px;
    opacity: .75;
  }

  .copyright {
    padding: 25px;
    font-size: 14px;
  }
</style>
