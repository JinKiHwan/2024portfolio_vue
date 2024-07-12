<template>
    <section class="skil" id="skil">
        <div class="skil_inner">
            <ul class="skil_list">
                <li v-for="(skil, index) in skils" :key="index" @click="animate">
                    <div class="skil_wrap">
                        <div class="front">
                            <figure><img src="../assets/logo.png" alt="" /></figure>
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
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'SkilComp',
    data() {
        return {
            skils: [
                { skilName: 'vue', skilImg: '/src/assets/logo.png', skilTxt: '쀼를 이용한 프로젝트' },
                { skilName: 'html', skilImg: '/src/assets/logo.png', skilTxt: '시멘틱태그 ㅎㅎ' },
                { skilName: 'scss', skilImg: '/src/assets/logo.png', skilTxt: 'css는 scss로 관리해용' },
                { skilName: 'React', skilImg: '/src/assets/logo.png', skilTxt: 'React real kk' },
                { skilName: 'Figma', skilImg: '/src/assets/logo.png', skilTxt: 'Figma Magma' },
                { skilName: 'Slack', skilImg: '/src/assets/logo.png', skilTxt: 'Slack으로 소통해요' },
                { skilName: 'NEWjeans', skilImg: '/src/assets/logo.png', skilTxt: 'NEWjeans' },
            ],
        };
    },

    mounted: function () {
        this.scrollAnimation();
        //this.skilWrap();
        this.skilArrow();
    },

    methods: {
        scrollAnimation() {
            let skil = gsap.utils.toArray('.skil_list li');
            gsap.set(skil, {
                xPercent: 50 * (skil.length - 1),
            });
            gsap.to(skil, {
                xPercent: -100 * (skil.length - 1),
                ease: 'none',

                scrollTrigger: {
                    trigger: '.skil',
                    pin: '.skil',
                    pinSpacing: true,
                    scrub: 5,
                    end: '+=3000',
                },
            });
        },

        skilArrow() {
            let arrow1 = document.querySelector('.pokemon_right li:nth-child(1) span');
            gsap.from(arrow1, {
                opacity: 0,
                duration: 1,
                repeat: -1,
                ease: 'steps(1)',
            });
        },
    },
};
</script>

<style lang="scss">
.skil {
    //height: 100vh;
    height: auto;
    &_inner {
        height: 100vh;
        min-height: 50vh;
        display: flex;
        align-items: center;
        padding: 30px 30vw;
        position: relative;
        overflow: hidden;

        .phantom {
            position: absolute;
            z-index: -1;
            right: -10vw;
            top: -20vw;
            //max-height: 100vh;
            height: 150vh;
            img {
                height: 100%;
            }
        }
    }

    &_list {
        display: flex;
        gap: 5vw;
        li {
            width: 450px;
            aspect-ratio: 1/1;
            perspective: 1500px;
            transition: transform 0.2s;
            transform-style: preserve-3d;
            font-family: 'gsc';

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
                background: linear-gradient(180deg, rgba(170, 254, 132, 1) 20%, rgba(27, 194, 208, 1) 100%);
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
