<template>
    <div id="app">
        <Notification/>
        <router-view></router-view>
    </div>
</template>

<script>
import Notification from './components/Notification.vue';

export default {
    name: 'App',
    components: {
        Notification,
    },
}
</script>
