<template>
  <div class="index">
    <div class="imgBox">
      <img v-lazy="img.mode_03"/>
      <div class="content">
        <div class="box">
          <h2>什么是现代农业？</h2>
          <p>现代农业是指应用现代科学技术、现代工业提供的生产资料和科学管理方法的社会化农业。在按农业生产力的性质和状况划分的农业发展史上，是最新发展阶段的农业。</p>
        </div>
      </div>
    </div>
    <div class="brief">
      <div class="content">
        <h2>现代农业的优势</h2>
        <div class="box">
          <div class="left">
            <p>①具备较高的综合生产率，包括较高的土地产出率和劳动生产率。</p>
            <p>③实现农业生产物质条件的现代化。</p>
            <p>⑤实现农业科学技术的现代化。</p>
            <p>⑦实现农民素质的现代化。</p>
            <p>⑨建立与现代农业相适应的政府宏观调控机制。</p>
          </div>
          <div class="right">
            <p>②农业成为可持续发展产业</p>
            <p>④实现农业生产物质条件的现代化。</p>
            <p>⑥实现管理方式的现代化。</p>
            <p>⑧实现生产的规模化、专业化、区域化。</p>
          </div>
          <div class="mobileBox">
            <p>①具备较高的综合生产率，包括较高的土地产出率和劳动生产率。</p>
            <p>②农业成为可持续发展产业</p>
            <p>③实现农业生产物质条件的现代化。</p>
            <p>④实现农业生产物质条件的现代化。</p>
            <p>⑤实现农业科学技术的现代化。</p>
            <p>⑥实现管理方式的现代化。</p>
            <p>⑦实现农民素质的现代化。</p>
            <p>⑧实现生产的规模化、专业化、区域化。</p>
            <p>⑨建立与现代农业相适应的政府宏观调控机制。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="dilemma">
      <h2>我国农业面临的困境</h2>
      <div class="content">
        <div class="box">
          <img v-lazy="img.mode_06"/>
          <p>总产虽然逐年增加，但是增幅却越来越小</p>
        </div>
        <div class="box">
          <img v-lazy="img.mode_08"/>
          <p>单产虽然逐年增加，但增幅亦不大</p>
        </div>
        <div class="box">
          <img v-lazy="img.mode_10"/>
          <p>种粮亩均纯收益率不断下降，粮食增产增收的潜力十分有限</p>
        </div>
      </div>
    </div>
    <div class="meaning">
      <h2>发展现代农业的意义</h2>
      <div class="content">
        <div class="box">
          <img v-lazy="img.mode_15"/>
        </div>
        <div class="box">
          <div>
            <p>1.现代农业是农业发展的具体体现</p>
            <p>2.新农村建设的首要任务</p>
            <p>3.农民增收的途径之一</p>
            <p>4.实现农业现代化的必由之路</p>
          </div>
        </div>
      </div>
    </div>
    <div class="brief chance">
      <div class="content">
        <h2>福瑞至的机遇</h2>
        <p>当前，我国发展不平衡不充分问题在乡村最为突出。农业农村农民问题是关系国计民生的根本性问题。今年的中央一号文件针对新时代实施乡村振兴战略提出，要加快推进农业农村现代化，大力推进农业发展的质量变革、效率变革和动力变革。走中国特色社会主义乡村振兴道路，让农业成为有奔头的产业。</p>
        <p>在这样的大环境下，福瑞至发挥自身在低碳领域的优势，积极参与并推动农业的现代化发展，于2013年8月13日经四川省人民政府批准，正式成立了四川省生态农业发展促进会，立足促进绿色生态农业产业发展，为社会提供更多安全健康生态产品为己任，以绿色生态农业公益扶贫、产业扶贫、创业帮扶等方式成为“绿创志愿者”，参与“绿创行劢”计划，建立对等多赢、互融共生的扶贫帮困战略合作模式，形成政府、市场、社会协同推进绿色生态农业产业扶贫的良好局面。</p>
        <p>在此理念的推动下，福瑞至控股通过投资合作成立了福瑞至农牧科技、甘霖科技、唤醒土生物科技、中苋科技、钓鱼台产品标准、匠糖果椒、华牧原点、香草小鲜、崇明生物等农业科技公司，在现代农业领域有深厚的技术积累，帮助更多的中小企业实现低碳转型，获得了外界的一致好评。</p>
      </div>
    </div>
    <div class="plan">
      <h2>绿色种植养殖产业解决方案——&nbsp;——产业生态闭环</h2>
      <img v-lazy="img.mode_20"/>
    </div>
    <div class="plan" v-if="dataList.length > 0">
      <h2>现代农业生态成员</h2>
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
        mode_20: require('../assets/images/mode_20.jpg'),
        mode_15: require('../assets/images/mode_15.jpg'),
        mode_10: require('../assets/images/mode_10.png'),
        mode_08: require('../assets/images/mode_08.png'),
        mode_06: require('../assets/images/mode_06.png'),
        mode_03: require('../assets/images/mode_03.jpg'),
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
    title: '现代农业',
  },
  mounted() {
    this.getList(1, 100, 'MODERN_AGRICULTURAL_ECOLOGY');
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
        width:580px;
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
      background-color: #F7F7F7;
      position: relative;
      .content {
        width: 60%;
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
          .mobileBox{
            display: none;
          }
        }
      }
    }
    .dilemma{
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
    }
    .meaning{
      width: 100%;
      box-sizing: border-box;
      padding-top: 60px;
      background-color: #FFFFFF;
      position: relative;
      border-top: 1px solid #E1E1E1;
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
          img{
            width: 100%;
            display: block;
          }
          p{
            font-size: 20px;
            color: #808080;
            margin: 10px 0;
          }
        }
        .box:nth-of-type(2){
          background-color: #F7F7F7;
          font-size: 18px;
          display: flex;
          display: -webkit-flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .chance{
      .content{
        p{
          color: #333;
          font-size: 18px;
          margin-top: 60px;
          line-height: 30px;
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
      padding: 60px 0;
      h2{
        color: #333;
        font-size: 46px;
        text-align: center;
        font-weight: normal;
      }
      .newsBox{
        padding-top: 60px;
        overflow: hidden;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        .box{
          width: 22%;
          max-width: 381px;
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
        .box:first-of-type{
          margin-left: 0;
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
          width:100%;
          height: 100%;
          top: 0;right: 0;
          background-color: rgba(0,0,0,0.3);
          display: flex;
          display: -webkit-flex;
          align-items: center;
          justify-content: center;
          .box{
            padding: 0 20rem/@size;
            h2{
              font-size: 23rem/@size;
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
        padding: 60rem/@size 0;
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
            margin-top: 30rem/@size;
            .left {
              display: none;
            }
            .right {
              display: none;
            }
            .mobileBox{
              display: block;
            }
          }
        }
      }
      .dilemma{
        width: 100%;
        box-sizing: border-box;
        padding-top: 30rem/@size;
        background-color: #FFFFFF;
        position: relative;
        h2{
          color: #333;
          font-size: 23rem/@size;
          text-align: center;
          font-weight: normal;
        }
        .content{
          width: 90%;
          margin: 60rem/@size auto;
          text-align: center;
          display: block;
          .box{
            width: 90%;
            display: block;
            margin: 10rem/@size auto;
            img{
              width: 100%;
            }
            p{
              margin-top: 30rem/@size;
              font-size: 20rem/@size;
              color: #808080;
              padding: 0 20rem/@size;
            }
          }
        }
      }
      .meaning{
        width: 100%;
        box-sizing: border-box;
        padding-top: 30rem/@size;
        background-color: #FFFFFF;
        position: relative;
        border-top: 1px solid #E1E1E1;
        h2{
          color: #333;
          font-size: 23rem/@size;
          text-align: center;
          font-weight: normal;
        }
        .content{
          width: 90%;
          margin: 60px auto;
          display: block;
          .box{
            width: 100%;
            img{
              width: 100%;
              display: block;
            }
            p{
              font-size: 20rem/@size;
              color: #808080;
              margin: 10rem/@size 0;
            }
          }
          .box:nth-of-type(2){
            background-color: #F7F7F7;
            font-size: 18rem/@size;
            display: flex;
            display: -webkit-flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
      .chance{
        .content{
          p{
            color: #333;
            font-size: 18rem/@size;
            margin-top: 60rem/@size;
            line-height: 30rem/@size;
          }
        }
      }
      .plan{
        width: 90%;
        padding-top: 30rem/@size;
        border-bottom: 1px solid #E1E1E1;
        h2{
          color: #333;
          font-size: 23rem/@size;
          text-align: center;
          font-weight: normal;
        }
        img{
          width: 100%;
          display: block;
          margin: 60rem/@size auto;
        }
      }
      .news{
        padding: 30rem/@size 10rem/@size;
        h2{
          color: #333;
          font-size: 23rem/@size;
          text-align: center;
          font-weight: normal;
        }
        .newsBox{
          padding-top: 30rem/@size;
          overflow: hidden;
          display: flex;
          display: -webkit-flex;
          justify-content: space-between;
          .box{
            width: 22%;
            max-width: 381rem/@size;
            img{
              width: 100%;
            }
            p{
              margin-top: 30rem/@size;
              font-size: 20rem/@size;
              color: #333;
              padding: 0 20rem/@size;
              text-align: center;
            }
          }
          .box:first-of-type{
            margin-left: 0;
          }
        }
      }
    }
  }
</style>
