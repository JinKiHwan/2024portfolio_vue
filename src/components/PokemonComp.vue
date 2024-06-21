<template>
    <section class="pokemon" id="pokemon">
        <div class="pokemon_inner">
            <div class="pokemon_stage">
                <figure class="monster" style="display: flex">
                    <img src="../assets/img/pokemon-react2.png" alt="" class="react" ref="react" />
                    <img src="../assets/img/pokemon-vue2.png" alt="" class="vue" />
                    <img src="../assets/img/pokemon-html2.png" alt="" class="html" />
                    <img src="../assets/img/ghost.png" alt="" class="ghost" />
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
                            <li v-for="(item, index) in items" :key="index" :class="{ active: activeIndex === index }" @mouseover="setActive(index)" @click="index === 0 ? animate() : null">
                                <span><img src="../assets/img/dot_arrow.png" alt="" /></span>
                                {{ item }}
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
        const items = ref(['배운다', '가방', '포켓몬', '도망치다']);
        const activeIndex = ref(0);
        const monsterball = ref(null);
        const react = ref(null);
        //const react = document.querySelectorAll('.monster .react');

        const setActive = (index) => {
            activeIndex.value = index;
        };

        const animate = () => {
            gsap.set(monsterball.value, {
                opacity: 0,
            });
            const monsterballAni = gsap.timeline();
            monsterballAni
                .to(monsterball.value, {
                    duration: 0.1,
                    opacity: 1,
                })
                .to(monsterball.value, {
                    duration: 1,
                    y: '10vw',
                    yoyo: true,
                    ease: 'bounce.out',
                })
                .to(
                    react.value,
                    {
                        duration: 0.1,
                        scale: 0,
                        opacity: 0,
                        delay: 0.3,
                        filter: 'saturate(0.5)',
                    },
                    '<'
                )
                .to(monsterball.value, {
                    filter: 'saturate(0.5)',
                    x: 30,
                    duration: 1,
                    repeat: 3,
                    ease: 'elastic.out(1.15,0.2)',
                    transformOrigin: 'center bottom',
                })
                .to(monsterball.value, {
                    filter: 'none',
                    duration: 0,
                });
        };

        onMounted(() => {
            const monsterImages = gsap.utils.toArray('.monster img');
            const react = document.querySelector('.monster .react');
            const pokemonUi = document.querySelector('.pokemon_ui');
            const pokemonChar = document.querySelector('.char');
            const monsterball = document.querySelector('.monsterball');

            gsap.set(monsterball, {
                opacity: 0,
            });

            gsap.set(monsterImages, {
                opacity: 0,
                x: '3vw',
            });
            gsap.set([pokemonUi, pokemonChar], {
                y: '5vw',
                opacity: 0,
            });

            gsap.to(monsterImages, {
                ease: 'none',
                scrollTrigger: {
                    trigger: '.pokemon',
                    pin: '.pokemon',
                    pinSpacing: true,
                    scrub: 1,
                    end: '+=2000',
                },
            });

            gsap.to(react, {
                delay: 0.5,
                opacity: 1,
                x: '0',
                scrollTrigger: {
                    trigger: '.pokemon',
                    start: 'center bottom',
                    end: 'center top',
                },
            });

            gsap.to([pokemonUi, pokemonChar], {
                y: '0',
                opacity: 1,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: '.pokemon',
                    start: 'center bottom',
                    end: 'center top',
                },
            });
        });

        return {
            items,
            activeIndex,
            setActive,
            animate,
            monsterball,
            react,
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
            img {
                width: 100%;
                object-fit: contain;
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
