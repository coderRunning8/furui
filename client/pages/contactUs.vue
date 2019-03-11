<template>
  <div class="companyProfile">
    <div class="content" v-if="pageData.officeAddress" v-html="pageData.officeAddress"></div>
  </div>
</template>

<script>
export default {
  components: {
  },
  head() {
    return {
      title: '联系我们',
    };
  },
  data() {
    return {
      pageData: '',
    };
  },
  mounted() {
    this.getPageData();
  },
  methods: {
    getPageData() {
      this.$axios.$get('/api/v1/home/company/query', {
        params: {
          size: 5,
          current: 1,
        },
      }).then(res => {
        if (res.code === 0) {
          this.pageData = res.data.list[0];
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
  .companyProfile{
    .content{
      width: 60%;
      text-align: left;
      font-size: 20px;
      color: #333;
      margin: 250px auto 0;
      min-height: 40vh;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 750px) {
    @size: 37.5;
    .companyProfile {
      .content {
        width: 90%;
        text-align: left;
        font-size: 15rem/@size;
        color: #333;
        margin: 100rem/@size auto 0;
        min-height: 60vh;
        img{
          width: 100%;
        }
      }
    }
  }
</style>
