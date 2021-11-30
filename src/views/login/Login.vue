<!--
 * @Descripttion: 登录页
 * @Author: Bugmakerrrr
 * @Date: 2021-09-01 13:43:20
 * @LastEditTime: 2021-11-01 10:54:10
-->
<template>
  <div class="login">
    <div class="login_logo"></div>
    <div class="login_title">VueChat</div>
    <div class="login_form">
      <van-form @submit="handleSubmit" autocomplete="off">
        <van-field
          v-model="username"
          type="tel"
          label="账号"
          placeholder="请输入账号"
          :rules="[
            { required: true, message: '请输入账号' },
            { validator: usernameValidator, message: '请输入正确的手机号码' },
          ]"
        />
        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请输入密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
    <div class="login_register">
      <router-link :to="{ name: 'Register' }"><span>没有账号？立即注册</span></router-link>
    </div>
  </div>
</template>

<script>
import { Form, Field, Button } from 'vant';

export default {
  name: 'Login',

  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
  },

  data() {
    return {
      username: '',
      password: '',
    };
  },

  methods: {
    usernameValidator(value) {
      return /^1[3456789]\d{9}$/.test(value);
    },
    handleSubmit(values) {
      console.log(values);
      window.localStorage.setItem('isAuthenticated', '1');
      this.$router.push('/chats');
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  /* background: linear-gradient(to bottom, #8d91f4, #7bc6cc); */

  .login_logo {
    width: 128px;
    height: 128px;
    background: url('~assets/images/logo.svg') no-repeat;
  }

  .login_title {
    margin: 10px 0 60px 0;
    color: #333;
    font-size: 30px;
  }

  .login_form {
    /deep/ .van-cell {
      background-color: transparent;
    }

    /deep/ .van-field__label {
      width: 20%;
      color: #333;
      font-size: 16px;
    }

    /deep/ input:focus {
      background-color: transparent;
    }

    .van-button {
      background-color: #8d91f4;
      border: #8d91f4;
    }
  }

  .login_register {
    margin-left: 170px;
    font-size: 14px;

    a {
      color: #8d91f4;
    }
  }
}
</style>
