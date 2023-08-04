<template>
  <div class="home">
    <h1>Welcome to the Dashboard</h1>
    <div class="user-info">
      <h2>{{ userInfo.name }}</h2>
      <p>Email: {{ userInfo.email }}</p>
      <p>Role: {{ userInfo.role }}</p>
    </div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Admin',
      },
    };
  },
  methods: {
    logout() {
      // 实现退出登录的逻辑
      // 例如：调用后端的登出接口，清除本地登录状态等
      console.log('Logged out');
    },
  },
};
</script>

<style>
/* 您的样式代码 */
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.user-info {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #0056b3;
}
</style>
