<template>
  <div class="plan">
    <div class="list" v-for="(item,ind) in list" :key="ind">
      <div class="content">
        <h2 v-if="item.title != ''">{{item.title}}</h2>
        <h3 v-if="item.describe != ''">{{item.describe}}</h3>
        <h4 v-if="item.content != ''">{{item.content}}</h4>
        <img v-if="item.imgUrl != ''" v-lazy="item.imgUrl"/>
        <p v-for="(it,index) in item.notes" :key="index">{{it}}</p>
      </div>
    </div>
    <div class="list">
      <div class="content">
        <h2>妈咪爱生态系统成员</h2>
        <div class="box">
          <div class="imgBox">
            <img v-lazy="img.air_05"/>
            <h2>1、空气兔智能空气检测仪</h2>
            <p>室内空气质量智能可视化（甲醛、PM2.5、温度、湿度）空气兔会根据室内空气质量情况为您自动开启/关闭空气治理设备。</p>
          </div>
          <div class="imgBox">
            <img v-lazy="img.air_08"/>
            <h2>2、负氧离子墙棉</h2>
            <p>每立方厘米产生负氧离子60000个。具有独特的防雾杀菌作用，降低空气中霉菌细菌数量。具有超强的耐老化性，漆膜完好，自洁性强，免去经常翻新的麻烦。具有防水、隔热、释放生物波的作用。</p>
          </div>
          <div class="imgBox">
            <img v-lazy="img.air_07"/>
            <h2>3、空气净化器</h2>
            <p>当空气兔检测到室内空气污染后，会通过物联网系统智能联动空气净化器，悄然打造一片洁净空气，呵护家人健康呼吸！</p>
          </div>
        </div>
        <div class="box">
          <div class="imgBox">
            <img v-lazy="img.air_09"/>
            <h2>4、取暖器</h2>
            <p>当空气兔检测到室内温度比较低的时候，会通过物联网系统智能联动取暖器，在不知不觉中为爱加温！</p>
          </div>
          <div class="imgBox">
            <img v-lazy="img.air_10"/>
            <h2>5、移动空调</h2>
            <p>告别空间限制，每个角落，感受海滩般的自然风。</p>
          </div>
          <div class="imgBox">
            <img v-lazy="img.air_11"/>
            <h2>6、灭蚊灯</h2>
            <p>母婴级灭蚊灯，物理健康灭蚊，告别蚊子烦忧。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="content">
        <h2>妈咪爱应用场景</h2>
        <div class="box">
          <div class="imgBox">
            <img v-lazy="img.air_13"/>
            <h2>场景一</h2>
            <p>室内空气质量降低到儿童健康的敏感值，空气兔即刻为主人自动开启空气净化仪改善空气质量，防止您的孩子受到危害！</p>
          </div>
          <div class="imgBox">
            <img v-lazy="img.air_12"/>
            <h2>场景二</h2>
            <p>宝宝安稳睡去，房内空气达到标准值，空气兔将为小主人自动关闭空气设备，要健康、也要环保！</p>
          </div>
          <div class="imgBox">
            <img v-lazy="img.air_14"/>
            <h2>场景三</h2>
            <p>阴雨绵绵家中潮湿孩子起湿疹，空气兔为主人自动开启除湿机，创造温暖舒适的室内环境。</p>
          </div>
        </div>
        <div class="box boxTwo">
          <div class="imgBox">
            <img v-lazy="img.air_16"/>
            <h2>场景四</h2>
            <p>孩子体质弱，室内忽冷忽热容易感冒。总开空调真麻烦！</p>
          </div>
          <div class="imgBox">
            <img v-lazy="img.air_15"/>
            <h2>场景五</h2>
            <p>父母留公司加班，空气兔根据儿童适合的空气参数，自动为小主人启动设备智能调节，请放心地让孩子自己在家做作业吧！</p>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="content">
        <h2>妈咪爱科学育儿共享平台</h2>
        <h4 class="center">妈咪爱不仅能够智能解决孩子健康成长所面对的空气问题，还为万千父母提供多元化的交流空间</h4>
        <div class="shareList">
          <span>定製健康食谱</span>
          <span>绿色商城购物</span>
          <span>身体健康监测</span>
          <span>门禁安防系统</span>
          <span>儿童成长跟踪</span>
          <span>家庭能源控制系统</span>
          <span>智能费用缴纳</span>
          <span>运动数据监测分析</span>
        </div>
        <img v-lazy="img.air_06"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'low-carbon',
  head: {
    title: '妈咪爱室内空气解决方案',
  },
  data() {
    return {
      img: {
        air_05: require('../assets/images/air_05.jpg'),
        air_06: require('../assets/images/air_06.jpg'),
        air_07: require('../assets/images/air_07.jpg'),
        air_08: require('../assets/images/air_08.jpg'),
        air_09: require('../assets/images/air_09.jpg'),
        air_10: require('../assets/images/air_10.jpg'),
        air_11: require('../assets/images/air_11.jpg'),
        air_12: require('../assets/images/air_12.jpg'),
        air_13: require('../assets/images/air_13.jpg'),
        air_14: require('../assets/images/air_14.jpg'),
        air_15: require('../assets/images/air_15.jpg'),
        air_16: require('../assets/images/air_16.jpg'),
      },
      list: [
        { title: '什么是妈咪爱？', describe: '', content: '妈咪爱是福瑞至控股大健康生态的室内空气管控系统，旨在通过科技的力量为孩子健康成长打造“无霾、无醛、低菌、优美”的室内安全环境，解除妈妈的后顾之忧，让每一位妈妈在轻松愉快中养育孩子！', imgUrl: require('../assets/images/air_01.jpg'), notes: [] },
        { title: '室内空气污染来源', describe: '', content: '', imgUrl: require('../assets/images/air_02.jpg'), notes: [] },
        { title: '孩子健康面临的问题', describe: '', content: '', imgUrl: require('../assets/images/air_03.jpg'), notes: [] },
        { title: '妈咪爱室内空气管控系统', describe: '', content: '', imgUrl: require('../assets/images/air_04.jpg'), notes: [] },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
  .plan{
    .list{
      padding: 60px 0;
      border-bottom: 1px solid #E1E1E1;
      .content{
        width: 1150px;
        margin: 0 auto;
        h2{
          font-size: 50px;
          padding: 10px 0;
          color: #333;
          font-weight: normal;
          text-align: center;
          position: relative;
        }
        h3{
          color: #808080;
          font-size: 26px;
          font-weight: normal;
          text-align: center;
          margin-top: 40px;
        }
        h4{
          color: #333;
          font-size: 18px;
          font-weight: normal;
          text-align: left;
          margin-top: 40px;
          text-indent: 28px;
        }
        .center{
          text-align: center;
        }
        img{
          width: 100%;
          display: block;
          margin: 40px auto;
        }
        p{
          text-align: left;
          color: #333;
          font-size: 18px;
        }
        .shareList{
          span{
            display: inline-block;
            width: 284px;
            text-align: left;
            font-size: 26px;
            color: #808080;
            padding-top: 30px;
            margin-top: 30px;
            position: relative;
          }
          span:before{
            position: absolute;
            content: '';
            width: 40px;
            height: 2px;
            background-color: #808080;
            left: 0;top: 0;
          }
        }
        .box{
          display: flex;
          display: -webkit-flex;
          display: -moz-flex;
          justify-content: space-between;
          .imgBox{
            width: 335px;
            height: 6rem;
            margin-top: 100px;
            background-color: #F7F7F7;
            img{
              width: 100%;
              margin: 0;
            }
            h2{
              font-size: 20px;
              padding: 0 20px;
              font-weight: bolder;
              margin: 20px 0;
              text-align: left;
            }
            p{
              font-size: 16px;
              color: #808080;
              line-height: 30px;
              padding: 0 20px;
              text-align: left;
            }
          }
        }
        .boxTwo{
          justify-content: center;
          .imgBox{
            margin: 100px 35px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    @size:37.5;
    .plan{
      .list{
        padding: 60rem/@size 0;
        border-bottom: 1px solid #E1E1E1;
        .content{
          width: 90%;
          margin: 0 auto;
          h2{
            font-size: 23rem/@size;
            padding: 10rem/@size 0;
            color: #333;
            font-weight: normal;
            text-align: center;
            position: relative;
          }
          h3{
            color: #808080;
            font-size: 18rem/@size;
            font-weight: normal;
            text-align: center;
            margin-top: 40rem/@size;
          }
          h4{
            color: #333;
            font-size: 16rem/@size;
            font-weight: normal;
            text-align: left;
            margin-top: 40rem/@size;
            text-indent: 0;
          }
          .center{
            text-align: center;
          }
          img{
            width: 100%;
            display: block;
            margin: 40rem/@size auto;
          }
          p{
            text-align: left;
            color: #333;
            font-size: 18rem/@size;
          }
          .shareList{
            span{
              display: inline-block;
              width: 48%;
              box-sizing: border-box;
              text-align: left;
              font-size: 18rem/@size;
              color: #808080;
              padding-top: 30rem/@size;
              margin-top: 30rem/@size;
              position: relative;
            }
            span:before{
              position: absolute;
              content: '';
              width: 40rem/@size;
              height: 2rem/@size;
              background-color: #808080;
              left: 0;top: 0;
            }
            span:nth-of-type(2n){
              margin-left: 1%;
            }
          }
          .box{
            display: block;
            .imgBox{
              width: 100%;
              margin: 10rem/@size auto;
              height: auto;
              background-color: #F7F7F7;
              padding-bottom: 30rem/@size;
              img{
                width: 100%;
                margin: 0;
              }
              h2{
                font-size: 20rem/@size;
                padding: 0 20rem/@size;
                font-weight: bolder;
                margin: 20rem/@size 0;
                text-align: left;
              }
              p{
                font-size: 16rem/@size;
                color: #808080;
                line-height: 30rem/@size;
                padding: 0 20rem/@size;
                text-align: left;
              }
            }
          }
        }
      }
    }
  }
</style>
