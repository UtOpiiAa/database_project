<template>
  <div class="calendar">
    <div class="header">
      <h2>{{ currentMonth }}</h2>
    </div>
    <table>
      <thead>
      <tr>
        <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(week, index) in weeks" :key="index">
        <td v-for="(day, idx) in week" :key="idx" @click="selectDay(day)">
          <span :class="{ active: day.isActive, red: day.isRed }">{{ day.date }}</span>
          <textarea v-model="day.note" placeholder="备注"></textarea>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AdminMain',
  data() {
    return {
      currentDate: new Date(),
      daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      weeks: [],
    };
  },
  computed: {
    currentMonth() {
      return this.currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    },
  },
  mounted() {
    this.generateCalendar();
  },
  methods: {
    generateCalendar() {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      const firstDayOfMonth = new Date(year, month, 1);
      const lastDayOfMonth = new Date(year, month + 1, 0);
      const startDay = firstDayOfMonth.getDay();
      const endDay = lastDayOfMonth.getDate();

      let date = 1;
      for (let week = 0; week < 6; week++) {
        this.weeks[week] = [];
        for (let day = 0; day < 7; day++) {
          if (week === 0 && day < startDay) {
            this.weeks[week][day] = { date: '', isActive: false, isRed: false, note: '' };
          } else if (date > endDay) {
            this.weeks[week][day] = { date: '', isActive: false, isRed: false, note: '' };
          } else {
            this.weeks[week][day] = { date, isActive: false, isRed: false, note: '' };
            date++;
          }
        }
      }
    },
    selectDay(day) {
      day.isActive = !day.isActive;
      day.isRed = !day.isRed;
    },
  },
};
</script>

<style scoped>
.calendar {
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
}

td {
  cursor: pointer;
}

span {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
}

.active {
  background-color: #e6e6e6;
}

.red {
  background-color: red;
  color: white;
}

textarea {
  width: 100%;
  height: 40px;
  margin-top: 5px;
  border: 1px solid #ccc;
  padding: 5px;
  resize: vertical;
}
</style>
