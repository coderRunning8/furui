<template>
  <div class="plan">
    <div class="content">
      <div class="realization">
        <h2>怎么实现零碳</h2>
        <h3>首先需要做好顶层设计，通过编制“零碳规划”，对近零碳排放示范区建设工作进行整体规划、全面统筹，并设定分阶段的规划目标，为建设工作提供方向性的引领。</h3>
        <img v-lazy="img.plan_08"/>
        <div class="carbonBox">
          <div class="box">
            <h2>碳普查</h2>
            <p>是指通过温室气体清单编制等方式，对该区域内生产、生活各环节中直接或间接的碳排放总量与碳汇总量进行统计，确定该区域创建“零碳”所处的阶段。</p>
          </div>
          <div class="box">
            <h2>碳减源</h2>
            <p>是指通过使用产业结构调整、提高清洁能源消费占比、推广节能减排技术、淘汰落后产能、降低交通领域能耗、推广绿色建筑等措施，降低各排放源的排放量。</p>
          </div>
          <div class="box">
            <h2>碳增汇</h2>
            <p>是通过植树造林等方法增加森林碳汇，从而提高对碳的吸收能力。</p>
          </div>
          <div class="box">
            <h2>碳交易</h2>
            <p>是对碳排放量进行价格和数量干预的市场调节机制，碳减源以及碳增汇均可以在碳交易机制下得到更加有效的推进，碳交易是以主动的方式来约束与有效控制达到碳平衡时的总量。</p>
          </div>
        </div>
      </div>
      <div class="emphases">
        <h2>规划重点</h2>
        <div class="emphasesBox">
          <div class="box">
            <h3>制定零碳指标</h3>
            <p>提出零碳指标排放体系，测算相关指标3-5年的预期目标。</p>
          </div>
          <div class="box">
            <h3>清洁能源系统</h3>
            <p>实现清洁能源使用率达到90%以上,可再生能源使用率在60%以上。</p>
          </div>
          <div class="box">
            <h3>循环化产业系统</h3>
            <p>实现废弃物的充分利用。</p>
          </div>
          <div class="box">
            <h3>公共设施建设</h3>
            <p>实现废弃物和废水的100%的再生利用。</p>
          </div>
          <div class="box">
            <h3>低碳交通</h3>
            <p>实现公共交通的近零排放,五百米公交站点覆盖率达到90%以上,新能源公交30%以上。</p>
          </div>
          <div class="box">
            <h3>碳中和</h3>
            <p>设计规划生态重建工程,测算其碳中和量,提出交易途径。</p>
          </div>
        </div>
      </div>
      <div class="target">
        <h2>制定零碳指标</h2>
        <p>提出零碳排放指标体系，测算相关指标3-5年的预期目标</p>
        <img v-lazy="img.plan_01"/>
      </div>
      <div class="system" v-for="(item,ind) in systemList" :key="ind">
        <h2>{{item.title}}</h2>
        <h3>{{item.describe}}</h3>
        <img v-lazy="item.imgUrl" v-if="ind == 0" style="width: 9.03rem;"/>
        <img v-lazy="item.imgUrl" v-else/>
        <p>{{item.notes}}</p>
      </div>
      <div class="target">
        <h2>评价标准是什么？</h2>
        <p>参考永宁零碳小镇指标评价表</p>
        <img v-lazy="img.plan_07"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'low-carbon',
  head: {
    title: '低碳社区解决方案',
  },
  data() {
    return {
      img: {
        plan_01: require('../assets/images/plan_01.jpg'),
        plan_07: require('../assets/images/plan_07.jpg'),
        plan_08: require('../assets/images/plan_08.jpg'),
      },
      systemList: [
        { title: '清洁能源系统', describe: '实现清洁能源使用率达到90%以上，可再生能源使用率在60%以上', imgUrl: require('../assets/images/plan_02.jpg'), notes: '注：储能等核心设备主要来自于华泰美景与福瑞至合资公司新疆霍尼华泰、国际能源巨头、美国霍尼韦尔、四川能源投资集团有限责任公司、郴垫国际发展股份有限公司' },
        { title: '循环化产业系统', describe: '实现废弃物的充分利用', imgUrl: require('../assets/images/plan_03.jpg'), notes: '注：福瑞至已与中国节能环保集团等国内固废循环处理领域的央企建立了广泛的合作与伙伴关系。' },
        { title: '公共设施建设', describe: '实现废弃物和废水的100%的再生利用', imgUrl: require('../assets/images/plan_04.jpg'), notes: '注:设计规划生活、生产废物处理以及水处理公共设施,尽可能实现废弃物和废水的100%再生利用。' },
        { title: '低碳交通', describe: '加强公交配套,构建园区绿色出行体系,主要包括推行共享新能源车和自行车,合理\n' +
          '规划停车设施及充电设施。如推进纯电动车配套建设及共享示范运营、引入共享自行\n' +
          '车系统、建设绿色能源充电桩项目,同时园区鼓励企业自建充电桩以满足企业内部车\n' +
          '辆需求,园区对公共场所的充电桩进行统一规划,集中建设。', imgUrl: require('../assets/images/plan_05.jpg'), notes: '' },
        { title: '碳中和', describe: '以生活碳币和碳汇交易为手段,基于福瑞至碳资产管理平台', imgUrl: require('../assets/images/plan_06.jpg'), notes: '' },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
  .plan{
    .content{
      width: 60%;
      margin: 0 auto;
      .realization{
        padding: 60px 0;
        h2{
          color: #333;
          font-size: 46px;
          text-align: center;
          font-weight: normal;
        }
        h3{
          font-size: 18px;
          color: #333;
          font-weight: normal;
          margin: 40px 0;
        }
        img{
          width: 100%;
        }
        .carbonBox{
          display: flex;
          display: -webkit-flex;
          justify-content: space-between;
          margin-top: 60px;
          .box{
            width: 200px;
            text-align: left;
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
            p{
              color: #7F7F7F;
              font-size: 16px;
              margin-top: 30px;
            }
          }
        }
      }
      .emphases{
        padding: 60px 0;
        h2{
          color: #333;
          font-size: 46px;
          text-align: center;
          font-weight: normal;
        }
        .emphasesBox{
          display: -webkit-flex;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-top: 40px;
          .box{
            width: 30%;
            h3{
              padding: 10px 0;
              color: #fff;
              background-color: #0071C1;
              text-align: center;
              border-radius: 50px;
              font-size: 0.3200px;
              font-weight: normal;
              margin-bottom: 10px;
            }
            p{
              padding: 0 10px;
              color: #000;
              font-size: 0.2200px;
              line-height: 50px;
            }
          }
        }
      }
      .target{
        padding: 60px 0;
        h2{
          color: #333;
          font-size: 46px;
          text-align: center;
          font-weight: normal;
        }
        p{
          font-size: 0.3200px;
          color: #808080;
          font-weight: normal;
          text-align: center;
          margin: 40px 0;
        }
        img{
          width: 100%;
        }
      }
      .system{
        padding: 60px 0;
        h2{
          font-size: 0.3200px;
          padding: 10px 0;
          color: #333;
          text-align: left;
          position: relative;
        }
        h2::before{
          content: "";
          width: 96px;
          height: 0.0200px;
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
    }
  }
  @media screen and (max-width: 750px) {
    @size:37.5;
    .plan{
      .content{
        width: 90%;
        margin: 0 auto;
        .realization{
          padding: 30rem/@size 0;
          h2{
            color: #333;
            font-size: 23rem/@size;
            text-align: center;
            font-weight: normal;
          }
          h3{
            font-size: 18rem/@size;
            color: #333;
            font-weight: normal;
            margin: 15rem/@size 0;
          }
          img{
            width: 100%;
          }
          .carbonBox{
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            flex-wrap:  wrap;
            margin-top: 30rem/@size;
            .box{
              width: 100%;
              text-align: left;
              h2{
                font-size: 15rem/@size;
                padding: 10rem/@size 0;
                color: #333;
                text-align: left;
                position: relative;
              }
              h2::before{
                content: "";
                width: 70rem/@size;
                height: 1px;
                background-color: #333;
                position: absolute;
                bottom: 0;left: 0;
              }
              p{
                color: #7F7F7F;
                font-size: 15rem/@size;
                margin-top: 30rem/@size;
              }
            }
          }
        }
        .emphases{
          padding: 30rem/@size 0;
          h2{
            color: #333;
            font-size: 23rem/@size;
            text-align: center;
            font-weight: normal;
          }
          .emphasesBox{
            display: -webkit-flex;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-top: 20rem/@size;
            .box{
              width: 45%;
              h3{
                padding: 10rem/@size 0;
                color: #fff;
                background-color: #0071C1;
                text-align: center;
                border-radius: 50rem/@size;
                font-size: 18rem/@size;
                font-weight: normal;
                margin-bottom: 10px;
              }
              p{
                padding: 0 10rem/@size;
                color: #000;
                font-size: 15rem/@size;
                line-height: 50rem/@size;
              }
            }
          }
        }
        .target{
          padding: 30rem/@size 0;
          h2{
            color: #333;
            font-size: 23rem/@size;
            text-align: center;
            font-weight: normal;
          }
          p{
            font-size: 15rem/@size;
            color: #808080;
            font-weight: normal;
            text-align: center;
            margin: 20rem/@size 0;
          }
          img{
            width: 100%;
          }
        }
        .system{
          padding: 30rem/@size 0;
          h2{
            font-size: 30em/@size;
            padding: 10rem/@size 0;
            color: #333;
            text-align: left;
            position: relative;
          }
          h2::before{
            content: "";
            width: 96rem/@size;
            height: 2px;
            background-color: #333;
            position: absolute;
            bottom: 0;left: 0;
          }
          h3{
            color: #333;
            font-size: 15rem/@size;
            font-weight: normal;
            margin-top: 20rem/@size;
          }
          img{
            width: 100%;
            display: block;
            margin: 20rem/@size auto;
          }
          p{
            width: 100%;
            margin: 0 auto;
            text-align: center;
            color: #7F7F7F;
            font-size: 15rem/@size;
          }
        }
      }
    }
  }
</style>
