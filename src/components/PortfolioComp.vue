<template>
    <section class="portfolio" id="portfolio">
        <div class="portfolio_inner">
            <ul class="portfolio_list">
                <li v-for="(portfolio, index) in portfolios" :key="index">
                    <a href="#!">
                        <ul class="bedge_list">
                            <li class="bedge year">{{ portfolio.year }}</li>
                            <li class="bedge respon">{{ portfolio.type }}</li>
                        </ul>

                        <div class="portfolio_wrap">
                            <div class="portfolio_info">
                                <h3>{{ portfolio.title }}</h3>
                                <ul class="portfolio_skil">
                                    <li v-for="(skill, skillIndex) in portfolio.skills" :key="skillIndex">{{ skill }}</li>
                                </ul>
                            </div>

                            <div class="portfolio_logo">
                                <img src="/src/assets/img/logo.webp" alt="쿠키런 브레이버스" />
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
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
};
</script>

<style lang="scss">
.portfolio {
    min-height: 100vh;
    height: auto;
    //padding-top: 5vw;
    &_inner {
        width: 100%;
    }
    &_list {
        > li {
            width: 100%;
            min-height: 200px;
            padding: 30px;
            background: #0e100f;
            border-bottom: 1px solid #fffce1;
            position: sticky;
            top: 0;
            box-shadow: 0 0 10px rgba($color: #fffce1, $alpha: 0.3);
            a {
                position: relative;
            }
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
    &_logo {
        max-width: 150px;
    }
}
</style>
