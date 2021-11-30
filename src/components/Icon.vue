<!--
 * @Description: iconfont组件
 * @Author: Bugmakerrrr
 * @Date: 2021-10-28 17:03:09
 * @LastEditors: Bugmakerrrr
 * @LastEditTime: 2021-10-28 17:21:06
-->
<template>
  <i class="iconfont" :class="iconType"></i>
</template>

<script>
export default {
  name: 'Icon',

  props: {
    type: {
      type: String,
      require: true,
    },
  },

  data() {
    return {
      iconType: this.type,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url('//at.alicdn.com/t/font_2899914_iu6wrnaxecp.css');

.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>
