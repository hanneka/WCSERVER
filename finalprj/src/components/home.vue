<template>
  <div class="home">
    <div class="container">
    <title>{{title}}</title>
    <h4>{{divider}}</h4>

      <h2>{{me1}}</h2>
      <h5>{{me2}} </h5>
      <br>
      <p>{{me}} <br></p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Home',
      me1: 'Hanneka Rose C. Puri',
      me2: '20 Yrs Old',
      me: 'I am a 2nd year student at Holy Angel University with a specialization of Website Development.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 

</style>
