<template>
    <section class="main_section" id="main">
        <div class="main_section-inner">
            <ul class="main_section-text">
                <li><span>&#60;</span>dev<i class="e">e</i>l<i class="o"></i>p<i class="e2">e</i>r<span>&#62;</span></li>
                <li class="publisher"><span>[</span><i>p</i><i>u</i><i>b</i><i>l</i><i>i</i><i>s</i><i>h</i><i>e</i><i>r</i><span>]</span></li>
                <li class="frontend"><span>&#123;&#123;</span><i>f</i><i>r</i><i>o</i><i>n</i><i>t</i><i>e</i><i>n</i><i>d</i><span>&#125;&#125;</span></li>
                <li class="design">
                    <span class="at">@</span>
                    <span class="flower"><img src="../assets/img/flower.svg" alt="" /></span>
                    <span class="circle"><img src="../assets/img/circle.png" alt="" /></span>
                    <span class="star"><img src="../assets/img/star.svg" alt="" /></span>
                    <i>d</i><i>e</i><i>s</i><i>i</i><i>g</i><i>n</i>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import gsap from 'gsap';

export default {
    data() {
        return {};
    },
    mounted: function () {
        this.developAni();
        this.publisherAni();
        this.frontendAni();
        this.designAni();
    },

    methods: {
        developAni() {
            let o = document.querySelector('i.o');
            const tl = gsap.timeline({ repeat: -1 });
            tl.set(o, {
                rotate: 0,
                width: '3.6vw',
            });
            tl.to(o, {
                opacity: 1,
            })
                .to(o, {
                    delay: 1,
                    width: '10vw',
                })
                .to(o, {
                    delay: 3,
                    width: '3.6vw',
                })
                .to(o, {
                    rotate: 180,
                    duration: 2,
                    ease: 'elastic.out(1)',
                });

            let e = document.querySelector('i.e');
            let e2 = document.querySelector('i.e2');
            const tl2 = gsap.timeline({ repeat: -1 });

            tl2.to(e, {
                rotateX: 180,
                duration: 5,
                transformOrigin: 'center center',
                ease: 'elastic.inOut(1,0.3)',
            })
                .to(
                    e2,
                    {
                        rotateY: 180,
                        duration: 4,
                        delay: 0.1,
                        transformOrigin: 'center center',
                        ease: 'elastic.inOut(1,0.3)',
                    },
                    '<'
                )
                .to(e, {
                    duration: 5,
                    rotateX: 0,
                    transformOrigin: 'center center',
                    ease: 'elastic.inOut(1,0.3)',
                })
                .to(
                    e2,
                    {
                        rotateY: 0,
                        duration: 4,
                        delay: 0.1,
                        transformOrigin: 'center center',
                        ease: 'elastic.inOut(1,0.3)',
                    },
                    '<'
                );
        },
        publisherAni() {
            let publisher = gsap.utils.toArray('.publisher > *');
            const disX = gsap.utils.distribute({
                base: '-5vw',
                amount: '30vw',
            });
            const tl = gsap.timeline({
                repeat: -1, // 무한 반복
                yoyo: true, // 역재생 후 다시 재생
                repeatDelay: 1, // 각 반복 사이의 딜레이 시간 (원하는 대로 조정 가능)
            });
            tl.to(publisher, {
                delay: 1,
                y: gsap.utils.wrap(['2vw', '-2vw']),
            })
                .to(publisher, {
                    y: 0,
                    stagger: {
                        amount: 0.3,
                        each: 0.3,
                        from: 'random',
                    },
                })
                .to(publisher, {
                    delay: 1.5,
                    x: disX,
                    filter: 'blur(10px)',
                    opacity: 0,
                });
        },
        frontendAni() {
            let frontend = gsap.utils.toArray('.frontend i');
            const tl = gsap.timeline({ repeat: -1 });
            tl.to(frontend, {
                display: 'none',
                delay: 1,
                stagger: {
                    from: 'end',
                    amount: 1.5,
                },
            }).to(frontend, {
                delay: 2,
                display: 'block',
                stagger: {
                    from: 'start',
                    amount: 1.5,
                },
            });
        },
        designAni() {
            const at = document.querySelector('.design .at');
            const flower = document.querySelector('.design .flower');
            const circle = document.querySelector('.design .circle');
            const star = document.querySelector('.design .star');
            const design = gsap.utils.toArray('.design i');
            let tl = gsap.timeline({ repeat: -1 });

            tl.set([at, flower, circle, star], {
                opacity: 0,
            })
                .to(at, {
                    x: 0,
                    rotate: 0,
                    opacity: 1,
                })
                .to(design, {
                    color: '#fffce1',
                    x: '1.5vw',
                    stagger: 0.1,
                })
                .to(at, {
                    x: '-8vw',
                    rotate: -150,
                    opacity: 0,
                })
                .to(
                    design,
                    {
                        x: '0',
                        stagger: 0.1,
                    },
                    '<'
                )

                .to(flower, {
                    x: 0,
                    rotate: 0,
                    opacity: 1,
                })
                .to(design, {
                    color: gsap.utils.wrap(['#eec9e4', '#fcc1e1', '#faadd7', '#fc79c2', '#f95fb3', '#f64eab']),
                    x: '1.5vw',
                    stagger: 0.1,
                })
                .to(flower, {
                    x: '-8vw',
                    rotate: -150,
                    opacity: 0,
                })
                .to(
                    design,
                    {
                        x: '0',
                        stagger: 0.1,
                    },
                    '<'
                )
                .to(circle, {
                    x: 0,
                    rotate: 0,
                    opacity: 1,
                })
                .to(design, {
                    color: gsap.utils.wrap(['#ffc5fc', '#d8c3f8', '#9dc1f2', '#7ec0ef', '#52beeb', '#42bde9']),
                    x: '1.5vw',
                    stagger: 0.1,
                })
                .to(circle, {
                    x: '-8vw',
                    rotate: -150,
                    opacity: 0,
                })
                .to(
                    design,
                    {
                        x: '0',
                        stagger: 0.1,
                    },
                    '<'
                )

                .to(star, {
                    x: 0,
                    rotate: 0,
                    opacity: 1,
                })
                .to(design, {
                    color: gsap.utils.wrap(['#ffd0c3', '#ffe8e4', '#ffcaba', '#ffb39b', '#ff9982', '#f77432']),
                    x: '1.5vw',
                    stagger: 0.1,
                })
                .to(star, {
                    x: '-8vw',
                    rotate: -150,
                    opacity: 0,
                })
                .to(
                    design,
                    {
                        x: '0',
                        stagger: 0.1,
                        color: '#fffce1',
                    },
                    '<'
                );
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
            color: $text-df;
            display: flex;
            align-items: center;
            perspective: 500px;
            position: relative;

            span {
                font-size: 6.5vw;
                font-weight: 400;
                display: block;
            }

            i {
                display: block;
                &.o {
                    margin-left: 0.2vw;
                    width: 3.6vw;
                    height: 3.1vw;
                    border-radius: 10px;
                    border-top: 0.5vw solid $text-df;
                    border-left: 0.8vw solid $text-df;
                    border-right: 0.8vw solid $text-df;
                    border-bottom: 0.5vw solid $text-df;
                }
            }

            &.design {
                padding-left: 8vw;

                span {
                    position: absolute;
                    width: 7vw;
                    left: 0;
                    top: -0.5vw;
                    transform: translateX(-8vw) rotate(-170deg);
                    opacity: 0;
                    pointer-events: none;
                    img {
                        width: 100%;
                        pointer-events: none;
                    }
                }
            }
        }
        li:nth-child(odd) {
            margin-right: auto;
        }
        li:nth-child(even) {
            margin-left: auto;
        }
    }
}
</style>
