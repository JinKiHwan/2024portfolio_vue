<template>
    <section class="portfolio" id="portfolio">
        <div class="portfolio_inner">
            <button class="portfolio_add" @click="popupState = true">추가</button>
            <ul class="portfolio_list">
                <li v-for="(portfolio, idx) in state.portfolios" :key="idx">
                    <a :href="portfolio.href">
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
                                <img :src="portfolio.logo" :alt="portfolio.alt" />
                            </div>
                            <div class="portfolio_shortcut">
                                <img src="../assets/img/link_arrow.png" alt="" />
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <div class="portfolio_addPopup" v-if="popupState">
            <div class="wrap">
                <h3>ADD PORTFOLIO</h3>
                <ul>
                    <li><label for="">Title</label><input type="text" ref="portTitRef" /></li>
                    <li><label for="">Link</label><input type="text" ref="portLinkRef" /></li>
                    <li><label for="">Year</label><input type="number" ref="portYearRef" /></li>

                    <li class="skil">
                        <label for="">Skill</label>
                        <div>
                            <select v-model="selectedSkill">
                                <option>#React</option>
                                <option>#Vue3</option>
                                <option>#Jquery</option>
                                <option>#SCSS</option>
                                <option>#GSAP</option>
                                <option>#Node</option>
                                <option>#Php</option>
                            </select>
                            <div class="tagWrap">
                                <span>{{ selectedSkill }}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <label for="">Logo</label>
                        <input type="file" ref="portFileRef" />
                    </li>
                    <li><label for="">Alt</label><input type="text" ref="portLogoAltRef" /></li>
                </ul>

                <div class="btn_wrap">
                    <button class="close" @click="popupState = false">닫기</button>
                    <button class="confirm" @click="addPortfolio()">확인</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { reactive, ref } from 'vue';
import axios from 'axios';

export default {
    name: 'PortfolioComp',

    setup() {
        const state = reactive({
            portfolios: [],
        });

        const popupState = ref(false);
        const portTitRef = ref(null);
        const portLinkRef = ref(null);
        const portYearRef = ref(null);
        const selectedSkill = ref('');
        const portFileRef = ref(null);
        const portLogoAltRef = ref(null);

        const addPortfolio = () => {
            const newPortfolio = {
                year: portYearRef.value.value,
                type: 'Responsive',
                title: portTitRef.value.value,
                skills: [selectedSkill.value],
                logo: '/src/assets/img/logo.webp', // 임시로 고정된 값을 사용합니다.
                alt: portLogoAltRef.value.value,
                href: portLinkRef.value.value,
            };

            axios.post('/api/portfolio', newPortfolio).then((res) => {
                state.portfolios = res.data;
            });

            popupState.value = false; // Close the popup
        };

        axios.get('/api/portfolio').then((res) => {
            state.portfolios = res.data;
        });

        return {
            state,
            addPortfolio,
            popupState,
            portTitRef,
            portLinkRef,
            portYearRef,
            selectedSkill,
            portFileRef,
            portLogoAltRef,
        };
    },
};
</script>

<style lang="scss" scoped>
.portfolio {
    min-height: 100vh;
    height: auto;
    &_inner {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1vw;
    }

    &_add {
        margin-left: auto;
        color: #0e100f;
        width: 5vw;
        height: 3vw;
        background: $text-df;
        border-radius: 10px;
        margin-left: auto;
        margin-right: 1vw;
    }

    &_addPopup {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999;
        background: rgba($color: #000, $alpha: 0.3);
        display: flex;
        align-items: center;
        justify-content: center;

        .wrap {
            max-width: 650px;
            width: calc(100% - 20px);
            aspect-ratio: 1/1;
            margin: 0 auto;
            overflow: auto;
            border-radius: 30px;
            backdrop-filter: blur(10px);
            box-shadow: 0 0 10px rgba($color: #fff, $alpha: 0.5);
            text-align: center;
            padding: 1.5vw;

            h3 {
                font-weight: 600;
                font-size: 30px;
                margin-block: 25px;
                color: $text-df;
            }
            ul {
                text-align: left;
                width: 100%;
                color: $text-df;
                li {
                    height: 50px;
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;
                    label {
                        display: block;
                        width: 100px;
                        text-transform: uppercase;
                    }
                    input,
                    select {
                        height: 35px;
                        flex-grow: 1;
                        background: rgba(0, 0, 0, 0.3);
                        border: none;
                        outline: none;
                        padding: 10px;
                        font-size: 13px;
                        color: #fff;
                        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
                        border: 1px solid rgba(0, 0, 0, 0.3);
                        border-radius: 4px;
                        box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2), 0 1px 1px rgba(255, 255, 255, 0.2);
                        -webkit-transition: box-shadow 0.5s ease;
                        -moz-transition: box-shadow 0.5s ease;
                        -o-transition: box-shadow 0.5s ease;
                        -ms-transition: box-shadow 0.5s ease;
                        transition: box-shadow 0.5s ease;
                        &::-webkit-outer-spin-button,
                        &::-webkit-inner-spin-button {
                            -webkit-appearance: none;
                            margin: 0;
                        }
                        &[type='number'] {
                            -moz-appearance: textfield;
                        }

                        &::placeholder {
                            color: rgba(255, 255, 255, 0.8);
                        }
                        &:focus {
                            background: rgba(105, 102, 102, 0.8);
                        }
                    }
                    select {
                        width: 100%;
                        padding-top: 0;
                        padding-bottom: 0;
                    }
                    &.skil {
                        height: auto;
                        > div {
                            flex-grow: 1;

                            select {
                                margin-block: 10px;
                            }
                        }
                    }
                    .tagWrap {
                        width: 100%;
                        max-width: 490px;
                        overflow: auto;
                        height: 35px;
                        display: flex;

                        &::-webkit-scrollbar {
                            width: 5px; /* 스크롤바의 너비 */
                            height: 5px;
                        }

                        &::-webkit-scrollbar-thumb {
                            height: 10%; /* 스크롤바의 길이 */
                            background: #217af4; /* 스크롤바의 색상 */
                            border-radius: 10px;
                        }

                        &::-webkit-scrollbar-track {
                            background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
                        }

                        span {
                            margin-right: 10px;
                            display: inline-block;
                        }
                    }
                }
            }
        }

        .btn_wrap {
            margin-top: 15px;
            display: flex;
            justify-content: center;
            gap: 20px;

            button {
                width: 50%;
                max-width: 100px;
                height: 35px;
                border-radius: 5px;
                &.close {
                    background: #eee;
                }
                &.confirm {
                    background: #217af4;
                }
            }
        }
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
            &:before {
                content: '';
                width: 100%;
                height: 100%;
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                background: linear-gradient(180deg, rgba(170, 254, 132, 1) 20%, rgba(27, 194, 208, 1) 100%);
                transform: scaleY(0);
                transform-origin: center center;
                transition: all 0.3s;
            }
            > a {
                position: relative;
            }

            &:hover {
                &::before {
                    transform: scaleY(1);
                }
                .portfolio_shortcut {
                    width: 80px;
                    transform: scale(1);
                }
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
        margin-left: auto;
        max-width: 150px;
    }

    &_shortcut {
        margin-left: 2vw;
        width: 0;
        max-width: 80px;
        transform: scale(0);
        transition: all 0.3s;
        transform-origin: center;
    }
}
</style>
