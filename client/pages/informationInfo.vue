<template>
  <div class="information">
    <div class="nav">
      <router-link to="information">资讯中心</router-link>
      >
      <span>资讯详情</span>
    </div>
    <div class="title">{{pageData.title}}</div>
    <div class="content" v-html="pageData.content"></div>
    <div class="createTime">{{pageData.createTime}}</div>
  </div>
</template>

<script>
export default {
  async asyncData(ctx) {
    const $http = ctx.app.$axios;
    const pageData = await $http.$get('/api/v1/home/news/info', {
      params: {
        id: ctx.query.id,
      },
    });
    return {
      pageData: pageData.data ? pageData.data : '',
    };
  },
  components: {
  },
  head() {
    return {
      title: '资讯详情',
    };
  },
  data() {
    return {
    };
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
  .information{
    width: 60%;
    min-height: 80vh;
    margin:0 auto;
    padding: 50px 0;
    .nav{
      font-size: 17px;
    }
    .title{
      text-align: center;
      font-size: 34px;
      font-weight: bold;
      padding: 20px 0;
      color: #333;
    }
    .content{
      font-size: 18px;
      color: #333;
      word-break: break-all;
      min-height: 40vh;
      img{
        width: 100% !important;
        height: auto;
        margin: 0 auto;
      }
    }
    .createTime{
      font-size: 20px;
      color: #808080;
      text-align: right;
      padding: 20px 0;
    }
  }
  @media screen and (max-width: 750px) {
    @size:37.5;
    .information{
      width: 90%;
      min-height: 80vh;
      margin:0 auto;
      padding: 25rem/@size 0;
      .nav{
        font-size: 18rem/@size;
      }
      .title{
        text-align: center;
        font-size: 23rem/@size;
        padding: 10rem/@size 0;
        color: #333;
      }
      .content{
        font-size: 15rem/@size;
        color: #333;
        word-break: break-all;
        padding: 20rem/@size 0;
        img{
          width: 100% !important;
          height: auto;
          margin: 0 auto;
        }
      }
      .createTime{
        font-size: 15rem/@size;
        color: #808080;
        text-align: right;
        padding: 10rem/@size 0;
      }
    }
  }
</style>
