<template>
  <div class="backlogin">
    <div class="login_box">
      <div class="title">后台登录</div>
      <div>
        <input type="text" placeholder="手机号/用户名" v-model="userInfo.userName" class="myinput" />
      </div>
      <div>
        <input type="password" placeholder="口令" v-model="userInfo.password" class="myinput" />
      </div>
      <div class="login_other">
        <a href="javascript:;">找回密码</a>
        <input type="checkbox" id="rememberme" /><label for="rememberme">记住我</label>
      </div>
      <button :disabled="disablebtn" @click="handleClickLogin" class="login">{{ loginText }}</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      login: true,
      disablebtn: false,
      userInfo: {
        userName: 'admin',
        password: '123123'
      },
      loginText: '登入'
    }
  },
  methods: {
    handleClickLogin () {
      console.log('登入')
      this.$router.push({ path: '/home' })
    }
  }
}
</script>
<style lang="less">
.backlogin{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
}
.login_box {
    width: 320px;
    margin: 140px auto;
  }
  .login_box .title {
    color: #273444;
    font-size: 1.5em;
    text-align: center;
    margin: 0 0 20px 0;
  }
  .login_box .myinput {
    width: 100%;
    border: 1px solid #cad3d3;
    height: 40px;
    line-height: 40px;
    margin: 5px 0 10px;
    border-radius: 3px;
    padding: 0 10px;
    outline: none;
    box-sizing: border-box;
  }
  .login_box .myinput:focus {
    border: 1px solid #4289dc;
  }
  .login_other {
    overflow: hidden;
  }
  .login_other a {
    float: right;
    color: #727f8f;
  }
  .login_other a:hover {
    color: #273444;
  }
  .login_other input, .login_other label {
    float: left;
    color: #727f8f;
  }
  .login_other input {
    margin: 4px 5px 0 0;
  }
  .login {
    box-sizing: border-box;
    border: 0;
    height: 44px;
    line-height: 44px;
    width: 100%;
    background: #4187db;
    font-size: 16px;
    border-radius: 3px;
    margin-right: 40px;
    transition: all 0.5s ease;
    cursor: pointer;
    outline: none;
    color: #fff;
    margin-top: 15px;
  }
  .login:hover {
    background: #2668b5;
  }
  .login[disabled] {
    opacity: .8;
  }
  .login[disabled]:hover {
    background: #4187db;
  }
  @media only screen and (max-width: 768px) {
    .login_box {
      width: 280px;
      margin: 50px auto;
    }
  }
</style>
