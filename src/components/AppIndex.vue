<template>
  <div>
    <h1>请选择考试</h1>

    <div class="exam-option">
      <label class="exam-option-label">
        <input type="radio" name="exam" value="语文">
        <span class="exam-option-text">语文</span>
      </label>
    </div>

    <div class="exam-option">
      <label class="exam-option-label">
        <input type="radio" name="exam" value="数学">
        <span class="exam-option-text">数学</span>
      </label>
    </div>

    <div class="exam-option">
      <label class="exam-option-label">
        <input type="radio" name="exam" value="英语">
        <span class="exam-option-text">英语</span>
      </label>
    </div>

    <button @click="submitExam">提交</button>
    <button @click="login">考试</button>
  </div>
</template>

<script>
export default {
  name: 'AppIndex',
  methods: {
    submitExam() {
      const selectedExam = document.querySelector('input[name="exam"]:checked');
      if (selectedExam) {
        const examValue = selectedExam.value;
        alert('您选择了 ' + examValue);
        // 在这里可以根据选中的考试进行相应的操作，比如跳转到相应的页面或执行其他逻辑
      } else {
        alert('请选择一个考试');
      }
    },
    login () {

      this.$router.push('/exam' );
    }
  },
};
</script>

<style scoped>
body {
  background-color: #007bff; /* 蓝色 */
}

.exam-option {
  margin-bottom: 20px;
}

.exam-option-label {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 50px;
  background-color: #7a9cf5;
  color: #fff;
  cursor: pointer;
}

.exam-option-text {
  font-size: 20px;
  font-weight: bold;
}
</style>
