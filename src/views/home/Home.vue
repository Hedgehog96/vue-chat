<!--
 * @Descripttion: 
 * @Author: Lijia Lin
 * @Date: 2021-10-21 17:04:31
 * @LastEditTime: 2021-10-28 17:26:57
-->
<template>
  <div class="home">
    <van-popup v-model="isShowSidebar" position="right" :style="{ height: '100%' }">
      <van-sidebar v-model="activeItemKey" @click.stop>
        <van-sidebar-item v-for="title in titles" :key="title" :title="title"></van-sidebar-item>
      </van-sidebar>
    </van-popup>
    <icon type="icon-cebianlanzhankai"></icon>
  </div>
</template>

<script>
import { Button, Popup, Sidebar, SidebarItem } from 'vant';
import Icon from 'components/Icon.vue';

export default {
  name: 'Home',

  components: {
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    Icon,
  },

  data() {
    return {
      titles: ['聊天', '好友', '设置'],
      isShowSidebar: false,
      activeItemKey: 0,
    };
  },

  methods: {
    handleShowSidebar() {
      this.isShowSidebar = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;

  .iconfont {
    color: red;
    font-size: 30px;
  }
}
</style>
