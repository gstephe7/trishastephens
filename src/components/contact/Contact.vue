<template>
  <div id="contact">
    <Header title="Contact Trisha"></Header>
    <Message></Message>
    <hr>
    <div class="contact-info">
      <h3>Contact Information</h3>
      <div class="box">
        <p>Phone: <a href="tel:678-233-7110" target="_blank">678-233-7110</a></p>
        <p>Email: <a href="mailto:tstephensrealestate@gmail.com" target="_blank">tstephensrealestate@gmail.com</a></p>
      </div>
      <div class="description">
        <p>I'm available to answer your call 9:30am - 8:30pm, 7 days a week. Text or email me anytime!</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import Message from '@/components/home/Message'

export default {
  components: {
    Message,
    Header
  }
}
</script>

<style scoped>
  hr {
    margin-top: 50px;
    width: 75%;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }

  .description {
    width: 80%;
    max-width: 470px;
    text-align: center;
  }
</style>
