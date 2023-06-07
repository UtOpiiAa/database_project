<template>
  <div class="personal-center">
    <h1 class="title">个人中心</h1>
    <div class="user-info">
      <h2 class="info-item">{{ userInfo.name }}</h2>
      <p class="info-item">Email: {{ userInfo.email }}</p>
      <p class="info-item">电话号码: {{ userInfo.phone }}</p>
    </div>
    <div class="profile-picture">
      <img :src="profilePicturePath" alt="Profile Picture" />
    </div>
    <router-link to="/login" class="logout-button">
      退出登录
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AdminMenu',
  data() {
    return {
      userInfo: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
      },
      profilePicturePath: require('../../assets/logo.jpg'),
    };
  },
};
</script>

<style scoped>
.personal-center {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: 36px;
  margin-bottom: 30px;
}

.info-item {
  font-size: 24px;
  margin-bottom: 15px;
}

.profile-picture img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 30px;
}

.logout-button {
  display: inline-block;
  padding: 15px 30px;
  font-size: 24px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-button:hover {
  background-color: #0056b3;
}
</style>
