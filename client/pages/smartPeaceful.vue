<template>
  <div class="plan">
    <div class="content">
      <div class="realization">
        <h2>智慧永宁</h2>
        <h3>南京市浦口区永宁是江北新区新型城镇化建设重点打造的三个特色小镇之一，将依托山水生态资源、农业大地景观、乡村休闲旅游景区和鲜明的铁路元素，全力打造宜居、宜游、宜业的“铁路小镇”，具有全国影响力的美丽乡村示范区和新型城镇化样板区。</h3>
        <h3>2017年4月26日上午，福瑞至控股董事长唐闻受邀参与南京永宁新型城镇化项目工作推进会议。与当地政府、中建八局相关领导共同商议永宁新城规划，以中建提出的“1+4+4”永宁发展思路，合力将铁路文化主题和四大示范产业结合，打造山水永秀、人文宜居的特色小镇，努力成为新型城镇化标杆，全国首个近零碳示范区。</h3>
        <h3>引入先进智能科技，搭建智慧城市平台，打造智慧政务、智慧交通、智慧旅游，实现智能化管理。</h3>
        <img v-lazy="imgList.plan_14"/>
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
        </div>
        <div class="emphasesBox">
          <div class="box">
            <h3>循环化产业系统</h3>
            <p>实现废弃物的充分利用。</p>
          </div>
          <div class="box">
            <h3>公共设施建设</h3>
            <p>实现废弃物和废水的100%的再生利用。</p>
          </div>
        </div>
        <div class="emphasesBox">
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
        <img v-lazy="imgList.plan_01"/>
      </div>
      <div class="system" v-for="(item,ind) in systemList" :key="ind">
        <h2>{{item.title}}</h2>
        <h3>{{item.describe}}</h3>
        <img v-lazy="item.imgUrl" v-if="ind == 0"/>
        <img v-lazy="item.imgUrl" v-else/>
        <p>{{item.notes}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'low-carbon',
  head: {
    title: '智慧永宁',
  },
  data() {
    return {
      imgList: {
        plan_14: require('../assets/images/plan_14.jpg'),
        plan_01: require('../assets/images/plan_01.jpg'),
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
      width: 1110px;
      margin: 0 auto;
      .realization{
        padding: 60px 0;
        h2{
          color: #333;
          font-size: 46px;
          text-align: center;
          font-weight: normal;
          margin-bottom: 40px;
        }
        h3{
          font-size: 18px;
          color: #333;
          font-weight: normal;
          text-indent: 36px;
          line-height: 40px;
        }
        img{
          margin-top: 40px;
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
          margin-top: 40px;
          .box{
            width: 330px;
            h3{
              padding: 10px 0;
              color: #fff;
              background-color: #0071C1;
              text-align: center;
              border-radius: 50px;
              font-size: 32px;
              font-weight: normal;
              margin-bottom: 10px;
            }
            p{
              padding: 0 10px;
              color: #000;
              font-size: 22px;
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
          font-size: 32px;
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
            font-size: 30rem/@size ;
            text-align: center;
            font-weight: normal;
            margin-bottom: 20rem/@size ;
          }
          h3{
            font-size: 18rem/@size ;
            color: #333;
            font-weight: normal;
            text-indent: 36rem/@size ;
            line-height: 30rem/@size ;
          }
          img{
            margin-top: 40rem/@size ;
            width: 100%;
          }
          .carbonBox{
            display: block;
            margin-top: 30rem/@size ;
            .box{
              width: 90%;
              text-align: left;
              h2{
                font-size: 18rem/@size ;
                padding: 10rem/@size  0;
                color: #333;
                text-align: left;
                position: relative;
              }
              h2::before{
                content: "";
                width: 76rem/@size ;
                height: 2rem/@size ;
                background-color: #333;
                position: absolute;
                bottom: 0;left: 0;
              }
              p{
                color: #7F7F7F;
                font-size: 15rem/@size ;
                margin-top: 30rem/@size ;
              }
            }
          }
        }
        .emphases{
          padding: 30rem/@size  0;
          h2{
            color: #333;
            font-size: 30rem/@size ;
            text-align: center;
            font-weight: normal;
          }
          .emphasesBox{
            display: block;
            margin-top: 40rem/@size ;
            .box{
              width: 90%;
              margin: 10rem/@size  auto;
              h3{
                padding: 10rem/@size  0;
                color: #fff;
                background-color: #0071C1;
                text-align: center;
                border-radius: 50rem/@size ;
                font-size: 18rem/@size ;
                font-weight: normal;
              }
              p{
                padding: 0 10rem/@size ;
                color: #000;
                font-size: 15rem/@size ;
                line-height: 30rem/@size ;
              }
            }
          }
        }
        .target{
          padding: 30rem/@size  0;
          h2{
            color: #333;
            font-size: 30rem/@size ;
            text-align: center;
            font-weight: normal;
          }
          p{
            font-size: 18rem/@size ;
            color: #808080;
            font-weight: normal;
            text-align: center;
            margin: 40rem/@size  0;
          }
          img{
            width: 100%;
          }
        }
        .system{
          padding: 30rem/@size 0;
          h2{
            font-size: 30rem/@size ;
            font-weight: normal;
            padding: 10rem/@size  0;
            color: #333;
            text-align: left;
            position: relative;
          }
          h2::before{
            content: "";
            width: 76rem/@size ;
            height: 2rem/@size ;
            background-color: #333;
            position: absolute;
            bottom: 0;left: 0;
          }
          h3{
            color: #333;
            font-size: 18rem/@size ;
            font-weight: normal;
            margin-top: 40rem/@size ;
          }
          img{
            width: 100%;
            display: block;
            margin: 40rem/@size  auto;
          }
          p{
            margin: 0 auto;
            text-align: center;
            color: #7F7F7F;
            font-size: 15rem/@size ;
          }
        }
      }
    }
  }
</style>
