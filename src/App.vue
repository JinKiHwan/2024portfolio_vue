<template>
  <HeaderComp></HeaderComp>
  <MainComp></MainComp>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp
  }
}
</script>

<style lang="scss">
  ol,li,dl{
    list-style: none;
  }

  a{
    color: inherit;
    text-decoration: none;
  }
</style>