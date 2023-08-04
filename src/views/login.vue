<template>
  <div class="login-wrapper">
    <div class="header">Login</div>
    <form @submit.prevent="handleLogin" method="post">
      <div class="form-wrapper">
        <input v-model="tempUsername" type="text" name="u" placeholder="请输入账号" class="input-item" maxlength="16">
        <!-- Error messages for username, password, and captcha -->
        <div v-if="showError && !tempUsername.trim()" class="error_tips">
          <span class="error_logo"></span>
          <span class="err_m">请输入账号！</span>
        </div>
        <input v-model="tempPassword" type="password" name="p" placeholder="请输入密码" class="input-item" maxlength="16">
        <div v-if="showError && !tempPassword.trim()" class="error_tips">
          <span class="error_logo"></span>
          <span class="err_m">请输入密码！</span>
        </div>
        <div class="captcha-wrapper">
          <input v-model="tempCaptcha" type="text" name="captcha" class="captcha-input" title="验证码" placeholder="请输入验证码">
          <img :src="captchaImage" @click="refreshCaptcha" class="captcha-image" alt="验证码" />
        </div>
        <div v-if="showError && !tempCaptcha.trim()" class="error_tips">
          <span class="error_logo"></span>
          <span class="err_m">请输入验证码！</span>
        </div>
        <button type="submit" class="btn" id="login-btn">Login</button>
        <!-- Display error message -->
        <div v-if="errorMessage" class="error_tips">
          <span class="error_logo"></span>
          <span class="err_m">{{ errorMessage }}</span>
        </div>
      </div>
    </form>

    <div class="msg">
      Don't have an account? <a href="#">Sign up</a>
    </div>
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
      tempUsername: '',
      tempPassword: '',
      tempCaptcha: '',
      showError: false,
      errorMessage: '',
      captchaImage: '', // 新增验证码图片数据
    };
  },
  methods: {
    async handleLogin() {
      this.errorMessage = '';

      const username = this.tempUsername.trim();
      const password = this.tempPassword.trim();
      const captcha = this.tempCaptcha.trim();

      if (!username) {
        this.errorMessage = '请输入账号！';
      } else if (!password) {
        this.errorMessage = '请输入密码！';
      } else if (!captcha) {
        this.errorMessage = '请输入验证码！';
      } else {
        try {
          const response = await login(username, password, captcha);
          console.log('登录成功', response);
          // 处理登录成功的逻辑，例如跳转到其他页面
          this.$router.push('/dashboard/analysis'); // 导航到仪表盘分析页面
        } catch (error) {
          this.errorMessage = '登录失败，请重新登录。';
          console.error(error);
        }
      }

      this.showError = Boolean(this.errorMessage);

      if (this.showError) {
        setTimeout(() => {
          this.errorMessage = '';
          this.showError = false;
        }, 3000);
      }
    },
    refreshCaptcha() {
      // 在用户点击验证码图片时刷新验证码
      this.getCaptchaImage();
    },
    async getCaptchaImage() {
      try {
        const response = await fetch('/get_captcha');
        const blob = await response.blob();
        this.captchaImage = URL.createObjectURL(blob);
      } catch (error) {
        console.error('获取验证码失败', error);
      }
    },
  },
};
</script>


<style>
/* 添加样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
  font-family: Arial, sans-serif;
}

.login-wrapper {
  background-color: #fff;
  width: 358px;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header {
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-item {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  border: 0;
  padding: 10px;
  border-bottom: 1px solid #80807d;
  font-size: 15px;
  outline: none;
}

.btn {
  width: 100%;
  padding: 10px;
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.msg {
  text-align: center;
  margin-top: 20px;
}

a {
  text-decoration: none;
  color: #abc1ee;
}

.error_tips {
  position: absolute;
  top: -50px;
  left: 0;
  right: 0;
  background-color: transparent; /* Remove the red background */
  color: #f44336;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.error_tips .error_logo {
  background-image: url('https://qq-web-legacy.cdn-go.cn/any.ptlogin2.qq.com/v1.46.0/ptlogin/v4/style/40/images/error_icon.png');
  /* 设置背景图像大小 */
  margin-right: 10px;
}

.error_tips.show {
  display: block;
}

/* 添加验证码样式 */
.captcha-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.captcha-input {
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 1px solid #80807d;
  font-size: 15px;
  outline: none;
}

.captcha-image {
  width: 100px;
  height: 40px;
  margin-left: 10px;
  border: 1px solid #80807d;
}
</style>
