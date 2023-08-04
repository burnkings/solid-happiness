<template>
  <div>
    <div class="container"> <!-- 修改这里的类名为 container -->
      <!-- 顶部头部导航栏 -->
      <el-header>
        <el-button type="primary" @click="logout">Logout</el-button>
      </el-header>

      <!-- 页面内容 -->
      <el-main>
        <el-card>
          <el-icon :name="iconType" style="font-size: 48px; margin-right: 16px;" />
          <span style="font-size: 24px; font-weight: bold;">Welcome to the Dashboard Analysis</span>
        </el-card>
      </el-main>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { ElContainer, ElHeader, ElMain, ElCard, ElIcon, ElButton } from 'element-plus';

export default {
  components: {
    ElContainer,
    ElHeader,
    ElMain,
    ElCard,
    ElIcon,
    ElButton,
  },
  data() {
    return {
      iconType: 'el-icon-s-data',
    };
  },
  methods: {
    logout() {
      console.log('Logged out');
    },
  },
  computed: {
    ...mapState(['userInfo']),
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
/* Your other styles remain the same */
</style>