<!--
 * @Description: 注册页
 * @Author: Bugmakerrrr
 * @Date: 2021-10-07 16:21:22
 * @LastEditors: Bugmakerrrr
 * @LastEditTime: 2021-11-08 23:33:20
-->
// :rules="[ // { required: true }, // { validator: usernameValidator, message:
'请输入正确的手机号码' }, // ]"
<template>
  <div class="register">
    <div class="register_logo"></div>
    <div class="register_form">
      <van-form @submit="handleSubmit" autocomplete="off">
        <van-field class="register_avatar" :rules="[{ required: true, message: '请选择头像' }]">
          <template #input>
            <van-uploader
              v-model="avatar"
              :max-count="1"
              :max-size="3000 * 1024"
              :before-read="handleAvatarBeforeRead"
              preview-size="200"
              @oversize="handleAvatarOversize"
            />
          </template>
        </van-field>
        <van-field
          v-model="nickname"
          label="昵称"
          placeholder="请输入昵称"
          :rules="[{ required: true }]"
        />
        <van-field v-model="username" label="账号" placeholder="请输入账号" />
        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true }]"
        />
        <van-field
          v-model="comfirmPassword"
          type="password"
          label="确认密码"
          placeholder="请确认密码"
          :rules="[{ required: true }]"
        />
        <van-field v-model="sex" label="性别" :rules="[{ required: true, message: '请选择性别' }]">
          <template #input>
            <van-radio-group v-model="sex" direction="horizontal">
              <van-radio name="male">男</van-radio>
              <van-radio name="female">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">注册</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Form, Field, Button, Uploader, Toast, RadioGroup, Radio } from 'vant';

export default {
  name: 'Register',

  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
    [Uploader.name]: Uploader,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
  },

  data() {
    return {
      nickname: '', // 昵称
      username: '',
      password: '',
      comfirmPassword: '',
      avatar: [{ url: 'https://via.placeholder.com/400.jpg' }],
      sex: 'male',
    };
  },

  methods: {
    usernameValidator(value) {
      return /^1[3456789]\d{9}$/.test(value);
    },

    handleAvatarOversize() {
      Toast.fail('头像大小不能超过3M');
    },

    handleAvatarBeforeRead(file) {
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        Toast('请上传 jpg 格式图片或者 png 格式图片');
        return false;
      }
      return true;
    },

    async handleSubmit() {
      if (this.password !== this.comfirmPassword) {
        Toast.fail('两次密码输入不一致');
      } else {
        // const formData = new FormData();
        // formData.append('nickname', this.nickname);
        // formData.append('username', this.username);
        // formData.append('password', this.password);
        // formData.append('sex', this.sex);
        // formData.append('avatar', this.avatar.file);
        Toast.success('注册成功');
        const resp = await this.$services.signUp({
          username: this.username,
          nickname: this.nickname,
          password: this.password,
          sex: this.sex,
        });
        console.log(resp);
        // this.$router.push('/login');
      }
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
  /* background: linear-gradient(to bottom, #8d91f4, #7bc6cc); */

  .register_form {
    /deep/ .van-cell {
      background-color: transparent;
    }

    /deep/ .van-field__label {
      width: 30%;
      color: #333;
      font-size: 16px;
    }

    /deep/ input:focus {
      background-color: transparent;
    }

    .register_avatar {
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

    .van-button {
      background-color: #8d91f4;
      border: #8d91f4;
    }

    /deep/ .van-radio__icon--checked {
      .van-icon {
        background-color: #8d91f4;
        border: #8d91f4;
      }
    }
  }
}
</style>
