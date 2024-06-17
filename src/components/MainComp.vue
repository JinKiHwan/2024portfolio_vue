<template>
    <section class="main_section" id="main">
        <div class="main_section-inner">
            <ul class="main_section-text">
                <li v-for="(item, index) in items" :key="index" :data-text="item.dataText" :class="{ glitch: isGlitched[index] }" @mouseover="addGlitch(index)" @mouseleave="removeGlitch(index)">
                    {{ item.dataText }}
                </li>
            </ul>
            <div class="sticker-box">
                <img src="/src/assets/img/figma.png" alt="" />
                <img src="/src/assets/img/git.png" alt="" />
                <img src="/src/assets/img/jquery.png" alt="" />
                <img src="/src/assets/img/sass.png" alt="" />
                <img src="/src/assets/img/react.png" alt="" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            items: [{ dataText: '<developer>' }, { dataText: '[publisher]' }, { dataText: '{{frontend}}' }, { dataText: '#design' }],
            isGlitched: [],
        };
    },
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
        addGlitch(index) {
            // Ensure the array is long enough to hold the value
            this.$data.isGlitched[index] = true;
            this.isGlitched = [...this.isGlitched]; // Trigger reactivity
        },
        removeGlitch(index) {
            // Ensure the array is long enough to hold the value
            this.$data.isGlitched[index] = false;
            this.isGlitched = [...this.isGlitched]; // Trigger reactivity
        },
    },
};
</script>

<style lang="scss">
.main_section {
    width: 100%;
    height: 100vh;
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
        width: 60vw;
        margin: 0 auto;
        height: 80vh;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2.5vw;
        font-size: 3.5vw;
        font-weight: 600;

        li {
            display: inline-block;
            padding: 1vw;
            position: relative;
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
        cursor: move;
        max-width: 350px;

        &:nth-child(1) {
            left: 33vw;
            bottom: 0;
        }
        &:nth-child(2) {
            left: 10vw;
            top: 7vw;
        }
        &:nth-child(3) {
            right: 8vw;
            bottom: 12vw;
        }

        &:nth-child(4) {
            left: 5vw;
            bottom: 3vw;
        }

        &:nth-child(5) {
            right: 5vw;
            top: 0vw;
        }
    }
}
</style>
