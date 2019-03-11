<template>
  <div class="index">
    <div class="imgBox">
      <img v-lazy="imgList.smart_02">
      <div class="content">
        <div class="box">
          <h2>什么是智慧社区？</h2>
          <p>智慧社区是指充分利用物联网、云计算、移动互联网等新一代信息技术的集成应用,为社区居民提供一个安全、舒适、便利的现代化、智慧化生活环境,从而形成基于信息化、智能化社会管理与服务的一种新的管理形态的社区。</p>
        </div>
      </div>
    </div>
    <div class="features">
      <h2>智慧社区特征</h2>
      <div class="content">
        <div class="box">
          <img v-lazy="imgList.smart_06"/>
          <h3>智能门禁</h3>
          <p>既可以使用传统的IC卡开门，同时还可以用人脸识别方式开门，也支持APP开门。</p>
        </div>
        <div class="box">
          <img v-lazy="imgList.smart_07"/>
          <h3>智能医疗</h3>
          <p>通过各种高科技的整合，构建社区急救医疗系统，能自动检测住户的很多身体指标，并且给出专业的建议。</p>
        </div>
        <div class="box">
          <img v-lazy="imgList.smart_09"/>
          <h3>智慧物业管理</h3>
          <p>集成物业管理的相关系统，实现社区各独立应用子系统的融合，进行集中运营管理。</p>
        </div>
        <div class="box">
          <img v-lazy="imgList.smart_10"/>
          <h3>智慧养老服务</h3>
          <p>利用物联网技术，通过各类传感器，使老人的日常生活处于远程监控状态，使得老人有安全保障，子女可以放心工作，政府方便管理。</p>
        </div>
        <div class="box">
          <img v-lazy="imgList.smart_12"/>
          <h3>智慧家居</h3>
          <p>以住宅为平台，兼备建筑、网络通信、信息家电、设备自动化，集系统、结构、服务、管理为一体的高效、舒适、安全、便利、环保的居住环境。</p>
        </div>
      </div>
    </div>
    <div class="brief advantage">
      <div class="content">
        <h2>智慧社区基础设施</h2>
        <p>1丶智慧社区是指充分利用物联网、云计算、移动互联网等新一代信息技术的集成应用,为社区居民提供一个安全、舒适、便利的现代化、智慧化生活环境,从而形成基于信息化、智能化社会管理与服务的一种新的管理形态的社区</p>
        <p>2丶基础数据库群：基础数据库包括业务数据库、传感信息数据库、日志数据库和交换数据库等四大数据库。</p>
        <p>3丶云交换平台：云交换平台主要实现各种异构网络的数据交换和计算。提供软件接口平台，或提供计算服务，或者作为服务器。</p>
        <p>4丶应用及其服务体系：包括个人信息管理系统、日志管理系统、应急呼叫系统、视频监控系统、智能感应系统、门禁系统、远程服务系统等为社区各类人群的直接服务体系。</p>
        <p>5丶保障体系：包括安全保障体系、标准规范体系和管理保障体系三个方面，确实保护基础平台及各个应用系统的可用性、机密性、完整性、抗抵赖性、可审计性和可控性。</p>
      </div>
    </div>
    <div class="brief chance">
      <div class="content">
        <h2>福瑞至的机遇</h2>
        <p>随着物联网、云计算及移动互联网等新一代信息技术在社区的应用不断发展，智慧社区发展潜力巨大。</p>
        <p>智慧社区的主要构成对象就是住宅与家庭，因此社区信息化应用始终主要围绕着居民日常生活展开，在未来智慧社区，智慧应用将渗透到居民生活的各个方面</p>
        <p>福瑞至控股以一生约平台为核心通过投资合作等形式，先后与智联万居、华康中泰、安心桥、空气兔、微幼等科技公司达成战略合作协议，通过核心技术优势，搭建了智慧社区基础平台，并提出了社区养老模式，使社区居民生活方式更加智慧、便捷。</p>
      </div>
    </div>
    <div class="plan">
      <h2>智慧社区</h2>
      <img v-lazy="imgList.smart_04"/>
      <p>以一生约为工具集智能家居丶智慧物业丶健康管理丶社交娱乐丶O2O服务丶特色电商等功能与一体</p>
    </div>
    <div class="news" v-if="dataList.length>0">
      <h2>智慧社区生态成员</h2>
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
        smart_02: 'http://static.yishengyue.cn/smart_02.jpg',
        smart_04: require('../assets/images/smart_04.jpg'),
        smart_06: require('../assets/images/smart_06.png'),
        smart_07: require('../assets/images/smart_07.png'),
        smart_09: require('../assets/images/smart_09.png'),
        smart_10: require('../assets/images/smart_10.png'),
        smart_12: require('../assets/images/smart_12.png'),
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
    title: '智慧社区',
  },
  mounted() {
    this.getList(1, 100, 'SMART_COMMUNITY_MEMBER');
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
    .features{
      width: 100%;
      box-sizing: border-box;
      padding: 60px 0;
      background-color: #fff;
      position: relative;
      border-bottom: 1px solid #E1E1E1;
      h2 {
        color: #333;
        font-size: 46px;
        text-align: center;
        font-weight: normal;
        margin-bottom: 60px;
      }
      .content {
        width: 1500px;
        margin: 0 auto;
        text-align: center;
        .box{
          display: inline-block;
          width: 200px;
          margin: 0 45px;
          vertical-align: top;
          img{
            width: 1.200px;
            display: block;
            margin: 0 auto;
          }
          h3{
            font-weight: normal;
            color: #343434;
            font-size: 18px;
            margin-top: 50px;
            margin-bottom: 40px;
          }
          p{
            font-size: 16px;
            color: #808080;
            text-align: left;
          }
        }
      }
    }
    .brief {
      width: 100%;
      box-sizing: border-box;
      padding: 60px 0;
      background-color: #F7F7F7;
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
        width: 1100px;
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
        width: 1100px;
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
        margin: 0 auto;
        margin-top: 60px;
      }
      p{
        text-align: center;
        color: #333;
        font-size: 18px;
        margin-top: 0.200px;
        margin-bottom: 60px;
      }
    }
    .news{
      padding: 60px 0.9rem;
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
      .features{
        width: 100%;
        box-sizing: border-box;
        padding: 30rem/@size 0;
        background-color: #fff;
        position: relative;
        border-bottom: 1px solid #E1E1E1;
        h2 {
          color: #333;
          font-size: 23rem/@size;
          text-align: center;
          font-weight: normal;
          margin-bottom: 60rem/@size;
        }
        .content {
          width: 90%;
          margin: 0 auto;
          text-align: center;
          .box{
            display: inline-block;
            width: 90%;
            vertical-align: top;
            margin: 10rem/@size 0;
            img{
              width: 90%;
              max-width: 120px;
              display: block;
              margin: 0 auto;
            }
            h3{
              font-weight: normal;
              color: #343434;
              font-size: 18rem/@size;
              margin-top: 30rem/@size;
              margin-bottom: 20rem/@size;
            }
            p{
              font-size: 16rem/@size;
              color: #808080;
              text-align: left;
            }
          }
        }
      }
      .brief {
        width: 100%;
        box-sizing: border-box;
        padding: 30rem/@size 0;
        background-color: #F7F7F7;
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
            margin-top: 60rem/@size;
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
            margin-top: 60rem/@size;
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
          margin: 0 auto;
          margin-top: 60rem/@size;
        }
        p{
          width: 90%;
          text-align: center;
          color: #333;
          font-size: 18rem/@size;
          margin: 20rem/@size auto;
        }
      }
      .news{
        padding: 30rem/@size;
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
              padding: 18rem/@size;
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>
