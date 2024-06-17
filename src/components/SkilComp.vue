<template>
    <section class="skil" id="skil">
        <div class="skil_inner">
            <ul class="skil_list">
                <li v-for="(skil, index) in skils" :key="index" @click="animate">
                    <div class="skil_wrap">
                        <div class="front">
                            <figure><img src="/src/assets/logo.png" alt="" /></figure>
                            <h3>{{ skil.skilName }}</h3>
                        </div>
                        <div class="back">
                            <p>{{ skil.skilTxt }}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import { animateSkills } from '../assets/js/gsap';

export default {
    name: 'SkilComp',
    setup() {
        const skils = ref([
            { skilName: 'vue', skilImg: '/src/assets/logo.png', skilTxt: '쀼를 이용한 프로젝트' },
            { skilName: 'html', skilImg: '/src/assets/logo.png', skilTxt: '시멘틱태그 ㅎㅎ' },
            { skilName: 'scss', skilImg: '/src/assets/logo.png', skilTxt: 'css는 scss로 관리해용' },
            { skilName: 'React', skilImg: '/src/assets/logo.png', skilTxt: 'React real kk' },
            { skilName: 'Figma', skilImg: '/src/assets/logo.png', skilTxt: 'Figma Magma' },
        ]);

        onMounted(() => {
            const listItems = document.querySelectorAll('.skil_list li');
            animateSkills(listItems);
        });

        return {
            skils,
        };
    },
};
</script>

<style lang="scss">
.skil {
    overflow: auto;
    height: 100vh;
    &_inner {
        height: 100%;
        min-height: 50vh;
        display: flex;
        align-items: center;
        padding: 30px 0;
    }
    &_list {
        display: flex;
        gap: 1vw;
        li {
            width: 450px;
            aspect-ratio: 1/1;
            perspective: 1500px;
            transition: transform 0.2s;
            transform-style: preserve-3d;

            .front {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                background: #fff;
                z-index: 4;
                transition: opacity 0.1s 0.1s;
            }

            .back {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                transform: rotateY(180deg);
                background: #bdbdbd;
                z-index: 3;
            }

            .skil_wrap {
                width: 100%;
                height: 100%;
                position: relative;
                border-radius: 30px;
                transition: transform 0.5s;
                overflow: hidden;
            }
            &:hover {
                .skil_wrap {
                    transform: rotateY(180deg);
                    .front {
                        opacity: 0;
                    }
                }
            }
        }
    }
}
</style>
