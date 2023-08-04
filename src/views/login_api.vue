<template>
  <div>
    <!-- Login form -->
    <form @submit.prevent="handleLogin" method="post">
      <div>
        <label>Username:</label>
        <input v-model="username" type="text" name="username" />
      </div>
      <div>
        <label>Password:</label>
        <input v-model="password" type="password" name="password" />
      </div>
      <div>
        <!-- Include the Captcha component here -->
        <Captcha v-model="captchaText" />
      </div>
      <button type="submit">Login</button>
      <div v-if="errorMessage">{{ errorMessage }}</div>
    </form>
  </div>
</template>

<script>
import { login } from '../api/apiService';
import Captcha from './Captcha.vue';

export default {
  components: {
    Captcha,
  },
  data() {
    return {
      username: '',
      password: '',
      captchaText: '',
      errorMessage: '',
    };
  },
  methods: {
    async handleLogin() {
      this.errorMessage = ''; // 清空之前的错误信息
      try {
        // 调用后端的 /login 接口，提交用户名、密码和验证码文本
        const response = await login(this.username, this.password, this.captchaText);
        console.log('登录成功', response);
        // 处理登录成功的逻辑，例如跳转到其他页面
      } catch (error) {
        this.errorMessage = '登录失败，请重新登录。';
        console.error(error);
      }
    },
  },
};
</script>

<style>
/* 您的组件样式 */
</style>
