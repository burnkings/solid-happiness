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
      captchaImage: '',
    };
  },
  methods: {
    async refreshCaptcha() {
      try {
        const response = await fetch('/get_captcha');
        const blob = await response.blob();
        this.captchaImage = URL.createObjectURL(blob);
      } catch (error) {
        console.error('获取验证码失败', error);
      }
    },
  },
  mounted() {
    this.refreshCaptcha();
  },
};
</script>

<style>
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
