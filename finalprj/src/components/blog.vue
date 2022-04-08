<template>
  <div class="blog">
    <div class="container">
    <h1>{{title}}</h1>
    <h4>{{divider}}</h4>

      <h2>{{ways}}</h2>
      <h6>{{w1}}</h6>
      <h6>{{w2}}</h6>
      <h6>{{w3}}</h6>
      <h6>{{w4}}</h6>
      <h6>{{w5}}</h6>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      title: 'Blog',
      ways: 'Ways to Move Forward in Life',
      w1: '• Take a Step Back - The first step towards re-motivating yourself should always include taking a step back.',
      w2: '• Take a Break - Walking away affords you the opportunity to refocus your energy on other things.',
      w3: '• Focus on the things you are grateful for in your life',
      w4: '• Ask if this is what you really want - Think about it. If you have lost the ambition to do something, question whether it is something you really want.',
      w5: '• Take the Plunge - After everything is said and done, nothing helps more than just taking the plunge and going for it. Losing your motivation and ambition does not have to mean giving up.',

      divider: '----------------------------------------------------------'

    }
  }
}
</script>

<style scoped>
 

</style>
