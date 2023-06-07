<template>
  <div class="wrong-questions">
    <h2 class="page-title">错题集</h2>
    <div v-if="wrongQuestions.length === 0" class="empty-message">暂无错题</div>
    <el-card v-else class="question-card" v-for="(question, index) in wrongQuestions" :key="index">
      <div class="question-content">{{ question.content }}</div>
      <el-radio-group v-model="selectedOptions[index]" class="question-options">
        <el-radio v-for="option in question.options" :label="option" :key="option">{{ option }}</el-radio>
      </el-radio-group>
      <div class="actions">
        <el-button type="danger" @click="removeQuestion(index)">移除</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'WrongQuestions',
  data() {
    return {
      wrongQuestions: [
        {
          content: '这是一个错题的问题描述',
          options: ['选项A', '选项B', '选项C', '选项D'],
        },
        {
          content: '这是另一个错题的问题描述',
          options: ['选项A', '选项B', '选项C', '选项D'],
        },
      ],
      selectedOptions: [],
    };
  },
  methods: {
    removeQuestion(index) {
      this.wrongQuestions.splice(index, 1);
      this.selectedOptions.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.wrong-questions {
  max-width: 600px;
  margin: 0 auto;
}

.page-title {
  text-align: center;
  margin-bottom: 20px;
}

.empty-message {
  text-align: center;
  margin-top: 20px;
  color: #999;
}

.question-card {
  margin-bottom: 20px;
}

.question-content {
  font-weight: bold;
  margin-bottom: 10px;
}

.question-options {
  margin-bottom: 10px;
}

.actions {
  text-align: right;
}
</style>
