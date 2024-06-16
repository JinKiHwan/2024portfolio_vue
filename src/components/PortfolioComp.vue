<template>
    <section class="portfolio">
        <div class="portfolio_inner">
            <ul class="portfolio_list">
                <li v-for="(portfolio, index) in portfolios" :key="index">
                    <a href="#!">
                        <ul class="bedge_list">
                            <li class="bedge">{{ portfolio.year }}</li>
                            <li class="bedge">{{ portfolio.type }}</li>
                        </ul>

                        <div class="portfolio_info">
                            <h3>{{ portfolio.title }}</h3>
                            <ul class="portfolio_skil">
                                <li v-for="(skill, skillIndex) in portfolio.skills" :key="skillIndex">{{ skill }}</li>
                            </ul>
                        </div>

                        <div class="portfolio_logo">
                            <img src="/src/assets/img/logo.webp" alt="쿠키런 브레이버스" />
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
                    skills: ['React', 'Node', 'Scss'],
                    logo: '/src/assets/img/logo.webp',
                    alt: '쿠키런 브레이버스 1',
                },
                {
                    year: '2022',
                    type: 'Responsive',
                    title: '포트폴리오 제목 2',
                    skills: ['Vue3', 'Jquery', 'Scss'],
                    logo: '/src/assets/img/logo.webp',
                    alt: '쿠키런 브레이버스 2',
                },
                {
                    year: '2021',
                    type: 'Responsive',
                    title: '포트폴리오 제목 3',
                    skills: ['Jquery', 'Scss'],
                    logo: '/src/assets/img/logo.webp',
                    alt: '쿠키런 브레이버스 3',
                },
                {
                    year: '2020',
                    type: 'Responsive',
                    title: '포트폴리오 제목 4',
                    skills: ['Php', 'Jquery', 'Scss'],
                    logo: '/src/assets/img/logo.webp',
                    alt: '쿠키런 브레이버스 4',
                },
                {
                    year: '2020',
                    type: 'Responsive',
                    title: '포트폴리오 제목 5',
                    skills: ['Vue', 'Jquery', 'Scss'],
                    logo: '/src/assets/img/logo.webp',
                    alt: '쿠키런 브레이버스 5',
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
    &_inner {
        width: 100%;
    }
    &_list {
        > li {
            width: 100%;
            min-height: 200px;
            padding: 30px;
            position: relative;
            background: #f1f1f1;
            border: 1px solid #000;
        }

        .bedge_list {
            display: flex;
            gap: 1vw;
            margin-bottom: 1vw;
            li {
                padding: 5px;
                background: #ddd;
                font-size: 1.8vw;
            }
        }
    }
    &_info {
        h3 {
            font-size: 3vw;
            font-weight: 700;
            margin-bottom: 1vw;
        }
    }
    &_skil {
        display: flex;
        gap: 1vw;

        li {
            padding: 10px 20px;
            border: 1px solid #f00;
            font-size: 18px;
            border-radius: 30px;
        }
    }
    &_logo {
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
        max-width: 150px;
    }
}
</style>
