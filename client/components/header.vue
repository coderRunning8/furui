<template>
  <div class="z-header">
    <div class="logo">
      <img class="mobileHeaderImg" v-lazy="img.index_mob_01">
      <div class="pcHeaderImg"></div>
    </div>
    <div class="navLists">
      <div
        v-for="(item,ind) of navList"
        :key="ind"
        @mouseover="hoverInFn(item.subNavigates)"
        @click="goToFn(item.url, item.id)"
        :class="item.url === routeName[0]?'list active':'list'">{{ item.navigateName}}</div>
      <div class="childNav" v-show="childNavLists.length > 0 && showChildNav" @mouseleave="showChildNav = false">
        <router-link
          class="childNavItem"
          :to="{ path: item.url, query: { id: item.id }}"
          v-for="(item,ind) of childNavLists"
          :key="ind"
          :class="routeName.length > 1&&item.url === routeName[1]&& $route.query.id === item.id ?'active':''"
        >{{item.navigateName}}</router-link>
      </div>
    </div>
    <img class="mobNav" v-lazy="img.index_mob_02" @click="showFlag = !showFlag"/>
    <Menu :active-name="routeName" v-if="showFlag" class="navListMobile" mode="vertical" width="100%" accordion>
      <template v-for="(item,ind) of navList" >
        <MenuItem v-if="item.subNavigates.length==0" :key="ind" :name="item.url"  :to="{ path: item.url, query: { id: item.id }}" style="padding-right: 42px;">
          {{item.navigateName}}
        </MenuItem>
        <Submenu  :key="ind" :name="item.url" v-if="item.subNavigates.length>0" >
          <template slot="title">
            {{item.navigateName}}
          </template>
          <MenuItem :name="obj.navigateName"  v-for="(obj,index) of item.subNavigates" :key="ind+'-'+index" :to="{ path: obj.url, query: { id: obj.id }}">{{obj.navigateName}}</MenuItem>
        </Submenu>
      </template>
    </Menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [],
      childNavLists: [],
      checkedTwoIndex: '',
      routeName: [],
      showFlag: false,
      showChildNav: false,
      img: {
        index_mob_02: require('../assets/images/index_mob_02.png'),
        index_mob_01: require('../assets/images/index_mob_01.png'),
        sprites: require('../assets/images/index_Sprites.png'),
      },
    };
  },
  mounted() {
    this.getNavList();
    this.setRouteName(this.$route.path, this.$router.id);
  },
  watch: {
    $route(val) {
      this.setRouteName(val.path, val.query.id);
      this.showFlag = false;
    },
  },
  methods: {
    // 选出当前被选中的子路由与父路由
    setRouteName(val, id) {
      for (let i = 0; i < this.navList.length; i++) {
        if (this.navList[i].url === val && this.navList[i].id === id) {
          this.routeName = [ val ];
          return;
        }
        for (let k = 0; k < this.navList[i].subNavigates.length; k++) {
          if (this.navList[i].subNavigates[k].url === val) {
            const data = [];
            data[0] = this.navList[i].url;
            data[1] = this.navList[i].subNavigates[k].url;
            this.routeName = data;
            return;
          }
        }
      }
    },
    hoverInFn(item) {
      this.childNavLists = item;
      if (item.length > 0) {
        this.showChildNav = true;
      } else {
        this.showChildNav = false;
      }
    },
    getNavList() {
      this.$axios.$get('/api/v1/home/navigate/query').then(res => {
        if (res.code === 0) {
          this.navList = res.data;
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
    goToFn(url, id) { // 跳转到一级导航页面
      this.$router.push({ path: url, query: { id } });
    },
  },
};
</script>
<style lang="less">
  @phone:~'only screen and (max-width:750px)';
.z-header{
  height: 100px;
  border-bottom: 1px solid #cdcdcd;
  position: fixed;
  background-color: #fff;
  width: 100%;
  top: 0;left: 0;
  z-index: 10;
  .navLists{
    display: block;
    width: 60%;
    height: 100px;
    float: right;
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    .list{
      font-size: 16px;
      color: #333;
      cursor: pointer;
      padding: 5px 10px;
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
    .childNav{
      height: 100px;
      width: 100%;
      background-color: #fff;
      position: absolute;
      top: 100px;
      left: 0;
      text-align: right;
      line-height: 100px;
      font-size: 16px;
      color: #333;
      overflow: auto;
      &:after{
        content: '';
        height: 2px;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -1px;
        z-index: -1;
        box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
      }
      .childNavItem{
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 5px;
        margin-right: 40px;
        color: #333;
      }
      .childNavItem:hover{
        background-color: #F6F6F6;
        color: #015797;
      }
      .active{
        color: #015797;
      }
    }
  }
  .md-menu{
    display: none;
  }
  .mobNav{
    display: none;
  }
  .logo{
    height: 100%;
    width: 40%;
    float: left;
    .mobileHeaderImg{
      display: none;
    }
    .pcHeaderImg{
      display: inline-block;
      width: 100%;
      height: 60%;
      float: left;
      margin-left: 50px;
      margin-top: 20px;
      background-image: url('../assets/images/index_Sprites.png');
      background-repeat: no-repeat;
      background-position: 0 0;
    }
  }
  .navListsTwo{
    position: absolute;
    width: 100%;
    padding-left: 40%;
    padding-right: 20%;
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
      padding: 5px 10px;
      border-radius: 5px;
      -webkit-transition: all linear .3s;
      -moz-transition: all linear .3s;
      -ms-transition: all linear .3s;
      -o-transition: all linear .3s;
      transition: all linear .3s;
    }
    .list:hover{
      background-color: #c2c2c2;
      color: #015797;
    }
    .active{
      color: #015797;
    }
  }
  .show{
    height: 80px;
  }
  .navListMobile{
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    top: 104px;
    left: 0;
    text-align: center;
  }

}
@media screen and (max-width: 1023px) {
  .z-header{
    height: 104px;
    background-color: #006dba;
    .logo{
      width: auto;
      height: 104px;
      .mobileHeaderImg{
        display: inline-block;
        height: 84px;
        float: left;
        margin-left: 20px;
        margin-top: 10px;
      }
      .pcHeaderImg{
        display: none;
      }
    }
    .navLists{
      display: none;
    }
    .mobNav{
      width: 37px;
      height: auto;
      display: block;
      float: right;
      margin-top: 32px;
      margin-right: 20px;
    }
  }
}
  @media @phone{
    .z-header{
      height:50px;
      .logo{
        height:100%;
        .mobileHeaderImg{
          height:30px;
          margin:0;
          float:none;
          margin-top: 10px;
          padding-left: 15px;
        }
      }
      .mobNav{
        height:25px;
        width:auto;
        margin-top: 12.5px;
      }
      .navListMobile{
        position: absolute;
        box-sizing: border-box;
        padding-bottom: 50px;
        top: 50px;
        left: 0;
        text-align: center;
        height: calc( 100vh - 50px );
        overflow-y: auto;
        -webkit-overflow-scrolling:touch;
      }
    }
  }
</style>
