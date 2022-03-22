<template>
    <div id="education">
        <h2>{{ msg }}</h2>

        <div class="container">
            <div class="row">
                <div class="col">
                    <ul>
                        <li><h4>Elementary: Porac Elementary School</h4></li>
                        <li><h4>Junior High School: Pulung Santol National High School</h4></li>
                        <li><h4>Senior High School: Pulung Santol National High School</h4></li>
                        <li><h4>College: Holy Angel University</h4></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'education',
    data () {
        return {
            msg: 'This is the Education Component'
        }
    }
}
</script>