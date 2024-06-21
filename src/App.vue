<template>
    <WrapComp></WrapComp>
</template>

<script>
import WrapComp from './components/WrapComp.vue';

export default {
    name: 'App',
    components: {
        WrapComp,
    },
};
</script>

<style lang="scss">
#app {
    position: relative;
    background: #0e100f;

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
