<template>
  <div class="information">
    <div class="list" v-for="(item,ind) of dataList" :key="ind" @click="goContentPage(item.id)">
      <div class="left">
        <img v-lazy="item.homeImgUrl"/>
      </div>
      <div class="right">
        <div class="title">{{item.title}}</div>
        <div class="time">{{item.createTime}}</div>
        <div class="content">{{item.subtitle}}</div>
      </div>
    </div>
    <div class="nobody" v-show="dataList.length === 0">暂无数据</div>
    <Page v-show="pageTotal > 10" class="pageStyle" :total="pageTotal" @on-change="onChangePage" show-elevator></Page>
  </div>
</template>

<script>
export default {
  components: {
  },
  head() {
    return {
      title: '资讯中心',
    };
  },
  data() {
    return {
      pageTotal: 0,
      pageSize: 10,
      pageNo: 1,
      dataList: [],
    };
  },
  mounted() {
    this.getList(this.pageNo, this.pageSize);
  },
  methods: {
    goContentPage(id) {
      this.$router.push({ name: 'informationInfo', query: { id } });
    },
    onChangePage(pageNo) {
      this.getList(pageNo, this.pageSize);
    },
    getList(current, size) {
      this.$axios.$get('/api/v1/home/news/query', {
        params: {
          current,
          size,
        },
      }).then(res => {
        if (res.code === 0) {
          this.dataList = res.data.list;
          this.pageTotal = res.data.totalCount;
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.information{
  width: 60%;
  min-height: 80vh;
  margin:0 auto;
  padding-top: 50px;
  .nobody{
    font-size: 50px;
    text-align: center;
    line-height: 400px;
  }
  .list{
    padding: 30px 0;
    overflow: hidden;
    border-bottom: 1px solid #cdcdcd;
    cursor: pointer;
    .left{
      float: left;
      width: 35%;
      height: 370px;
      img{
        width: 100%;
      }
    }
    .right{
      float: right;
      width: 65%;
      height: 370px;
      padding-left: 20px;
      overflow: hidden;
      .title{
        font-size: 24px;
        color: #333;
        margin-bottom: 50px;
      }
      .time{
        font-size: 24px;
        color: #808080;
        margin-bottom: 20px;
      }
      .content{
        font-size: 24px;
        color: #808080;
        overflow: hidden;
        word-break: break-all;
        text-overflow:ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
      }
    }
  }
  .pageStyle{
    text-align: center;
    margin:50px 0;
  }
}
@media screen and (max-width: 750px) {
  @size:37.5;
  .information{
    width: 90%;
    min-height: 80vh;
    margin:0 auto;
    padding-top: 0;
    .nobody{
      font-size: 50rem/@size;
      text-align: center;
      line-height: 400rem/@size;
    }
    .list{
      padding: 30rem/@size 0;
      overflow: hidden;
      border-bottom: 1px solid #cdcdcd;
      cursor: pointer;
      .left{
        float: left;
        width: 100%;
        height: auto;
        img{
          width: 100%;
          height: 210rem/@size;
        }
      }
      .right{
        float: right;
        width: 100%;
        height: auto;
        padding-left: 0;
        overflow: hidden;
        .title{
          font-size: 23rem/@size;
          color: #333;
          margin-bottom: 10rem/@size;
        }
        .time{
          font-size: 15rem/@size;
          color: #808080;
          margin-bottom: 10rem/@size;
        }
        .content{
          font-size: 15rem/@size;
          color: #808080;
          overflow: hidden;
          word-break: break-all;
          text-overflow:ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
        }
      }
    }
    .pageStyle{
      text-align: center;
      margin:50px 0;
    }
  }
}
</style>
