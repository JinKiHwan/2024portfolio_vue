<template>
    <div id="quiz-container">
        <h1>이미지 퀴즈</h1>
        <div v-if="!quizCompleted && currentQuestion" id="question-container">
            <img :src="currentQuestion.image" alt="퀴즈 이미지" />
            <input v-model="userAnswer" @keyup.enter="checkAnswer" type="text" placeholder="답을 입력하세요" />
            <button @click="checkAnswer">제출</button>
        </div>
        <div v-else-if="!currentQuestion">문제를 불러오는 중...</div>
        <div id="result-container" :class="{ correct: resultMessage.startsWith('정답'), incorrect: resultMessage.startsWith('틀렸네요') }">
            {{ resultMessage }}
        </div>
        <div v-if="quizCompleted" id="final-result">
            최종 점수: {{ score }}/10<br />
            {{ finalMessage }}
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
    setup() {
        // 퀴즈 문제 배열
        // 주의: 이미지 경로를 적절히 수정하세요. 예: '/assets/images/image1.jpg'
        const questions = ref([
            // { image: '../assets/img/해린.jpg', answer: '해린' },
            // { image: '../assets/img/하니.jpg', answer: '하니' },
            // { image: '../assets/img/다니엘.png', answer: '다니엘' },
            // { image: '../assets/img/민지.png', answer: '민지' },
            // { image: '../assets/img/혜인.png', answer: '혜인' },
            // { image: '../assets/img/고무고무바주카.png', answer: '고무고무바주카' },
            // { image: '../assets/img/기욤뮈소.png', answer: '기욤뮈소' },
            // { image: '../assets/img/민희진.png', answer: '민희진' },
            // { image: '../assets/img/방시혁.png', answer: '방시혁' },
            // { image: '../assets/img/안드로메다.png', answer: '안드로메다' },
            // { image: '../assets/img/전현무.png', answer: '전현무' },
            { image: '../assets/img/figma.png', answer: '피그마' },
            // 더 많은 문제를 추가하세요
        ]);

        const shuffledQuestions = ref([]);
        const currentQuestionIndex = ref(0);
        const score = ref(0);
        const userAnswer = ref('');
        const resultMessage = ref('');
        const quizCompleted = ref(false);

        const currentQuestion = computed(() => shuffledQuestions.value[currentQuestionIndex.value] || null);

        const finalMessage = computed(() => {
            if (score.value === 10) return '당신은 멘사인가요?';
            if (score.value >= 6) return '오.. 많이 맞추셨네요?';
            if (score.value >= 3) return '노력하세요...';
            return '다음에 더 잘할 수 있을 거예요!';
        });

        function shuffleQuestions() {
            shuffledQuestions.value = [...questions.value].sort(() => Math.random() - 0.5).slice(0, 10);
        }

        function checkAnswer() {
            if (!currentQuestion.value) return;

            const correct = userAnswer.value.trim().toLowerCase() === currentQuestion.value.answer.toLowerCase();
            if (correct) {
                resultMessage.value = '정답입니다!';
                score.value++;
            } else {
                resultMessage.value = `틀렸네요. 정답은 "${currentQuestion.value.answer}"입니다.`;
            }

            userAnswer.value = '';
            currentQuestionIndex.value++;

            if (currentQuestionIndex.value >= 10) {
                quizCompleted.value = true;
            } else {
                setTimeout(() => {
                    resultMessage.value = '';
                }, 2000); // 시간을 2초로 늘렸습니다. 사용자가 정답을 읽을 시간을 더 주기 위함입니다.
            }
        }

        onMounted(() => {
            shuffleQuestions();
        });

        return {
            currentQuestion,
            userAnswer,
            resultMessage,
            score,
            quizCompleted,
            finalMessage,
            checkAnswer,
        };
    },
};
</script>

<style scoped>
#quiz-container {
    font-family: Arial, sans-serif;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background: #fff;
}

img {
    max-width: 100%;
    max-height: 300px;
    margin: 0 auto;
    margin-bottom: 20px;
}

input {
    padding: 10px;
    font-size: 16px;
    width: 200px;
    margin-right: 10px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
}

#result-container,
#final-result {
    margin-top: 20px;
    font-weight: bold;
}
#result-container.correct {
    color: green;
}

#result-container.incorrect {
    color: red;
}
</style>
