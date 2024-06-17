<template>
    <HeaderComp></HeaderComp>
    <MainComp></MainComp>
    <PortComp></PortComp>
    <SkilComp></SkilComp>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import PortComp from './components/PortfolioComp.vue';
import SkilComp from './components/SkilComp.vue';

export default {
    name: 'App',
    components: {
        HeaderComp,
        MainComp,
        PortComp,
        SkilComp,
    },
};
</script>

<style lang="scss">
#app {
    //height: 300vh;
    background: #ddd;

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
