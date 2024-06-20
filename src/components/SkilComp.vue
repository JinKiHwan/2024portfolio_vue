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

            <div class="phantom">
                <img src="../assets/img/phantom.png" alt="" />
            </div>

            <div class="pokemon_ui">
                <div class="pokemon_ui_wrap">
                    <div class="ancor_left_top">
                        <span></span>
                    </div>
                    <div class="ancor_right_top">
                        <span></span>
                    </div>
                    <div class="ancor_left_bottom">
                        <span></span>
                    </div>
                    <div class="ancor_right_bottom">
                        <span></span>
                    </div>

                    <div class="pokemon_left">
                        <p>KIHWAN은 무엇을 할까?</p>
                    </div>
                    <div class="pokemon_right">
                        <ul>
                            <li>
                                <span><img src="../assets/img/dot_arrow.png" alt="" /></span> 배우기
                            </li>
                            <li>
                                <span><img src="../assets/img/dot_arrow.png" alt="" /></span> 가방
                            </li>
                            <li>
                                <span><img src="../assets/img/dot_arrow.png" alt="" /></span> 포켓몬
                            </li>
                            <li>
                                <span><img src="../assets/img/dot_arrow.png" alt="" /></span> 도망치다
                            </li>
                        </ul>

                        <div class="ancor_left_top">
                            <span></span>
                        </div>
                        <div class="ancor_right_top">
                            <span></span>
                        </div>
                        <div class="ancor_left_bottom">
                            <span></span>
                        </div>
                        <div class="ancor_right_bottom">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
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
                    scrub: 1,
                    end: '+=3000',
                },
            });
        },
        // skilWrap() {
        //     let skilWrap = gsap.utils.toArray('.skil_wrap');

        //     gsap.set(skilWrap, {
        //         scale: 0,
        //         transformOrigin: 'right bottom',
        //     });

        //     gsap.to(skilWrap, {
        //         scale: 1,
        //         scrollTrigger: {
        //             scrub: true,
        //             trigger: '.skil',
        //             markers: true,
        //             start: '70% center',
        //             end: '100% top',
        //         },
        //     });
        //     console.log(skilWrap);
        // },
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

    .pokemon_ui {
        position: absolute;
        width: 100%;
        height: 30vh;
        left: 0;
        bottom: 0;
        background: #fff;
        padding: 0.5vw;
        &_wrap {
            border: 0.5vw solid #020401;
            width: 100%;
            height: 100%;
            position: relative;
            font-family: 'gsc';
            display: flex;

            .pokemon_left {
                width: 65%;
                height: 100%;
                display: flex;
                padding: 2vw;
                font-size: 3.5vw;
                letter-spacing: -0.1vw;
            }
            .pokemon_right {
                width: calc(35% - 1vw);
                margin: 0.5vw;
                border: 0.5vw solid #020401;
                box-sizing: border-box;
                font-size: 3.5vw;
                position: relative;

                ul {
                    display: flex;
                    flex-wrap: wrap;
                    height: 100%;

                    li {
                        width: 50%;
                        display: flex;
                        align-items: center;
                        padding-left: 1vw;
                        &:nth-child(1) {
                            span {
                                opacity: 1;
                            }
                        }

                        span {
                            opacity: 0;
                            margin-top: 1vw;
                            margin-right: 0.5vw;
                            height: 2.5vw;
                            img {
                                height: 100%;
                            }
                        }
                    }
                }
            }

            .ancor_left_top {
                span {
                    &:nth-child(1) {
                        display: block;
                        position: absolute;
                        left: -0.5vw;
                        top: -0.5vw;
                        width: 0.5vw;
                        aspect-ratio: 1/1;
                        z-index: 3;
                        background: #fff;
                    }
                }
            }
            .ancor_right_top {
                span {
                    &:nth-child(1) {
                        display: block;
                        position: absolute;
                        right: -0.5vw;
                        top: -0.5vw;
                        width: 0.5vw;
                        aspect-ratio: 1/1;
                        z-index: 3;
                        background: #fff;
                    }
                }
            }
            .ancor_left_bottom {
                span {
                    &:nth-child(1) {
                        display: block;
                        position: absolute;
                        left: -0.5vw;
                        bottom: -0.5vw;
                        width: 0.5vw;
                        aspect-ratio: 1/1;
                        z-index: 3;
                        background: #fff;
                    }
                }
            }
            .ancor_right_bottom {
                span {
                    &:nth-child(1) {
                        display: block;
                        position: absolute;
                        right: -0.5vw;
                        bottom: -0.5vw;
                        width: 0.5vw;
                        aspect-ratio: 1/1;
                        z-index: 3;
                        background: #fff;
                    }
                }
            }
        }
    }
}
</style>
