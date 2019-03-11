<template>
  <div class="industrialEcology">
    <div class="IEone">
      <div class="content">
        <img v-lazy="img.ie_01">
        <p class="info">
          福瑞至控股有限公司在生活低碳领域深耕8年，以一生约为运营核心，围绕与家庭健康相关的
          “水、空气、食品、安全、人体数据”五个生活维度构建了家庭健康社区共享平台、城市级智慧民生平台等多生共赢商业生态系统，
          打造成房屋的第四个配套，并通过股权投资、产业整合、顶层设计、资源配置、等手段构建了现代农业、大健康产业、智慧社区、智慧能源四大板块。
        </p>
      </div>
    </div>
    <div class="industry">
      <div class="industryBox">
        <div class="box" @click="go('现代农业')">
          <img v-lazy="img.index_19" >
          <div class="layer"><span>现代农业</span></div>
        </div>
        <div class="box" @click="go('智慧能源')">
          <img v-lazy="img.index_21" >
          <div class="layer"><span>智慧能源</span></div>
        </div>
        <div class="box" @click="go('智慧社区')">
          <img v-lazy="img.index_25">
          <div class="layer"><span>智慧社区</span></div>
        </div>
        <div class="box" @click="go('大健康')">
          <img v-lazy="img.index_26">
          <div class="layer"><span>大健康</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  head() {
    return {
      title: '产业生态',
    };
  },
  data() {
    return {
      img: {
        index_26: require('../assets/images/index_26.jpg'),
        index_19: require('../assets/images/index_19.jpg'),
        index_21: require('../assets/images/index_21.jpg'),
        index_25: require('../assets/images/index_25.jpg'),
        ie_01: require('../assets/images/ie_01.png'),
      },
    };
  },
  mounted() {
  },
  methods: {
    go(type) {
      if (type === '现代农业') {
        this.$router.push({ name: 'modernAgriculture' });
        return;
      }
      if (type === '智慧能源') {
        this.$router.push({ name: 'smartEnergy' });
        return;
      }
      if (type === '智慧社区') {
        this.$router.push({ name: 'smartCommunity' });
        return;
      }
      if (type === '大健康') {
        this.$router.push({ name: 'bigHealth' });
        return;
      }
    },
  },
};
</script>

<style lang="less" scoped>
  .industrialEcology{
    .IEone{
      margin: 80px auto 0;
      overflow: hidden;
      border-bottom: 1px solid #d2d2d2;
      .headline{
        font-size: 50px;
        color: #333;
        text-align: center;
      }
      .content{
        width: 60%;
        text-align: left;
        font-size: 20px;
        color: #333;
        margin: 60px auto;
        .info{
          margin: 50px 0;
        }
        img{
          width: 100%;
        }
      }
    }
    .industry{
      h2{
        font-size: 40px;
        line-height: 140px;
        color: #015797;
        border-bottom: 1px solid #202020;
        position: relative;
        text-align: center;
        font-weight: normal;
      }
      h2::after{
        content: "";
        width: 400px;
        height: 010px;
        position: absolute;
        bottom: 0;left: 0;right: 0;
        margin: auto;
        background-color: #006EBD;
      }
      .industryBox{
        width: 60%;
        margin: 0 auto;
        padding-top: 90px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow: hidden;
        .box{
          float: left;
          width: 48%;
          margin-bottom: 70px;
          position: relative;
          cursor: pointer;
          img{
            display: block;
            width: 100%;
            height: 10vm;
          }
          .layer{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;top:0;
            background-color: rgba(0,0,0,.3);
            text-align: center;
            span{
              position: absolute;
              min-width: 200px;
              text-align: center;
              height: 53px;
              line-height: 53px;
              left: 0;right: 0;top: 0;bottom: 0;
              margin: auto;
              font-size: 36px;
              color: #fff;
            }
          }
          p{
            font-size: 16px;
            color: #343434;
            text-align: center;
          }
        }
        .box:nth-of-type(2n){
          float: right;
        }
      }
      a{
        display: block;
        text-align: center;
        background-color: #006EBD;
        font-size: 14px;
        color: #fff;
        width: 50%;
        height: 40px;
        line-height: 40px;
        margin: 70px auto;
        i{
          margin-left: 10px;
        }
      }
      a:hover{
        background-color: #006AAA;
      }
    }
  }
  @media screen and (max-width: 750px) {
    @size:37.5;
    .industrialEcology{
      .IEone{
        margin: 80rem/@size auto 0;
        overflow: hidden;
        border-bottom: 1px solid #d2d2d2;
        .headline{
          font-size: 50rem/@size;
          color: #333;
          text-align: center;
        }
        .content{
          width: 90%;
          text-align: left;
          font-size: 15rem/@size;
          color: #333;
          margin: 5% auto;
          .info{
            margin: 50rem/@size 0;
          }
          img{
            width: 100%;
          }
        }
      }
      .industry{
        padding: 0 5%;
        h2{
          font-size: 23rem/@size;
          line-height: 130rem/@size;
          color: #015797;
          border-bottom: 1px solid #202020;
          position: relative;
          text-align: center;
          font-weight: normal;
        }
        h2::after{
          content: "";
          width: 400rem/@size;
          height: 10rem/@size;
          position: absolute;
          bottom: 0;left: 0;right: 0;
          margin: auto;
          background-color: #006EBD;
        }
        .industryBox{
          padding-top: 45rem/@size;
          overflow: hidden;
          .box{
            float: left;
            width: 100%;
            margin-bottom: 35rem/@size;
            position: relative;
            img{
              display: block;
              width: 100%;
              height: auto;
            }
            .layer{
              position: absolute;
              width: 100%;
              height: 100%;
              left: 0;top:0;
              background-color: rgba(0,0,0,.3);
              text-align: center;
              span{
                span{
                  position: absolute;
                  min-width: 200rem/@size;
                  text-align: center;
                  height: 53rem/@size;
                  line-height: 53rem/@size;
                  left: 0;right: 0;top: 0;bottom: 0;
                  margin: auto;
                  font-size: 36rem/@size;
                  color: #fff;
                }
              }
            }
            p{
              font-size: 16rem/@size;
              color: #343434;
              text-align: center;
              margin-top: 30rem/@size;
            }
          }
          .box:nth-of-type(2n){
            float: right;
          }
        }
        a{
          display: block;
          text-align: center;
          background-color: #006EBD;
          font-size: 14rem/@size;
          color: #fff;
          width: 50%;
          height: 40rem/@size;
          line-height: 40rem/@size;
          margin: 70rem/@size auto;
          i{
            margin-left: 10rem/@size;
          }
        }
        a:hover{
          background-color: #006AAA;
        }
      }
    }
  }
</style>
