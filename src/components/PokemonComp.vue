<template>
    <section class="pokemon" id="pokemon">
        <div class="pokemon_inner">
            <div class="pokemon_stage">
                <figure class="monster" style="display: flex">
                    <img src="../assets/img/pokemon-react2.png" alt="" class="react" />
                    <img src="../assets/img/pokemon-vue2.png" alt="" />
                    <img src="../assets/img/pokemon-html2.png" alt="" />
                    <!-- <img src="../assets/img/pokemon-css2.png" alt="" /> -->
                </figure>
                <figure class="char">
                    <img src="../assets/img/pokemon_char.png" alt="" />
                </figure>
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
                                <span><img src="../assets/img/dot_arrow.png" alt="" /></span>
                                싸운다
                            </li>
                            <li>
                                <span><img src="../assets/img/dot_arrow.png" alt="" /></span> 볼
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
    name: 'PokemonComp',
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
        this.skilArrow();
        this.pokemon();
    },

    methods: {
        pokemon() {
            let monster = gsap.utils.toArray('.monster img');
            gsap.set(monster, {
                xPercent: 50 * (monster.length - 1),
            });
            gsap.to(monster, {
                xPercent: -100 * (monster.length - 1),
                ease: 'none',

                scrollTrigger: {
                    trigger: '.pokemon',
                    pin: '.pokemon',
                    pinSpacing: true,
                    scrub: 1,
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
.pokemon {
    //height: 100vh;
    width: 100%;
    overflow: hidden;
    height: auto;
    &_inner {
        width: 1000%;
        height: 100vh;
        min-height: 50vh;
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
    }

    &_stage {
        width: 100vw;
        height: 100vh;
        position: relative;
        .char {
            width: 22vw;
            position: absolute;
            left: 10vw;
            bottom: 30vh;
        }

        .monster {
            width: 22vw;
            position: absolute;
            right: 15vw;
            top: 3vw;
        }
    }

    &_ui {
        position: absolute;
        width: 100vw;
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
