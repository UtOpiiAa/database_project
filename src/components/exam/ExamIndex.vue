<template>
  <div class="exam-page">
    <div>
      <h1 class="h1_title">考试页面</h1>
    </div>
    <div class="s_btn" v-if="currentPage === 0">
      <button  class="ss_btn" @click="nextPage">开始考试</button>
    </div>

    <div v-else-if="currentPage > 0 && currentPage <= questions.length">
      <div class="e_btn">
        <button  class="ee_btn" @click="nextPage" :disabled="currentPage < questions.length || !answered">提交答卷</button>
      </div>
      <div class="question-box">
        <h3>{{ currentQuestion.title }}</h3>
        <ul>
          <li v-for="(option, optionIndex) in currentQuestion.options" :key="optionIndex">
            <label>
              <input
                type="radio"
                :name="'question-' + currentPage"
                :value="option"
                v-model="selectedAnswers[currentPage - 1]"
                :disabled="answered"
              />
              {{ option }}
            </label>
          </li>
        </ul>
      </div>

      <div class="navigation-buttons">
        <button @click="previousPage" :disabled="currentPage === 1">上一页</button>
        <button @click="submitAnswer" :disabled="answered">提交答案</button>
        <button @click="addToWrongAnswers" v-if="answered && !isCorrectAnswer">加入错题集</button>
        <button @click="nextPage" :disabled="currentPage === questions.length || !answered">下一题</button>
      </div>

      <div v-if="answered">
        <p v-if="isCorrectAnswer">回答正确！</p>
        <p v-else>回答错误！</p>
      </div>
    </div>

    <div class="e_div" v-else>
      <h1>考试结束</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [], // 从数据库中获取的题目数据
      currentPage: 0, // 当前页数
      selectedAnswers: [], // 存储选中的答案
      answered: false, // 标记是否已回答当前题目
      isCorrectAnswer: false, // 标记回答是否正确
      wrongAnswers: [], // 存储错题集
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentPage - 1];
    },
  },
  mounted() {
    // 从数据库中获取题目数据，可以使用异步请求或其他方法
    this.fetchQuestionsFromDatabase();
  },
  methods: {
    fetchQuestionsFromDatabase() {
      // 模拟从数据库中获取题目数据的过程
      // 可以根据你的实际需求进行修改
      setTimeout(() => {
        this.questions = [
          {
            title: "问题1",
            options: ["选项A", "选项B", "选项C", "选项D"],
            correctAnswer: "选项A",
          },
          {
            title: "问题2",
            options: ["选项A", "选项B", "选项C", "选项D"],
            correctAnswer: "选项B",
          },
          {
            title: "问题3",
            options: ["选项A", "选项B", "选项C", "选项D"],
            correctAnswer: "选项C",
          },
          // 添加更多问题...
        ];
      }, 1000);
    },
    nextPage() {
      this.currentPage++;
      this.answered = false;
      this.isCorrectAnswer = false;
    },
    previousPage() {
      this.currentPage--;
      this.answered = false;
      this.isCorrectAnswer = false;
    },
    submitAnswer() {
      const correctAnswer = this.currentQuestion.correctAnswer;
      const selectedAnswer = this.selectedAnswers[this.currentPage - 1];
      this.answered = true;
      this.isCorrectAnswer = correctAnswer === selectedAnswer;
    },
    addToWrongAnswers() {
      this.wrongAnswers.push(this.currentQuestion);
    },
    submitExam() {
      // 在这里处理提交逻辑，例如计算得分或向服务器发送答案
      // 可以通过 this.selectedAnswers 获取选中的答案数组
      console.log("提交答案:", this.selectedAnswers);
    },
  },
};
</script>

<style scoped>
.exam-page {
  max-width: 30000px;
  margin: 0 auto;
  background-image: url("../../assets/eva.jpg");
  background-size: cover;
  background-position: center;
}

.question-box {
  border: 20px solid #ccc;
  padding: 150px;
  margin-bottom: 20px;
}

.navigation-buttons {
  margin-top: 200px;
}

button {
  margin-right: 200px;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.h1_title {
  font-family: Simsun;
  text-align: center;
  color: #000;
  font-size:2cm
}

.s_btn {
  margin-top: 35%;
  margin-bottom: 35%;
  margin-left: 17%;
  text-align: center;
}
.ss_btn{
  width:200px;
  height:100px;
  font-size: 20px;
}

.e_btn{
  margin-left: 88%;
  text-align: center;
}

.ee_btn{
  width:140px;
  height:50px;
  font-size: 20px;
}

.e_div{
  padding-top: 200px;
  padding-bottom: 200px;
  margin: 20px 0px;
  width: 100%;
  height: 100px;
  align-items: center;
}
</style>
