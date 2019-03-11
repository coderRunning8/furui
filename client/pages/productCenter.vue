<template>
  <div class="plan">
    <div class="content" v-html="pageData.richText"></div>
    <div class="news" v-if="dataList.length > 0">
      <h2>{{title}}</h2>
      <swiperComponent :dataList="dataList"></swiperComponent>
    </div>
  </div>
</template>

<script>
import swiperComponent from '../components/swiperComponent';
export default {
  name: 'productCenter',
  head() {
    return {
      title: this.pageData.navigateName,
    };
  },
  data() {
    return {
      pageData: '',
      dataList: '',
      title: '现代农业生态成员',
      pageNo: 1,
      pageSize: 100,
    };
  },
  components: {
    swiperComponent,
  },
  mounted() {
    const id = this.$route.query.id;
    this.getPageData(id);
  },
  watch: {
    $route(val) {
      this.getPageData(val.query.id);
    },
  },
  methods: {
    getPageData(id) {
      this.$axios.$get('/api/v1/home/navigate/info', {
        params: {
          id,
        },
      }).then(res => {
        if (res.code === 0) {
          this.pageData = res.data;
          if (res.data.memberType === 'MODERN_AGRICULTURAL_ECOLOGY') {
            this.title = '现代农业生态成员';
            this.getList(this.pageNo, this.pageSize, 'MODERN_AGRICULTURAL_ECOLOGY');
          } else if (res.data.memberType === 'SMART_COMMUNITY_MEMBER') {
            this.title = '智慧社区生态成员';
            this.getList(this.pageNo, this.pageSize, 'SMART_COMMUNITY_MEMBER');
          } else if (res.data.memberType === 'SMART_ENERGY_PARTNER') {
            this.title = '智慧能源合作伙伴';
            this.getList(this.pageNo, this.pageSize, 'SMART_ENERGY_PARTNER');
          } else if (res.data.memberType === 'LARGE_HEALTHY_ECOLOGICAL_MEMBER') {
            this.title = '大健康生态成员';
            this.getList(this.pageNo, this.pageSize, 'LARGE_HEALTHY_ECOLOGICAL_MEMBER');
          } else {
            this.title = '';
            this.dataList = [];
          }
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
    getList(current, size, type) {
      this.$axios.$get('/api/v1/home/member/query', {
        params: {
          type,
          current,
          size,
        },
      }).then(res => {
        if (res.code === 0) {
          this.dataList = res.data.list;
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
  .plan{
    min-height: 60vh;
    .content{
      width: 60%;
      margin: 0 auto;
      padding: 70px 0;
      font-size: 18px;
      h2{
        font-size: 50px;
        padding: 10px 0;
        color: #333;
        font-weight: normal;
        text-align: center;
        position: relative;
      }
      h3{
        color: #333;
        font-size: 26px;
        font-weight: normal;
        margin-top:40px;
      }
      img{
        width: 100%;
        display: block;
        margin:40px auto;
      }
      p{
        text-align: left;
        color: #333;
        font-size: 18px;
      }
    }
    .news{
      padding: 60px 90px;
      h2{
        color: #333;
        font-size: 46px;
        text-align: center;
        font-weight: normal;
      }
      .newsBox{
        padding-top: 60px;
        overflow: hidden;
        text-align: center;
        .box{
          display: inline-block;
          width: 22%;
          max-width: 381px;
          margin: 0 45px;
          vertical-align: top;
          img{
            width: 100%;
          }
          p{
            margin-top: 30px;
            font-size: 0.200px;
            color: #333;
            padding: 0 0.200px;
            text-align: center;
          }
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    @size:37.5;
    .plan{
      .content{
        width: 90%;
        margin: 0 auto;
        h2{
          font-size: 30rem/@size ;
          padding: 10rem/@size  0;
          color: #333;
          font-weight: normal;
          text-align: center;
          position: relative;
        }
        h3{
          color: #333;
          font-size: 18rem/@size ;
          font-weight: normal;
          margin-top:40px;
        }
        img{
          width: 100%;
          display: block;
          margin:40rem/@size  auto;
        }
        p{
          text-align: left;
          color: #333;
          font-size: 15rem/@size;
        }
      }
      .news{
        padding: 30rem/@size 0;
        h2{
          color: #333;
          font-size: 23rem/@size;
          text-align: center;
          font-weight: normal;
        }
        .newsBox{
          padding-top: 30rem/@size;
          overflow: hidden;
          text-align: center;
          .box{
            display: inline-block;
            width: 22%;
            max-width: 381rem/@size;
            margin: 0 45rem/@size;
            vertical-align: top;
            img{
              width: 100%;
            }
            p{
              margin-top: 30rem/@size;
              font-size: 18rem/@size;
              color: #333;
              padding: 0 20rem/@size;
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>
