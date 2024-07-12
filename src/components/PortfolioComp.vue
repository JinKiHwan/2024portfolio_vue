<template>
    <section class="portfolio" id="portfolio">
        <div class="portfolio_inner">
            <ul class="portfolio_list">
                <li v-for="(portfolio, idx) in portfolios" :key="idx">
                    <div>
                        <ul class="bedge_list">
                            <li class="bedge year">{{ portfolio.year }}</li>
                            <li class="bedge respon">{{ portfolio.type }}</li>
                        </ul>

                        <div class="portfolio_wrap">
                            <div class="portfolio_info">
                                <h3>{{ portfolio.title }}</h3>
                                <ul class="portfolio_skil">
                                    <li>#GSAP</li>
                                </ul>
                            </div>

                            <div class="portfolio_right">
                                <div class="portfolio_logo">
                                    <img src="../assets/img/logo.webp" alt="쿠키런 브레이버스" />
                                </div>
                                <div class="portfolio_shortcut">
                                    <a href="#!">바로가기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'PortfolioComp',
    data() {
        return {
            portfolios: [
                {
                    year: '2023',
                    type: 'Responsive',
                    title: '포트폴리오 제목 1',
                    skills: ['#React', '#Node', '#Scss'],
                    logo: '/src/assets/img/logo.webp',
                    alt: '쿠키런 브레이버스 1',
                    href: '#',
                },
                {
                    year: '2022',
                    type: 'Responsive',
                    title: '포트폴리오 제목 2',
                    skills: ['#Vue3', '#Jquery', '#Scss'],
                    logo: '/src/assets/img/logo.webp',
                    alt: '쿠키런 브레이버스 2',
                    href: '#',
                },
                {
                    year: '2021',
                    type: 'Responsive',
                    title: '포트폴리오 제목 3',
                    skills: ['#Jquery', '#Scss'],
                    logo: '/src/assets/img/logo.webp',
                    alt: '쿠키런 브레이버스 3',
                    href: '#',
                },
                {
                    year: '2020',
                    type: 'Responsive',
                    title: '포트폴리오 제목 4',
                    skills: ['#Php', '#Jquery', '#Scss'],
                    logo: '/src/assets/img/logo.webp',
                    alt: '쿠키런 브레이버스 4',
                    href: '#',
                },
                {
                    year: '2020',
                    type: 'Responsive',
                    title: '포트폴리오 제목 5',
                    skills: ['#Vue', '#Jquery', '#Scss'],
                    logo: '/src/assets/img/logo.webp',
                    alt: '쿠키런 브레이버스 5',
                    href: '#',
                },
            ],
        };
    },

    setup() {
        onMounted(() => {
            gsap.from('.portfolio_list>li', {
                opacity: 0,
                x: -500,
                y: 300,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: '.portfolio_list',
                    start: 'top center',
                    end: 'top top',
                    //markers: true,
                },
            });
        });
    },
};
</script>

<style lang="scss">
.portfolio {
    min-height: 100vh;
    height: auto;
    padding-top: 15vw;
    overflow: hidden;
    position: relative;

    &::after {
        content: '';
        width: 100%;
        height: 250px;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
        display: block;
        background: #0e100f;
        box-shadow: 0 -5px 10px rgba($color: #fff, $alpha: 0.2);
    }

    &_inner {
        width: 100%;
    }
    &_list {
        width: 100%;
        padding: 0 100px;
        display: flex;
        flex-direction: column;
        > li {
            position: relative;
            perspective: 700px;

            > div {
                background: #222;

                width: 100%;
                height: 530px;
                padding: 30px;
                box-shadow: 0 -15px 32px rgba(0, 0, 0, 0.25);
                box-sizing: border-box;
                transform-style: preserve-3d;
                transform: rotateX(-10deg) translateZ(-5px);
                transition: color 0.6s, background-color 0.6s, transform 0.6s ease;
                border-radius: 23px;
                border-top: 10px solid #000;
            }

            &:hover {
                > div {
                    color: #222;
                    background: #2d4425;
                    transform: rotateX(-5deg) translateZ(-5px) translateY(-120px);
                }
            }
        }

        > li + li {
            margin-top: -350px;
        }

        .bedge_list {
            display: flex;
            gap: 1vw;
            margin-bottom: 1vw;
            li {
                padding: 5px;
                border-radius: 5px;
                background: #ddd;
                font-size: 1.2vw;
                font-weight: 400;

                &.year {
                    background: linear-gradient(135deg, rgba(247, 189, 248, 1) 0%, rgba(47, 60, 192, 1) 100%);
                }
                &.respon {
                    background: linear-gradient(90deg, rgba(255, 135, 9, 1) -10%, rgba(247, 189, 248, 1) 100%);
                }
            }
        }
    }
    &_info {
        h3 {
            font-size: 3vw;
            font-weight: 700;
            margin-bottom: 1vw;
            color: $text-df;
        }
    }
    &_skil {
        display: flex;
        gap: 1vw;

        li {
            padding: 10px 20px;
            background: linear-gradient(30deg, rgba(253, 213, 235, 1) 30%, rgba(243, 77, 168, 1) 100%);
            font-size: 18px;
            font-weight: 600;
            border-radius: 30px;
        }
    }
    &_wrap {
        display: flex;
        justify-content: space-between;
        align-self: flex-start;
    }
    &_right {
        margin-left: auto;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    &_logo {
        max-width: 150px;
    }

    &_shortcut {
        margin-left: 2vw;
        transform-origin: center;
        color: #fff;
    }
}
</style>
