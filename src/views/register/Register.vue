<!--
 * @Description: 注册页
 * @Author: Bugmakerrrr
 * @Date: 2021-10-07 16:21:22
 * @LastEditors: Bugmakerrrr
 * @LastEditTime: 2021-10-17 23:28:16
-->
<template>
  <div class="register">
    <div class="logo"></div>
    <div class="form">
      <van-form @submit="handleSubmit" autocomplete="off">
        <van-field
          class="avatar"
          name="avatar"
          :rules="[{ required: true, message: '请选择头像' }]"
        >
          <template #input>
            <van-uploader
              v-model="avatar"
              :max-count="1"
              :max-size="3000 * 1024"
              preview-size="200"
              @oversize="handleAvatarOversize"
            />
          </template>
        </van-field>
        <van-field
          v-model="username"
          name="usernameValidator"
          label="账号"
          :rules="[
            { required: true, message: '请填写账号' },
            { validator: usernameValidator, message: '请填写正确的手机号码' },
          ]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="comfirmPassword"
          type="password"
          name="comfirmPasswordValidator"
          label="确认密码"
          :rules="[{ required: true, message: '请确认密码' }]"
        />
      </van-form>
    </div>
  </div>
</template>

<script>
import { Form, Field, Button, Uploader, Toast } from 'vant';

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      password: '',
      comfirmPassword: '',
      avatar: [{ url: 'https://via.placeholder.com/400.jpg' }],
      nickname: '', // 昵称
      sex: '',
      city: '',
    };
  },
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
    [Uploader.name]: Uploader,
    [Toast.name]: Toast,
  },
  methods: {
    usernameValidator(value) {
      return /^1[3456789]\d{9}$/.test(value);
    },
    comfirmPasswordValidator(value) {
      if (this.password && this.password === value) {
        return true;
      }
    },
    handleSubmit(values) {
      console.log(values);
    },
    handleAvatarOversize() {
      Toast('头像大小不能超过3M');
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  background: linear-gradient(to bottom, #be93c5, #7bc6cc);

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

    .avatar {
      &::after {
        content: none;
      }

      /deep/ .van-field__control {
        justify-content: center;
      }

      /deep/ .van-image {
        border-radius: 50%;
      }

      /deep/ .van-uploader__upload {
        border-radius: 50%;
      }
    }
  }
}
</style>
