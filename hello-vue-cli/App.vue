<template>
    <div id="app">
        <div class="container">
            <h1>{{ msg }}</h1>
            <img src="./assets/hanneka.jpg">

            <profile></profile>
            <education></education>
            <skills></skills>
        </div>
    </div>
</template>

<script>
import profile from './components/profile.vue'
import education from './components/education.vue'
import skills from './components/skills.vue'

export default {
    name: 'app',
    components: {
        profile,
        education,
        skills
        },
    data () {
        return {
            msg: 'This is the Main Component'
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
    width: 200px;
    margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

h2 {
    color:rgb(111, 0, 255);
}
</style>
