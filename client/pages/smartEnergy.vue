<template>
  <div class="index">
    <div class="imgBox">
      <img v-lazy="imgList.smart_01">
      <div class="content">
        <div class="box">
          <h2>什么是智慧能源？</h2>
          <p>智慧能源是应用互联网和现代通讯技术对能源的生产、使用、调度和效率状况进行实时监控、分析，并在大数据、云计算的基础上进行实时检测、报告和优化处理，以达到最佳状态的开放的、透明的、去中心化和广泛自愿参与的能源综合管理系统</p>
        </div>
      </div>
    </div>
    <div class="brief advantage">
      <div class="content">
        <h2>智慧能源优势</h2>
        <p>①节约能源成本。通过智慧能源在能源系统的广泛应用，可以在生产、转化、传输、消费各环节节约能源，降低使用成本。</p>
        <p>②提升能源资产使用效率。智慧能源技术还能够提升能源设备特别是电网设备的使用率，进而减少重复投资。</p>
        <p>③保护生态环境。智慧能源主要通过对污染物和能源的实时信息化监测管理，节约能源和促进非化石能源广泛应用，沙少SO2
          、PM2.5等污染物排放，并减排温室气体减缓全球气候变化。</p>
        <p>④提升用能体验。远程化、便捷化、实时化、自动化可能是未来能源使用的大趋势。</p>
      </div>
    </div>
    <div class="brief chance">
      <div class="content">
        <h2>福瑞至的机遇</h2>
        <p>在新经济形势下，我国面临着能源环境和经济发展双重压力，能源生产与消费革命需求非常迫切。某种程度来看，“互联网可以拯救能源行业”成为行业较大的可能性。智慧能源将成为互联网与传统能源结合的重要结晶，中国的智慧能源变革将启动一个巨大市场发展的能源市场。</p>
        <p>“十三五”规划纲要明确提岀，积极构建智慧能源系统。推进能源与信息等领堿的新技术深度融合，统筹能源与通信、交通等基础设施网络建设，建设“源-网-荷-储”协调发展、集成互补的能源互联网。</p>
        <p>在此趋势的推动下，福瑞至控股通过投资合作了两山动能、霍尼华泰、上海新金山工业投资发展有限公司等能源科技企业，在智慧能源领域有深厚的技术积累，帮助更多的中小企业实现能源智慧化管控，获得了外界的一致好评！</p>
      </div>
    </div>
    <div class="plan">
      <h2>智慧能源</h2>
      <img v-lazy="imgList.smart_05"/>
    </div>
    <div class="news" v-if="dataList.length > 0">
      <h2>智慧能源合作伙伴</h2>
      <swiperComponent :dataList="dataList"></swiperComponent>
    </div>
  </div>
</template>

<script>
import swiperComponent from '../components/swiperComponent';
export default {
  data() {
    return {
      imgList: {
        smart_01: 'http://static.yishengyue.cn/smart_01.jpg',
        smart_05: require('../assets/images/smart_05.jpg'),
      },
      value: 0,
      dataList: [],
    };
  },
  asyncData() {
    return { value: 0 };
  },
  components: {
    swiperComponent,
  },
  head: {
    title: '智慧能源',
  },
  mounted() {
    this.getList(1, 100, 'SMART_ENERGY_PARTNER');
  },
  methods: {
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
  .index{
    .imgBox{
      position: relative;
      img{
        display: block;
        width: 100%;
      }
      .content{
        position: absolute;
        width: 580px;
        height: 100%;
        top: 0;right: 200px;
        background-color: rgba(0,0,0,0.3);
        display: flex;
        display: -webkit-flex;
        align-items: center;
        justify-content: center;
        .box{
          padding: 0 40px;
          h2{
            font-size: 40px;
            color: #fff;
            margin-bottom: 100px;
            font-weight: normal;
          }
          p{
            font-size: 18px;
            color: #fff;
            line-height: 30px;
          }
        }
      }
    }
    .brief {
      width: 100%;
      box-sizing: border-box;
      padding: 60px 0;
      background-color: #f7f7f7;
      position: relative;
      .content {
        width: 10.200px;
        margin: 0 auto;
        h2 {
          color: #333;
          font-size: 46px;
          text-align: center;
          font-weight: normal;
        }
        .box {
          display: -webkit-flex;
          display: flex;
          margin-top: 60px;
          .left {
            flex: 2;
            p {
              font-size: 16px;
              color: #323232;
              line-height: 30px;
            }
          }
          .right {
            flex: 1;
            p {
              font-size: 16px;
              color: #323232;
              line-height: 30px;
            }
          }
        }
      }
    }
    .chance{
      .content{
        width: 11rem;
        p{
          color: #333;
          font-size: 18px;
          margin-top: 60px;
          line-height: 30px;
        }
      }
    }
    .advantage{
      background-color: #fff;
      h2{
        margin-bottom: 60px;
      }
      .content{
        width: 11rem;
        p{
          color: #333;
          font-size: 18px;
          line-height: 35px;
        }
      }
    }
    .plan{
      width: 60%;
      margin: 0 auto;
      padding-top: 60px;
      border-bottom: 1px solid #E1E1E1;
      h2{
        color: #333;
        font-size: 46px;
        text-align: center;
        font-weight: normal;
      }
      img{
        width: 100%;
        display: block;
        margin: 60px auto;
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
    .index{
      .imgBox{
        position: relative;
        img{
          display: block;
          width: 100%;
        }
        .content{
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;right: 0;
          background-color: rgba(0,0,0,0.3);
          display: flex;
          display: -webkit-flex;
          align-items: center;
          justify-content: center;
          .box{
            padding: 0 10rem/@size;
            h2{
              font-size: 18rem/@size;
              color: #fff;
              margin-bottom: 10rem/@size;
              font-weight: normal;
            }
            p{
              font-size: 15rem/@size;
              color: #fff;
              line-height: 20rem/@size;
            }
          }
        }
      }
      .brief {
        width: 100%;
        box-sizing: border-box;
        padding: 30rem/@size 0;
        background-color: #f7f7f7;
        position: relative;
        .content {
          width: 90%;
          margin: 0 auto;
          h2 {
            color: #333;
            font-size: 23rem/@size;
            text-align: center;
            font-weight: normal;
          }
          .box {
            display: -webkit-flex;
            display: flex;
            margin-top: 30rem/@size;
            .left {
              flex: 2;
              p {
                font-size: 15rem/@size;
                color: #323232;
                line-height: 30rem/@size;
              }
            }
            .right {
              flex: 1;
              p {
                font-size: 15rem/@size;
                color: #323232;
                line-height: 30rem/@size;
              }
            }
          }
        }
      }
      .chance{
        .content{
          width: 90%;
          p{
            color: #333;
            font-size: 18rem/@size;
            margin-top: 30rem/@size;
            line-height: 30rem/@size;
          }
        }
      }
      .advantage{
        background-color: #fff;
        h2{
          margin-bottom: 30rem/@size;
        }
        .content{
          width: 90%;
          p{
            color: #333;
            font-size: 18rem/@size;
            line-height: 35rem/@size;
          }
        }
      }
      .plan{
        padding-top: 30rem/@size;
        border-bottom: 1px solid #E1E1E1;
        h2{
          color: #333;
          font-size: 23rem/@size;
          text-align: center;
          font-weight: normal;
        }
        img{
          width: 90%;
          display: block;
          margin: 30rem/@size auto;
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
