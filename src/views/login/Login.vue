<!--
 * @Descripttion: 
 * @Author: Bugmakerrrr
 * @Date: 2021-09-01 13:43:20
 * @LastEditTime: 2021-09-01 20:44:20
-->
<template>
  <div class="login">
    <div class="logo"></div>
    <div class="title">Vue Chat</div>
    <div class="form">
      <van-form @submit="handleSubmit" autocomplete="off">
        <van-field
          v-model="username"
          name="username"
          label="账号"
          :rules="[{ required: true, message: '请填写账号' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Form, Field, Button } from 'vant';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
  },
  methods: {
    handleSubmit(values) {
      console.log(values);
    },
  },
};
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  background: linear-gradient(to bottom, #be93c5, #7bc6cc);

  .logo {
    top: 50px;
    width: 128px;
    height: 128px;
    background: url('~assets/images/logo.svg') no-repeat;
  }

  .title {
    margin: 10px 0 60px 0;
    color: #fff;
    font-size: 30px;
  }

  .form {
    .van-cell {
      background-color: transparent;
    }

    .van-field__label {
      width: 35px;
      color: #fff;
      font-size: 16px;
    }

    input:focus {
      background-color: transparent;
    }
  }
}
</style>
