<template>
  <header class="header">
    <h1>Portfolio</h1>
    <nav>
      <ul>
        <li><a href="#!">Menu1</a></li>
        <li><a href="#!">Menu2</a></li>
        <li><a href="#!">Menu3</a></li>
        <li><a href="#!">Menu4</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .header{
    position: fixed;
    right: 30px;
    bottom: 30px;

    h1{
      font-size: 0;
    }

    nav{
      ul{
        display: flex;
        align-content: center;
        justify-content: center;

        li{
          margin: 0 10px;
          font-size: 1vw;
        }
      }
    }
  }
</style>