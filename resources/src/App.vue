<template>
    <div id="app">
        <Notification/>
        <router-view></router-view>
    </div>
</template>

<script>
import Notification from "./components/Notification.vue";

export default {
    name: 'App',
    components: {
        Notification
    },
}
</script>

<style>
@import "./assets/css/styles.css";
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
