<template>
    <div id="profile">
        <h2>{{ msg }}</h2>

        <ul>
            <li><h2>This is the Profile Component</h2></li>
            <li><h4>Objective:</h4></li>
            <li><h4>Name: Hanneka Rose C. Puri</h4></li>
            <li><h4>Course: Information Technology with Specialization in Web Development</h4></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'profile',
    data () {
        return {
            msg: 'This is the Profile Component'
        }
    }
}