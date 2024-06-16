<template>
    <section class="skil">
        <div class="skil_inner">
            <ul class="skil_list">
                <li v-for="(skil, index) in skil" :key="index">
                    <div class="front">
                        <figure><img src="/src/assets/logo.png" alt="" /></figure>
                        <h3>{{ skil.skilName }}</h3>
                    </div>
                    <div class="back">
                        <p>{{ skil.skilTxt }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SkilComp',
    data() {
        return {
            skil: [
                {
                    skilName: 'vue',
                    skilImg: '/src/assets/logo.png',
                    skilTxt: '쀼를 이용한 프로젝트',
                },
                {
                    skilName: 'html',
                    skilImg: '/src/assets/logo.png',
                    skilTxt: '시멘틱태그 ㅎㅎ',
                },
                {
                    skilName: 'scss',
                    skilImg: '/src/assets/logo.png',
                    skilTxt: 'css는 scss로 관리해용',
                },
            ],
        };
    },
};
</script>

<style lang="scss">
.skil {
    height: auto;
    min-height: 50vh;
    &_inner {
        height: 100%;
        min-height: 50vh;
        display: flex;
        align-items: center;
        padding: 30px 0;
    }
    &_list {
        display: flex;
        gap: 1vw;
        > li {
            width: 450px;
            aspect-ratio: 1/1;
            border: 1px solid #f00;
            border-radius: 30px;
            position: relative;
            perspective: 100px;
            transition: transform 1s;
            transform-style: preserve-3d;

            &:hover {
                transform: rotateY(180deg);
                transform-style: preserve-3d;

                .front {
                    z-index: 1;
                }
                .back {
                    z-index: 2;
                }
            }

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
                z-index: 2;
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
                z-index: 1;
                transform: rotateY(180deg);
            }
        }
    }
}
</style>
