<template>
    <div id="skills">
        <h2>{{ msg }}</h2>

        <ul>
            <li><h2>This is the Skill Component</h2></li>
            <li><h4>HTML</h4></li>
            <li><h4>CSS</h4></li>
            <li><h4>JavaScript</h4></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'skills',
    data () {
        return {
            msg: 'This is the Skills Component'
        }
    }
}