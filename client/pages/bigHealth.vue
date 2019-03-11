<template>
  <div class="index">
    <div class="imgBox">
      <img v-lazy="img.health_01">
      <div class="content">
        <div class="box">
          <h2>什么是大健康？</h2>
          <p>大健康是根据时代发展、社会需求与疾病谱的改变，提出的一种全局的理念。它围绕着人的衣食住行以及人的生老病死，关注各类影响健康的危险因素和误区，提倡自我健康管理，是对生命全过程全面呵护的理念指导下提出来的。</p>
        </div>
      </div>
    </div>
    <div class="brief advantage">
      <div class="content main-content">
        <h2>什么是大健康产业？</h2>
        <p>大健康产业是一种有巨大市场潜力的新兴产业。目前涉及医药产品、保健用品、营养食品、医疗器械、保健器具、休闲健身健康管理、健康咨询等多个与人类健康紧密相关的生产和服务领域。</p>
        <p>21世纪将是一个大健康产业获得极大发展的时代。为人们提供健康生活解决方案，这才是大健康产业最大的商机。</p>
      </div>
    </div>
    <div class="meaning">
      <h2>大健康产业兴起会给哪些行业带来机遇</h2>
      <div class="content main-content">
        <div class="box">
          <img v-lazy="img.health_03"/>
        </div>
        <div class="box">
          <div>
            <p>1、药品：行业需求稳定，“仿制+创新”支撑当下</p>
            <p>2、医疗器械：内需拉动国内市场，出口结构高端化抢占海外</p>
            <p>3、医疗服务：终端地位强势，长期趋势向好</p>
            <p>4、养老：制约因素消除，市场化趋势明显</p>
            <p>5、健康险：互补基础医保，潜在需求旺盛</p>
            <p>6、康复医药：承接综合医院，相辅相成实现共赢</p>
            <p>7、体育产业：消费升级、政策扶持、健康需求释放5万亿市场空间</p>
            <p>8、人工智能：科技前沿、萌芽阶段</p>
            <p>9、环保：风起云涌，高景气确定</p>
          </div>
        </div>
      </div>
    </div>
    <div class="brief chance">
      <div class="content main-content">
        <h2>福瑞至的机遇</h2>
        <p>21世纪将是一个大健康产业获得极大发展的时代。为人们提供健康生活解决方案，这才是大健康产业最大的商机。</p>
        <p>国务院发布的《关于促进健康服务业发展的若干意见》从鼓励扩大供给、刺激消费需求两个维度提出了放宽市场准入、加强规划布局和用地保障、完善财税价格政策等7条具体措施，勾画了健康服务业未来几年的发展蓝图。</p>
        <p>发展大健康产业的重要前提，就是转变传统医疗产业发展模式，即从单一救治模式转向“防一治一养”一体化防治模式。福瑞至 控股以一生约平台为核心通过投资合作了华康中泰、安心桥、空气兔等大健康领域的科技公司，在大健康领域形成了闭合的生 态链，帮助传统的医疗企业实现转型！</p>
      </div>
    </div>
    <div class="plan">
      <h2>大健康.诊断+管理</h2>
      <img v-lazy="img.health_02"/>
    </div>
    <div class="news" v-if="dataList.length > 0">
      <h2>大健康生态成员</h2>
      <swiperComponent :dataList="dataList"></swiperComponent>
    </div>
  </div>
</template>

<script>
import swiperComponent from '../components/swiperComponent';
export default {
  data() {
    return {
      value: 0,
      dataList: [],
      img: {
        health_01: require('../assets/images/health_01.jpg'),
        health_02: require('../assets/images/health_02.jpg'),
        health_03: require('../assets/images/health_03.jpg'),
      },
    };
  },
  asyncData() {
    return { value: 0 };
  },
  components: {
    swiperComponent,
  },
  head: {
    title: '大健康',
  },
  mounted() {
    this.getList(1, 100, 'LARGE_HEALTHY_ECOLOGICAL_MEMBER');
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
  @phone:~'only screen and (max-width:750px)';
  .index{
    .main-content{
      max-width:1200px;
      margin:0 auto;
    }
    .imgBox{
      position: relative;
      img{
        display: block;
        width: 100%;
        max-height:500px;
      }
      .content{
        position: absolute;
        width: 580px;
        height: 100%;
        top: 0;
        right: 200px;
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
            margin-bottom: 50px;
            font-weight: normal;
          }
          p{
            font-size: 18px;
            color: #fff;
            line-height: 30px;
          }
        }
        @media @phone{
          position: absolute;
          left:0;
          right:0;
          top: 0;
          bottom:0;
          width:100%;
          .box{
            padding:0 20px;
            h2{
              font-size: 30px;
              margin-bottom: 15px;
            }
            p{
              font-size: 14px;
              line-height: 1em;
              text-indent: 2em;
            }
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
      @media @phone{
        padding:20px 0;
        .content{
          width:100%;
          h2{
            font-size: 30px;
            margin-bottom: 15px;
          }
          p{
            padding:0 10px;
            font-size:14px;
          }
          .box{
            margin-top: 20px;
            .left{
              p{
                font-size: 14px;
                line-height: 1.4em;
              }
            }
            .right{
              p{
                font-size: 15px;
                line-height: 1.5em;
              }
            }
          }
        }
      }
    }
   /* .dilemma{
      width: 100%;
      box-sizing: border-box;
      padding-top: 60px;
      background-color: #FFFFFF;
      position: relative;
      h2{
        color: #333;
        font-size: 46px;
        text-align: center;
        font-weight: normal;
      }
      .content{
        width: 1125px;
        margin: 60px auto;
        display: flex;
        display: -webkit-flex;
        .box{
          flex: 1;
          margin: 0 35px;
          img{
            width: 100%;
          }
          p{
            margin-top: 30px;
            font-size: 20px;
            color: #808080;
            padding: 0 20px;
          }
        }
      }
    }*/
    .meaning{
      width: 100%;
      box-sizing: border-box;
      padding-top: 60px;
      background-color: #FFFFFF;
      position: relative;
      border-top: 1px solid #EFEFEF;
      h2{
        color: #333;
        font-size: 46px;
        text-align: center;
        font-weight: normal;
      }
      .content{
        margin: 60px auto;
        display: flex;
        display: -webkit-flex;
        .box{
          flex: 2;
          img{
            width: 100%;
            display: block;
          }
          p{
            font-size: 20px;
            color: #333333;
            margin: 10px 0;
          }
        }
        .box:nth-of-type(2){
          flex: 3;
          background-color: #F7F7F7;
          font-size: 18px;
          display: flex;
          display: -webkit-flex;
          align-items: center;
          padding: 0 30px;
        }
      }
      @media @phone{
        padding-top: 20px;
        h2{
          font-size: 30px;
          padding: 0 30px;
        }
        .content{
          margin: 15px auto;
          display: block;
          .box{
            width:100%;
            img{
              display: none;
            }
            &:nth-of-type(2){
              padding:15px;
              background:transparent;
              p{
                font-size: 14px;
                margin:0;
                line-height: 1.5em;
              }
            }
          }
        }
      }
    }
    .chance{
      .content{
        p{
          color: #333;
          font-size: 18px;
          margin-top: 40px;
          line-height: 30px;
        }
      }
      @media @phone{
        .content{
          p{
            font-size: 14px;
            margin-top: 20px;
            line-height: 1.5em;
            text-indent: 2em;
          }
        }
      }
    }
    .advantage{
      h2{
        margin-bottom: 60px;
      }
      .content{
        p{
          color: #333;
          font-size: 18px;
          line-height: 35px;
        }
      }
      @media @phone{
        h2{
          margin-bottom: 15px;
        }
        .content{
         p{
           font-size: 14px;
           line-height: 1.5em;
           text-indent: 2em;
         }
        }
      }
    }
    .plan{
      padding-top: 60px;
      border-bottom: 1px solid #EFEFEF;
      h2{
        color: #333;
        font-size: 46px;
        text-align: center;
        font-weight: normal;
      }
      img{
        width: 1418px;
        display: block;
        margin: 60px auto;

      }
      @media @phone{
        padding-top: 20px;
        border:none;
        h2{
          font-size: 30px;
        }
        img{
          width:95%;
          margin: 20px auto;
        }
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
            font-size: 20px;
            color: #333;
            padding: 0 20px;
            text-align: center;
          }
        }
      }
      @media @phone{
        padding:20px 15px;
        h2{
          font-size: 30px;
        }
      }
    }
   /* @media screen and (max-width: 750px) {
      .imgBox{
        .content{
          width: 1100px;
          .box{
            p{
              line-height: 80px;
            }
          }
        }
      }
      .features{
        .content {
          width: 90%;
          .box{
            width: 100%;
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
          width: 90%;
          .box {
            .left {
              flex: 1;
            }
          }
        }
      }
      .dilemma{
        .content{
          width: 90%;
        }
      }
      .meaning{
        .content{
          width: 90%;
          display: block;
        }
      }
      .news{
        .newsBox{
          .box{
            width: 26%;
          }
        }
      }
      .plan{
        img{
          width: 90%;
        }
      }
    }*/
  }
</style>
