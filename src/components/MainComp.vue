<template>
    <section class="main_section">
        <div class="main_section-inner">
            <ul class="main_section-text">
                <li>DEVELOPER</li>
                <li>publisher</li>
                <li>frontend</li>
                <li>design</li>
            </ul>
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
        /* 이미지 드래그 */
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
    font-family: 'EF_MACHO';

    &-inner {
        width: calc(100% - 20px);
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }

    &-text {
        width: 80vw;
        margin: 0 auto;
        height: 80vh;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5vw;
        font-size: 5vw;
        font-weight: 600;

        li {
            background: #ff0;
            display: inline-block;
            padding: 1vw;
        }
        li:nth-child(odd) {
            margin-right: auto;
        }
        li:nth-child(even) {
            margin-left: auto;
        }
    }

    .sticker-box img {
        position: absolute;
        left: 30px;
        top: 50px;
        cursor: move;
    }
}
</style>
