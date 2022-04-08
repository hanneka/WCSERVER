<template>
  <div class="contact">
    <div class="container">
    <h1>{{title}}</h1>
    <h4>{{divider}}</h4>

      <h3>Email:</h3>
      <h5>{{email}}</h5>
      <br>
      <h3>Phone Number:</h3>
      <h5>{{no}}</h5>
      <br>
      <h3>Facebook:</h3>
      <h5>{{fb}}</h5> 
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      title: 'Contact',
      email: 'hannekarosepuri04@gmail.com',
      no: '+63 920 552 7823',
      fb: 'Hanneka Rose Puri',

      divider: '-----------------------------------------------------'
    }
  }
}
</script>

<style scoped>
 

</style>
