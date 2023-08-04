<template>
  <div class="captcha-container">
    <input v-model="captchaText" type="text" name="captcha" placeholder="验证码" class="input-item" />
    <img :src="captchaImage" @click="refreshCaptcha" class="captcha-image" alt="验证码" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      captchaText: '',
      captchaImage: '', // 新增验证码图片数据
    };
  },
  methods: {
    refreshCaptcha() {
      fetch('/get_captcha')
        .then((response) => response.blob()) // 获取图片数据
        .then((blob) => {
          this.captchaImage = URL.createObjectURL(blob); // 更新验证码图片数据
        })
        .catch((error) => {
          console.error('获取验证码失败', error);
        });
    },
  },
  mounted() {
    this.refreshCaptcha(); // 在组件挂载时刷新验证码
  },
};
</script>

<style>
/* 您的 Captcha 组件样式 */
.captcha-container {
  display: flex;
  align-items: center;
  position: relative;
}

.captcha-image {
  cursor: pointer;
  margin-left: 10px;
}
</style>
