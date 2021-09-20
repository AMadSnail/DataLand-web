<template>
  <header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="home">首页</el-menu-item>
      <el-menu-item index="blog">博客</el-menu-item>
      <el-menu-item index="soother">心灵鸡汤</el-menu-item>
      <el-menu-item index="mycktry">我的</el-menu-item>
    </el-menu>
    <div class="my-user">
      <el-dropdown @command="handleClickUser" placement="bottom">
        <span class="el-dropdown-link">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="register">注册</el-dropdown-item>
          <el-dropdown-item command="login">登入</el-dropdown-item>
          <el-dropdown-item command="loginout">退出登入</el-dropdown-item>
          <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      istrue: false,
      activeIndex: 'home'
    }
  },
  methods: {
    handleSelect (data) {
      console.log(data, '------')
      switch (data) {
        case 'home':
          this.$router.push({ path: '/home' })
          break
        case 'blog':
          this.$router.push({ path: '/blcg' })
          break
        case 'soother':
          this.$router.push({ path: '/soother' })
          break
        case 'mycktry':
          this.$router.push({ path: '/myCode' })
          break
      }
    },
    handleClickUser (data) {
      console.log('user')
      switch (data) {
        case 'register':
          this.$router.push({ path: '/register' })
          break
        // case 'blog':
        //   break
        case 'login':
          this.$router.push({ path: '/login' })
          break
        // case 'mycktry':
        //   break;
      }
    }
  }
}
</script>
<style lang="less" scope>
header{
  position: relative;
  height: 61px;
}
.my-user{
  display: inline-block;
  position: absolute;
  right: 30px;
  top: 0;
  height: 61px;
  .el-dropdown{
    margin-top: 10px;
  }
}
</style>
