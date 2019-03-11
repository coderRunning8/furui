<template>
  <div :class="showHoverFlag?'hoverBg show':'hoverBg'" @mouseleave="hoverOutFn">
    <div :class="showHoverFlag?'navListsTwo show':'navListsTwo'">
      <div
        v-for="(item,ind) of hoverList"
        :key="ind"
        :class="checkedTwoIndex===ind?'list active':'list'" @click="goToTwoFn(ind)">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
import Bus from '../assets/js/bus';
export default {
  props: [ 'hoverList', 'showHoverFlag' ],
  data() {
    return {
      checkedTwoIndex: '',
    };
  },
  mounted() {
  },
  methods: {
    hoverOutFn() {
      Bus.$emit('hoverNavState', { showHoverFlag: false });
    },
    goToTwoFn(ind) { // 跳转到二级导航页面
      this.$router.push({ path: this.hoverList[ind].path });
    },
  },
};
</script>

<style lang="less" scoped>
  .hoverBg{
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    height: 0;
    top: 105px;
    right: 0;
    z-index: 2;
    background-color: #fff;
    -webkit-transition: all linear .3s;
    -moz-transition: all linear .3s;
    -ms-transition: all linear .3s;
    -o-transition: all linear .3s;
    transition: all linear .3s;
  }
  .navListsTwo{
    padding-right: 15%;
    position: fixed;
    box-sizing: border-box;
    height: 0;
    overflow: hidden;
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    top: 105px;
    right: 0;
    z-index: 2;
    background-color: #fff;
    -webkit-transition: all linear .3s;
    -moz-transition: all linear .3s;
    -ms-transition: all linear .3s;
    -o-transition: all linear .3s;
    transition: all linear .3s;
    .list{
      font-size: 16px;
      color: #666;
      cursor: pointer;
      padding: 5px 40px;
      border-radius: 5px;
      -webkit-transition: all linear .3s;
      -moz-transition: all linear .3s;
      -ms-transition: all linear .3s;
      -o-transition: all linear .3s;
      transition: all linear .3s;
    }
    .list:hover{
      background-color: #F6F6F6;
      color: #015797;
    }
    .active{
      color: #015797;
    }
  }
  .show{
    height: 80px;
  }
</style>
