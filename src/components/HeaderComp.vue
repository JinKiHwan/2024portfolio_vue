<template>
    <header class="header">
        <h1>Portfolio</h1>
        <nav>
            <ul>
                <li><a href="#main">Main</a></li>
                <li><a href="#portfolio">portfolio</a></li>
                <li><a href="#skil">skil</a></li>
                <li><a href="/quiz">Quiz</a></li>
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
                color: $text-df;
            }
        }
    }
}
</style>
