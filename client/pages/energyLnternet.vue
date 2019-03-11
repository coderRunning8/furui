<template>
  <div class="plan">
    <div class="project">
      <div class="content">
        <h2>什么是能源互联网改造？</h2>
        <p>能源互联网改造是指综合运用先进的电力电子技术、 信息技术和智能管理技术，将大量由分布式能量采集装置，分布式能量储存装置和各种类型负载构成的新型电力网络、石油网络、天然气网络等能源节点互联起来，以实现能量双向流动的能量对等交换与共享网络。</p>
      </div>
    </div>
    <div class="project">
      <div class="content">
        <h2>改造目的</h2>
        <p>通过“互联网+能源”的模式，充分融合能源和信息技术，在能源生产、传输、存储、利用、交易全链条中充分融入智慧化元素，实现能源系统的绿色低碳、安全高效发展。</p>
      </div>
    </div>
    <div class="project">
      <div class="content">
        <h2>改造方案</h2>
        <p class="subtitle">以金山工业园改造方案为参考</p>
        <p>通过“互联网+能源”的模式，在能源生产、传输、存储、利用、交易全链条中充分融入智慧化元素，实现能源系统的可视化操作、安全高效发展。</p>
      </div>
    </div>
    <div class="target">
      <div class="content">
        <h2>当前园区发展面临的主要挑战</h2>
        <img v-lazy="img.eneL_01"/>
      </div>
    </div>
    <div class="target">
      <div class="content">
        <h2>项目背景</h2>
        <p>以金山工业园绿色发展规划方案为参考</p>
        <img v-lazy="img.green_11"/>
      </div>
    </div>
    <div class="target">
      <div class="content">
        <h2>当前园区发展面临的主要挑战</h2>
        <p></p>
        <img v-lazy="img.green_01"/>
      </div>
    </div>
    <div class="target">
      <div class="content">
        <h2>运营主体</h2>
        <p></p>
        <img v-lazy="img.green_03"/>
      </div>
    </div>
    <div class="content">
      <div class="caption">智慧能源改造方案</div>
      <div class="system" v-for="(item,ind) in systemList" :key="ind">
        <h2>{{item.title}}</h2>
        <h3>{{item.describe}}</h3>
        <img v-lazy="item.imgUrl" v-if="ind == 0" style="width: 903px;"/>
        <img v-lazy="item.imgUrl" v-else/>
      </div>
    </div>
    <div class="target" style="border-top: 1px solid #D2D2D2;">
      <div class="content">
        <h2>智慧能源内涵</h2>
        <img v-lazy="img.eneL_02"/>
      </div>
    </div>
    <div class="project">
      <div class="content">
        <h2>运营方式</h2>
        <img v-lazy="img.eneL_03"/>
      </div>
    </div>
    <div class="project">
      <div class="content">
        <h2>运营目标</h2>
        <p>以数据整合、协同互动、服务高效、智能分析为目标，以先进的理念和信息化技术采集、整合、分析各类环境信息，建立一套覆盖全面、技术先进的智慧环保管理平台，为园区、企业、社会公众提供智能化、可视化的环保信息管理应用。</p>
      </div>
    </div>
    <div class="project">
      <div class="content">
        <h2>建设内容</h2>
        <img v-lazy="img.eneL_04"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'low-carbon',
  head: {
    title: '能源互联网解决方案',
  },
  data() {
    return {
      img: {
        eneL_01: require('../assets/images/eneL_01.png'),
        eneL_02: require('../assets/images/eneL_02.png'),
        eneL_03: require('../assets/images/eneL_03.png'),
        eneL_04: require('../assets/images/eneL_04.png'),
        green_03: require('../assets/images/green_03.jpg'),
        green_01: require('../assets/images/green_01.jpg'),
        green_11: require('../assets/images/green_11.jpg'),
      },
      systemList: [
        { title: '资金来源', describe: '国内绿债、国际绿债、绿色基金', imgUrl: require('../assets/images/green_12.jpg') },
        { title: '资金用途', describe: '①现有项目改造：主要针对园区已建项目的绿色改造，包括新能源开发、节能改造、绿色交通等。', imgUrl: require('../assets/images/green_05.jpg') },
        { title: '资金用途', describe: '②新增项目：围绕建设绿色生产示范中心为主，对园区在建和待建的涉及绿色产业的项目进行投资，包括生产环境改善、生产过程绿色无污染、绿色环保产品的投建。并作为绿色金融的主力投资方向。', imgUrl: require('../assets/images/green_06.jpg') },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
  @phone:~'only screen and (max-width:750px)';
  .plan{
    .target{
      padding: 60px 0;
      border-bottom: 1px solid #efefef;
      @media @phone{
        padding:20px 0;
      }
      .content{
        max-width:1200px;
        padding:0 15px;
        box-sizing: border-box;
        margin: 0 auto;
        h2{
          color: #333;
          font-size: 46px;
          text-align: center;
          font-weight: normal;
        }
        p{
          font-size: 32px;
          color: #808080;
          text-align: center;
          margin: 40px 0;
        }
        p.left{
          color: #333;
          text-align: left;
          font-size: 18px;
        }
        img{
          width: 100%;
        }
        @media @phone{
          width:100%;
          h2{
            font-size: 23px;
          }
          p{
            font-size: 16px;
            margin:15px 0;
          }
          p.left{
            font-size: 14px;
          }
          img{
            width:100%;
            display: block;
            margin:0 auto;
          }
        }
      }
      .targetBox{
        width: 800px;
        margin: 0 auto;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        .box{
          width: 300px;
          margin-top: 60px;
          p{
            color: #333;
            font-size: 18px;
            text-align: left;
            margin: 10px 0;
          }
        }
        @media @phone{
          width:100%;
          display: block;
          .box{
            width:auto;
            margin-top: 20px;
            p{
              font-size: 14px;
            }
          }
        }
      }
    }
    .project{
      padding: 60px 0;
      border-bottom: 1px solid #efefef;
      .content{
        max-width:1200px;
        padding:0 15px;
        box-sizing: border-box;
        margin: 0 auto;
        h2{
          color: #333;
          font-size: 46px;
          text-align: center;
          font-weight: normal;
        }
        p {
          font-size: 18px;
          color: #333;
          text-align: left;
          margin: 40px 0;
          text-indent: 1.5em;
        }
        img{
          width: 100%;
        }
        .subtitle{
          font-size: 30px;
          color:#999;
          font-weight: bold;
          text-indent: 0;
          text-align: center;
        }
      }
      @media @phone{
        padding:20px 0;
        .content{
          h2{
            font-size: 23px;
          }
          p{
            font-size: 14px;
            margin:10px 0;
          }
          img{
            display: block;
            width:90%;
            margin:0 auto;
          }
          .subtitle{
            font-size: 18px;
          }
        }
      }
    }
    .content{
      max-width:1200px;
      padding:0 15px;
      box-sizing: border-box;
      margin: 0 auto;
      .caption{
        color: #333;
        font-size: 46px;
        text-align: center;
        font-weight: normal;
        padding-top: 60px;
      }
      .system{
        padding: 60px 0;
        h2{
          font-size: 32px;
          padding: 10px 0;
          color: #333;
          text-align: left;
          position: relative;
        }
        h2::before{
          content: "";
          width: 96px;
          height: 2px;
          background-color: #333;
          position: absolute;
          bottom: 0;left: 0;
        }
        h3{
          color: #333;
          font-size: 26px;
          font-weight: normal;
          margin-top: 40px;
        }
        img{
          width: 100%;
          display: block;
          margin: 40px auto;
        }
        p{
          width: 720px;
          margin: 0 auto;
          text-align: center;
          color: #7F7F7F;
          font-size: 16px;
        }
      }
      @media @phone{
        padding:20px 0;
        .caption{
          font-size: 23px;
          padding-top: 20px;
        }
        .system{
          padding:20px 15px;
          h2{
            font-size: 24px;
          }
          h3{
            font-size: 16px;
            margin-top: 10px;
          }
          img{
            width: 90% !important;
            margin: 10px auto;
          }
          p{
            width:100%;
            font-size: 14px;
            text-indent:1.5em;
          }
        }
      }
    }
  }

</style>
