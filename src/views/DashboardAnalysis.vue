<template>
    <el-container>
      <!-- 顶部头部导航栏 -->
      <el-header>
        <el-button type="primary" @click="logout">Logout</el-button>
      </el-header>
  
      <!-- 页面内容 -->
      <el-main>
        <el-card>
          <el-icon :type="iconType" style="font-size: 48px; margin-right: 16px;"></el-icon>
          <span style="font-size: 24px; font-weight: bold;">Welcome to the Dashboard Analysis</span>
        </el-card>
      </el-main>
    </el-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        iconType: 'dashboard', // 图标类型，可根据需要更改
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
  /* 添加样式规则 */
  </style>
  