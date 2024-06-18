<template>
    <HeaderComp></HeaderComp>
    <MainComp></MainComp>
    <PortComp></PortComp>
    <SkilComp></SkilComp>
    <MainComp></MainComp>
    <div class="sticker-box" ref="stickerBox">
        <img src="../assets/img/figma.png" alt="" />
        <img src="../assets/img/git.png" alt="" />
        <img src="../assets/img/jquery.png" alt="" />
        <img src="../assets/img/sass.png" alt="" />
        <img src="../assets/img/react.png" alt="" />
        <img src="../assets/img/vue2.png" alt="" />
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import HeaderComp from './HeaderComp.vue';
import MainComp from './MainComp.vue';
import PortComp from './PortfolioComp.vue';
import SkilComp from './SkilComp.vue';

export default {
    name: 'WrapComp',
    components: {
        HeaderComp,
        MainComp,
        PortComp,
        SkilComp,
    },
    setup() {
        const stickerBox = ref(null);

        const makeImagesDraggable = () => {
            const images = stickerBox.value.querySelectorAll('img');
            console.log('Images:', images);

            images.forEach((img) => {
                img.style.position = 'absolute';
                console.log('Setting up drag for image:', img);

                img.addEventListener('mousedown', (e) => {
                    e.preventDefault(); // Prevent text selection or other unwanted behavior
                    console.log('Mouse down on image:', img);
                    const offsetX = e.pageX - img.getBoundingClientRect().left - window.scrollX;
                    const offsetY = e.pageY - img.getBoundingClientRect().top - window.scrollY;

                    const onMouseMove = (e) => {
                        console.log('Mouse move');
                        img.style.left = `${e.pageX - offsetX}px`;
                        img.style.top = `${e.pageY - offsetY}px`;
                    };

                    const onMouseUp = () => {
                        console.log('Mouse up');
                        document.removeEventListener('mousemove', onMouseMove);
                        document.removeEventListener('mouseup', onMouseUp);
                    };

                    document.addEventListener('mousemove', onMouseMove);
                    document.addEventListener('mouseup', onMouseUp);
                });
            });
        };

        onMounted(() => {
            console.log('Component mounted');
            makeImagesDraggable();
        });

        return {
            stickerBox,
        };
    },
};
</script>

<style lang="scss">
.sticker-box img {
    position: absolute;
    cursor: move;

    &:nth-child(1) {
        width: 17vw;
        left: 30vw;
        top: 35vw;
    }
    &:nth-child(2) {
        width: 15vw;
        left: 20vw;
        top: 12vw;
    }
    &:nth-child(3) {
        width: 19vw;
        right: 10vw;
        top: 25vw;
    }
    &:nth-child(4) {
        width: 20vw;
        left: 1vw;
        top: 35vw;
    }
    &:nth-child(5) {
        width: 22vw;
        right: 5vw;
        top: 0vw;
    }
    &:nth-child(6) {
        width: 17vw;
        left: 5vw;
        top: 0vw;
    }
}
</style>
