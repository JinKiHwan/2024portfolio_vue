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
}
</style>
