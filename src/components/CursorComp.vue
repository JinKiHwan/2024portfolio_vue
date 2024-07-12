<template>
    <div class="cursor"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cursor {
    width: 50px;
    height: 50px;
    position: fixed;
    left: 100px;
    top: 100px;
    z-index: 999;
    background-image: url('../assets/img/cursor.png');
    background-position: center center;
    background-repeat: no-repeat;
}
</style>
