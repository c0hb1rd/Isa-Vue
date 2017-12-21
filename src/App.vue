<template>
    <transition name="el-fade-in" mode="out-in" appear>
        <router-view id="app"></router-view>
    </transition>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'app',

        mounted() {
            document.body.className = 'common-theme';
        }
    }
</script>

<style lang="scss">

</style>
