<template>
  <div class="gallery">
    <div class="container">
    <h3>{{title}}</h3>
    <h4>{{divider}}</h4>
      <h5>{{school1}}</h5>
        <h5>{{elem}}</h5>
        <h6>{{year1}}</h6>
      <br> 
      <h5>{{school2}}</h5>
        <h5>{{jhs}}</h5>
        <h6>{{year2}}</h6>
      <br>
      <h5>{{school2}}</h5> 
        <h5>{{shs}}</h5>
        <h6>{{year3}}</h6>
      <br>
      <h5>{{school3}}</h5>
        <h5>{{college}}</h5>
        <h6>{{year4}}</h6>

    </div>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  data () {
    return {
      title: 'Educational Background',
      school1: 'Porac Elementary School',
      elem: 'Elementary',
      year1: '2008 - 2014',
      school2: 'Pulung Santol National High School',
      jhs: 'Junior High School',
      year2: '2014 - 2018',
      shs: 'Senior High School',
      year3: '2018 - 2020',
      school3: 'Holy Angel Univerisity',
      college: 'College',
      year4: '2020 - Present',

      divider: '-----------------------------------------------------'
    }
  }
}
</script>

<style scoped>
 

</style>
