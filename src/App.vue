<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'App',
    components: {},
};
</script>

<style lang="scss">
#app {
    position: relative;
    background: #0e100f;
    min-height: 100vh;

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        pointer-events: none;
        z-index: 10;
        background: url('/src/assets/img/overlay.gif');
        opacity: 0.05;
    }
}
</style>
