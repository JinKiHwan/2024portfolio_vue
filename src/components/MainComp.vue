<template>
    <section class="main_section">
        <div class="main_section-inner">
            <div class="sticker-box">
                <img src="/src/assets/logo.png" alt="" />
                <img src="/src/assets/logo.png" alt="" />
                <img src="/src/assets/logo.png" alt="" />
                <img src="/src/assets/logo.png" alt="" />
                <img src="/src/assets/logo.png" alt="" />
                <img src="/src/assets/logo.png" alt="" />
                <img src="/src/assets/logo.png" alt="" />
                <img src="/src/assets/logo.png" alt="" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        this.makeImagesDraggable();
    },
    methods: {
        makeImagesDraggable() {
            const images = this.$el.querySelectorAll('.sticker-box img');

            images.forEach((img) => {
                img.style.position = 'absolute';

                img.addEventListener('mousedown', (e) => {
                    e.preventDefault(); // Prevent text selection or other unwanted behavior
                    const offsetX = e.clientX - img.getBoundingClientRect().left;
                    const offsetY = e.clientY - img.getBoundingClientRect().top;

                    const onMouseMove = (e) => {
                        img.style.left = `${e.clientX - offsetX}px`;
                        img.style.top = `${e.clientY - offsetY}px`;
                    };

                    const onMouseUp = () => {
                        document.removeEventListener('mousemove', onMouseMove);
                        document.removeEventListener('mouseup', onMouseUp);
                    };

                    document.addEventListener('mousemove', onMouseMove);
                    document.addEventListener('mouseup', onMouseUp);
                });
            });
        },
    },
};
</script>

<style lang="scss">
.main_section {
    width: 100%;
    height: 100vh;
    background: #ddd;
    overflow: hidden;
    position: relative;

    &-inner {
        width: calc(100% - 20px);
        height: 100%;
        margin: 0 auto;
    }

    .sticker-box img {
        position: absolute;
        left: 30px;
        top: 50px;
        cursor: move;
    }
}
</style>
