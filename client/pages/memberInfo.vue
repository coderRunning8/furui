<template>
  <div class="memberInfo">
    <div class="title">{{pageData.memberName}}</div>
    <div class="content" v-html="pageData.content"></div>
  </div>
</template>

<script>
export default {
  components: {
  },
  head() {
    return {
      title: this.pageData.searchTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.pageData.desc },
        { hid: 'keywords', name: 'keywords', content: this.pageData.keyword },
      ],
    };
  },
  data() {
    return {
      pageData: '',
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios.$get('/api/v1/home/member/info', {
        params: {
          id: this.$route.query.id,
        },
      }).then(res => {
        if (res.code === 0) {
          this.pageData = res.data ? res.data : '';
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
  .memberInfo{
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
      min-height: 40vh;
      font-size: 18px;
      color: #333;
      word-break: break-all;
      img{
        width: 100% !important;
        height: auto;
        margin: 0 auto;
      }
    }
    .back{
      font-size: 14px;
      color: #808080;
      text-align: right;
      padding: 20px 0;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 750px) {
    @size:37.5;
    .memberInfo{
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
