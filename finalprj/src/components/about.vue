<template>
  <div class="about">
    <div class="container">
    <h1>{{title}}</h1>
    <h4>{{divider}}</h4>

      <h5>{{bout1}}</h5>
      <h5>{{bout2}}</h5>
      <h5>{{bout3}}</h5>
      <h5>{{bout4}}</h5>
      <h5>{{bout5}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      title: 'About',
      bout1: 'Web Developer Student',
      bout2: '2nd Year Student',
      bout3: 'Creative',
      bout4: 'Korean Drama Lover',
      bout5: 'Honest',

      divider: '-----------------------------------------------------'
    }
  }
}
</script>

<style scoped>
 

</style>
