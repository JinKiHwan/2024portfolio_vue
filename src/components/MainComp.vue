<template>
    <section class="main_section">
        <div class="main_section-inner">
            <h2></h2>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .main_section{
        width: 100%;
        aspect-ratio: 1920/1080;
        background: #ddd;
        
        &-inner{
            width: calc(100% - 20px);
            height: 100%;
            margin: 0 auto;
        }
    }
</style>