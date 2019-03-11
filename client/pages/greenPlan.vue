<template>
  <div class="plan">
    <div class="target">
      <div class="content">
        <h2>项目背景</h2>
        <p>以金山工业园绿色发展规划方案为参考</p>
        <img src="../assets/images/green_11.jpg"/>
      </div>
    </div>
    <div class="target">
      <div class="content">
        <h2>项目概况</h2>
        <div class="targetBox">
          <div class="box">
            <p>项目名称：绿色金山工业园</p>
            <p>建设周期：3个5年规划</p>
            <p>创造税收：100亿人民币</p>
            <p>工业增加值：10%</p>
          </div>
          <div class="box">
            <p>项目总投资：100亿-300亿人民币</p>
            <p>达规后年产值：550亿人民币</p>
            <p>实现就业岗位：10万个工作岗位</p>
          </div>
        </div>
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
        <h2>总体框架与目标</h2>
        <p></p>
        <img v-lazy="img.green_02">
      </div>
    </div>
    <div class="target">
      <div class="content">
        <h2>运营主体</h2>
        <p></p>
        <img v-lazy="img.green_03"/>
      </div>
    </div>
    <div class="project">
      <div class="content">
        <h2>项目目标</h2>
        <p>通过3-5年的努力，将金山工业园打造成为绿色产业研发基地、绿色制造企业和创新创业企业的聚集地，成为推动区域自主创新的重要平台，发展成为中国绿色工业园的知名品牌。</p>
        <p>经过3-5年的发展与探索，平台将在绿色工业园区规划建设和运营管理领域积累丰富的经验，形成一支高素质的经营管理队伍，积极推动绿色创新资源与区域经济的有机互动，构建起以创业孵化器、工业园、产业新城为载体的绿色发展模式，成为中国绿色发展体系中的一支生力军。</p>
        <p>以投资公司为基础，打造金山绿色发展品牌，形成标准化、模式化绿色园区建设方案，借鉴清华科技园“启迪”模式，在其他地区进行推广，形成绿色金山的外溢效应，开发其他园区建设业务。</p>
      </div>
    </div>
    <div class="content">
      <div class="caption">执行方案</div>
      <div class="system" v-for="(item,ind) in systemList" :key="ind">
        <h2>{{item.title}}</h2>
        <h3>{{item.describe}}</h3>
        <img v-lazy="item.imgUrl" v-if="ind == 0"/>
        <img v-lazy="item.imgUrl" v-else/>
      </div>
    </div>
    <div class="target" style="border-top: 1px solid #D2D2D2;">
      <div class="content">
        <h2>改造框架</h2>
        <p></p>
        <img v-lazy="img.green_08"/>
      </div>
    </div>
    <div class="project">
      <div class="content">
        <h2>改造目标</h2>
        <p>以数据整合、协同互动、服务高效、智能分析为目标，以先进的理念和信息化技术采集、整合、分析各类环境信息，建立一套覆盖全面、技术先进的智慧环保管理平台，为园区、企业、社会公众提供智能化、可视化的环保信息管理应用。</p>
      </div>
    </div>
    <div class="target">
      <div class="content">
        <h2>建设内容</h2>
        <p></p>
        <img v-lazy="img.green_09"/>
      </div>
    </div>
    <div class="target">
      <div class="content">
        <h2>金山智慧城市构建</h2>
        <p class="left">打造一个统一平台，设立城市数据中心，构建三张基础网络，通过分层建设，达到平台能力及应用的可成长、可扩充，创造面向未来的智慧城市体系。</p>
        <img v-lazy="img.green_10"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'low-carbon',
  head: {
    title: '绿色工业园解决方案',
  },
  data() {
    return {
      img: {
        green_01: require('../assets/images/green_01.jpg'),
        green_02: require('../assets/images/green_02.jpg'),
        green_03: require('../assets/images/green_03.jpg'),
        green_08: require('../assets/images/green_08.jpg'),
        green_09: require('../assets/images/green_09.jpg'),
        green_10: require('../assets/images/green_10.jpg'),
        green_11: require('../assets/images/green_11.jpg'),
      },
      systemList: [
        { title: '资金来源', describe: '国内绿债、国际绿债、绿色基金', imgUrl: require('../assets/images/green_12.jpg') },
        { title: '改造方向', describe: '', imgUrl: require('../assets/images/green_04.jpg') },
        { title: '资金用途', describe: '①现有项目改造：主要针对园区已建项目的绿色改造，包括新能源开发、节能改造、绿色交通等。', imgUrl: require('../assets/images/green_05.jpg') },
        { title: '资金用途', describe: '②新增项目：围绕建设绿色生产示范中心为主，对园区在建和待建的涉及绿色产业的项目进行投资，包括生产环境改善、生产过程绿色无污染、绿色环保产品的投建。并作为绿色金融的主力投资方向。', imgUrl: require('../assets/images/green_06.jpg') },
        { title: '能源改造', describe: '', imgUrl: require('../assets/images/green_07.jpg') },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
  .plan{
    .target{
      padding: 60px 0;
      border-bottom: 1px solid #D2D2D2;
      .content{
        width: 1110px;
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
      }
    }
    .project{
      padding: 60px 0;
      border-bottom: 1px solid #D2D2D2;
      .content{
        width: 1110px;
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
        }
      }
    }
    .content{
      width: 1110px;
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
          width: 90%;
          margin: 0 auto;
          text-align: center;
          color: #7F7F7F;
          font-size: 16px;
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    @size:37.5;
    .plan{
      .target{
        padding: 30rem/@size 0;
        border-bottom: 1rem/@size solid #D2D2D2;
        .content{
          width: 90%;
          margin: 0 auto;
          h2{
            color: #333;
            font-size: 23rem/@size;
            text-align: center;
            font-weight: normal;
          }
          p{
            font-size: 15rem/@size;
            color: #808080;
            text-align: center;
            margin: 20rem/@size 0;
          }
          p.left{
            color: #333;
            text-align: left;
            font-size: 18rem/@size;
          }
          img{
            width: 100%;
          }
        }
        .targetBox{
          width: 100%;
          margin: 0 auto;
          display: flex;
          display: -webkit-flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .box{
            width: 100%;
            margin-top: 30rem/@size;
            p{
              color: #333;
              font-size: 15rem/@size;
              text-align: left;
              margin: 0 0;
            }
          }
        }
      }
      .project{
        padding: 30rem/@size 0;
        border-bottom: 1px solid #D2D2D2;
        .content{
          width: 90%;
          margin: 0 auto;
          h2{
            color: #333;
            font-size: 23rem/@size;
            text-align: center;
            font-weight: normal;
          }
          p {
            font-size: 15rem/@size;
            color: #333;
            text-align: left;
            margin: 40rem/@size 0;
          }
        }
      }
      .content{
        width: 90%;
        margin: 0 auto;
        .caption{
          color: #333;
          font-size: 23rem/@size;
          text-align: center;
          font-weight: normal;
          padding-top: 30rem/@size;
        }
        .system{
          padding: 30rem/@size 0;
          h2{
            font-size: 20rem/@size;
            padding: 10rem/@size 0;
            color: #333;
            text-align: left;
            position: relative;
          }
          h2::before{
            content: "";
            width: 96rem/@size;
            height: 2rem/@size;
            background-color: #333;
            position: absolute;
            bottom: 0;left: 0;
          }
          h3{
            color: #333;
            font-size: 15rem/@size;
            font-weight: normal;
            margin-top: 40rem/@size;
          }
          img{
            width: 100%;
            display: block;
            margin: 40rem/@size auto;
          }
          p{
            margin: 0 auto;
            text-align: center;
            color: #7F7F7F;
            font-size: 16px;
          }
        }
      }
    }
  }
</style>
