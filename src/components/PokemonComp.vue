<template>
    <section class="pokemon" id="pokemon">
        <div class="pokemon_inner">
            <div class="pokemon_stage">
                <figure class="monster">
                    <div class="monster_wrap">
                        <img src="../assets/img/pokemon-react2.png" alt="" class="react" ref="react" />
                        <img src="../assets/img/pokemon-vue2.png" alt="" class="vue" ref="vue" />
                    </div>
                </figure>
                <figure class="char">
                    <img src="../assets/img/pokemon_char.png" alt="" />
                </figure>

                <figure class="monsterball" ref="monsterball">
                    <img src="../assets/img/monsterball.png" alt="" />
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
                                배운다
                            </li>
                            <li>
                                <span><img src="../assets/img/dot_arrow.png" alt="" /></span>
                                가방
                            </li>
                            <li>
                                <span><img src="../assets/img/dot_arrow.png" alt="" /></span>
                                포켓몬
                            </li>
                            <li>
                                <span><img src="../assets/img/dot_arrow.png" alt="" /></span>
                                도망친다
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
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'PokemonComp',

    setup() {
        const monsterball = ref(null);
        const react = ref(null);
        const vue = ref(null);

        onMounted(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.pokemon',
                    pin: '.pokemon',
                    pinSpacing: true,
                    scrub: 1,
                    end: '+=2000',
                },
            });
            tl.set(monsterball.value, {
                opacity: 0,
            })
                .set([react.value, vue.value], {
                    x: 100,
                    opacity: 0,
                })
                .to(react.value, {
                    x: 0,
                    opacity: 1,
                })
                .to(monsterball.value, {
                    opacity: 1,
                    y: '10vw',
                });
        });

        return {
            monsterball,
            react,
            vue,
        };
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
        .monsterball {
            width: 5vw;
            position: absolute;
            right: 24vw;
            top: 0;
        }

        .monster {
            width: 22vw;
            position: absolute;
            right: 15vw;
            top: 3vw;
            z-index: 5;

            &_wrap {
                width: 100%;
                position: relative;
            }

            img {
                width: 100%;
                object-fit: contain;
                position: absolute;
                left: 0;
                top: 0;
                display: block;
            }
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
            width: calc(100% - 1vw);
            height: 100%;
            position: relative;
            font-family: 'gsc';
            /* font-family: 'Galmuri11', sans-serif;
            font-weight: bold; */
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
                width: calc(35% - 1.5vw);
                margin: 0.5vw;
                margin-left: 0;
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
                        cursor: pointer;

                        &.active {
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
                                animation: flicker 3s infinite;
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
