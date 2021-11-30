<!--
 * @Descripttion: 
 * @Author: Bugmakerrrr
 * @Date: 2021-09-01 10:46:14
 * @LastEditTime: 2021-11-02 20:48:52
-->
<template>
  <div class="chats">
    <div class="chats_header">
      <div class="chats_avatar">
        <img src="https://via.placeholder.com/400.jpg" alt="" />
      </div>
      <div class="chats_title">VueChat</div>
      <div class="chats_sidebar">
        <van-popup v-model="isShowSidebar" position="right" :style="{ height: '100%' }">
          <van-sidebar v-model="activeItemKey" @click.stop>
            <van-sidebar-item
              v-for="title in titles"
              :key="title"
              :title="title"
            ></van-sidebar-item>
          </van-sidebar>
        </van-popup>
        <div class="chats_icon" @click="handleShowSidebar">
          <icon type="icon-cebianlanzhankai"></icon>
        </div>
      </div>
    </div>
    <div class="chats_containter">
      <div class="chats_tabs">
        <div
          class="chat chats_tab"
          :class="currentTab === 0 ? 'chats_tab__actived' : ''"
          @click="currentTab = 0"
        >
          聊天
        </div>
        <div
          class="group chats_tab"
          :class="currentTab === 1 ? 'chats_tab__actived' : ''"
          @click="currentTab = 1"
        >
          组
        </div>
      </div>
      <div class="chats_box"></div>
    </div>
  </div>
</template>

<script>
import { Button, Popup, Sidebar, SidebarItem } from 'vant';
import Icon from 'components/Icon.vue';

export default {
  name: 'Chats',

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
      currentTab: 0,
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
.chats {
  width: 100vw;
  height: 100vh;
  background-color: #8d91f4;

  .chats_header {
    height: 48px;
    display: flex;
    padding: 10px 10px 25px 10px;
    line-height: 48px;

    .chats_avatar {
      img {
        width: 40px;
        height: 40px;
        border: 1px solid #fff;
        border-radius: 15px;
      }
    }

    .chats_title {
      flex: 1;
      font-size: 20px;
      color: #fff;
      text-align: center;
    }

    .chats_sidebar {
      .iconfont {
        font-size: 26px;
        color: #fff;
      }

      /deep/ .van-sidebar-item {
        text-align: center;
      }

      /deep/ .van-sidebar-item--select::before {
        background-color: #8d91f4;
      }
    }
  }

  .chats_containter {
    .chats_tabs {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 15px 15px 20px;
      color: #fff;

      .chats_tab__actived {
        padding: 5px 10px;
        color: #8d91f4;
        background-color: #fff;
        border-radius: 8px;
      }
    }

    .chats_box {
      height: calc(100vh - 120px);
      background-color: #fff;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
  }
}
</style>
