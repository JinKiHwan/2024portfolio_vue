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
export default {};
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    right: 2vw;
    bottom: 2vw;
    z-index: 9;

    h1 {
        font-size: 0;
    }

    nav {
        ul {
            display: flex;
            align-items: center;
            justify-content: center;

            li {
                margin: 0 1vw;
                font-size: 1vw;
            }
        }
    }
}
</style>
