<template>
  <div class="industrialPark">
    <div class="commonality comOne">
      <p class="headline">磴口农业产业园</p>
      <div class="content01">
        <p class="lists">内蒙古巴彦淖尔市磴口县，地处河套平原腹地，属于一带一路经济带。总面积4167 平方公里，其中已有耕地 65.3 万亩，可用于农业开发用地 200 多万亩；大小湖泊46 处，共有水域面积 3.61 万亩。区域交通便利，紧邻G7新京高速，距机场仅35公里。</p>
        <p class="lists">项目总体规划面积 30 万亩，一期综合示范园区占地 1.7 万亩，总投资 95 亿元，以互联网 + 农业为依托，建设现代化绿色有机农业、特色旅游和智能化冷链仓储三大示范基地。</p>
        <img v-lazy="img.ck_01"/>
      </div>
      <p class="headline">项目目标</p>
      <div class="content01">
        <p class="lists">以绿色有机农业标准化为引导，互联网 + 农业为服务体系，建成有机生态农产品供应基地为核心，打造具有国际领先水平有持续盈利能力的现代化农业产业园。</p>
      </div>
    </div>
    <div class="commonality">
      <p class="headline">项目规划</p>
      <div class="content02">
        <div class="flexBox">
          <div class="list" v-for="(item,ind) of contentList" :key="ind">
            <img v-lazy='item.img' />
            <p class="acreage"><span class="num">{{item.acreage}}</span>亩</p>
            <p class="name">{{item.name}}</p>
            <div class="info">
              <ul>
                <li v-for="(val,i) of item.info" :key="i">{{val}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="commonality">
      <p class="headline">商业模式定位</p>
      <div class="content01">
        <p class="lists">联合生态企业共同打造种植标准化管理壁垒，构建以全产业链交易信息共享平台为核心的绿色有机生活磴口云。</p>
        <img v-lazy="img.ck_03"/>
      </div>
    </div>
    <div class="commonality">
      <p class="headline">运营发展模式</p>
      <p class="subhead">1、共享经济模式三部曲</p>
      <div class="content01">
        <p class="lists">联合生态企业共同打造种植标准化管理壁垒，构建以全产业链交易信息共享平台为核心的绿色有机生活磴口云。</p>
        <img v-lazy="img.ck_04"/>
      </div>
      <p class="subhead">2、磴口云百万移民计划</p>
      <div class="content01">
        <p class="lists">在中国的一二线城市发展磴口云网上移民计划，在云端购买绿色有机产品，比菜市场便宜，同时还可获取资产增值收益；打造中国首个网上私人农庄，让百万城市人口在网上拥有专属的百亩庄园，足不出户即可畅享绿色健康新生活方式。</p>
      </div>
      <p class="subhead">3、联合参与实施机构</p>
      <div class="content01">
        <img v-lazy="img.ck_05"/>
      </div>
      <p class="subhead">4、实施路径</p>
      <div class="content01">
        <img v-lazy="img.ck_06"/>
      </div>
    </div>
    <div class="commonality">
      <p class="headline">项目阶段性成果</p>
      <div class="content01">
        <p class="lists">1、项目建设：已建商业地产 24500 平米；64 亩商服用地，已取得土地证和用地规划建设许可；已完成投资 1.5 亿</p>
        <p class="lists">2、政策性文件支持：获得地方发改委、环保局批复文件，政府承诺函</p>
        <p class="lists">3、政府土地支持及资金支持：1.7 万亩流转土地及优先配置三亿元贷款</p>
        <p class="lists">4、项目规划：与荷兰瓦赫宁根大学、以色列艾森贝克与以色列魏兹中心等知名学府与农业设计公司达成园区规划合作意向，具备国际化前瞻性视野</p>
        <img v-lazy="img.ck_07"/>
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
      title: '磴口农业产业园',
    };
  },
  data() {
    return {
      img: {
        ck_01: require('../assets/images/ck_01.png'),
        ck_03: require('../assets/images/ck_03.png'),
        ck_04: require('../assets/images/ck_04.png'),
        ck_05: require('../assets/images/ck_05.png'),
        ck_06: require('../assets/images/ck_06.png'),
        ck_07: require('../assets/images/ck_07.png'),
      },
      contentList: [{
        img: require('../assets/images/ck_02_01.png'),
        acreage: '300',
        name: '绿色有机农产品现货交易（期）市场',
        info: [ '线下交易中心', '磴口云平台', '配套冷链基地' ],
      }, {
        img: require('../assets/images/ck_02_02.png'),
        acreage: '1200',
        name: '现代化绿色有机农产品示范基地',
        info: [ '荷兰瓦赫宁根现代化生态农业标准化种植示范管理基地', '现代化生态有机农业培育种植示范基地' ],
      }, {
        img: require('../assets/images/ck_02_03.png'),
        acreage: '1500',
        name: '保鲜冷链仓储物联网产业示范基地',
        info: [ '智能冷链保鲜仓储基地', '冷链物流仓储/配送服务中心', '农产品加工分选车' ],
      }, {
        img: require('../assets/images/ck_02_04.png'),
        acreage: '3500',
        name: '会展观光旅游疗养园区',
        info: [ '高科技现代农业体验和有机生态疗养', '航空航天教育及旅游', '乌兰布和沙漠探险', '河套农耕文化发掘' ],
      }, {
        img: require('../assets/images/ck_02_05.png'),
        acreage: '12000',
        name: '能源互联网产业示范基地',
        info: [ '分布式光伏发电基地', '微藻转化生物能源基地', '风能发电基地' ],
      }],
    };
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
.industrialPark{
  .commonality{
    margin: 40px auto 0;
    overflow: hidden;
    border-bottom: 1px solid #d2d2d2;
    .headline{
      font-size: 50px;
      color: #333;
      text-align: center;
    }
    .subhead{
      font-size: 35px;
      color: #808080;
      text-align: center;
      margin: 30px 0;
    }
    .content01{
      width: 60%;
      text-align: left;
      font-size: 20px;
      color: #333;
      margin: 60px auto;
      .lists{
        margin-bottom: 20px;
      }
      img{
        width: 100%;
      }
    }
    .content02{
      width: 80%;
      text-align: left;
      font-size: 20px;
      color: #333;
      margin: 60px auto;
      .flexBox{
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        .list{
          height: 500px;
          width: 260px;
          text-align: center;
          img{
            width: 100%;
            height: 40%;
          }
          .acreage{
            font-size: 18px;
            color: #936634;
            .num{
              font-size: 32px;
              margin-right: 10px;
            }
          }
          .name{
            font-size: 18px;
            color: #333;
            font-weight: bold;
          }
          .info{
            font-size: 16px;
            color: #808080;
            ul{
              margin-top: 10px;
              li{
                list-style: none;
              }
            }
          }
        }
      }
    }
  }
  .comOne{
    margin-top: 150px;
  }
}
@media screen and (max-width: 750px) {
  @size:37.5;
  .industrialPark{
    .commonality{
      margin: 40rem/@size auto 0;
      overflow: hidden;
      border-bottom: 1px solid #d2d2d2;
      .headline{
        font-size: 23rem/@size;
        color: #333;
        text-align: center;
      }
      .subhead{
        font-size: 18rem/@size;
        color: #808080;
        text-align: center;
        margin: 15rem/@size 0;
      }
      .content01{
        width: 90%;
        text-align: left;
        font-size: 15rem/@size;
        color: #333;
        margin: 15rem/@size auto;
        .lists{
          margin-bottom: 10rem/@size;
        }
        img{
          width: 100%;
        }
      }
      .content02{
        width: 90%;
        text-align: left;
        font-size: 15rem/@size;
        color: #333;
        margin: 15rem/@size auto;
        .flexBox{
          display: -webkit-flex; /* Safari */
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          .list{
            height: auto;
            width: 100%;
            text-align: left;
            padding: 20rem/@size 0;
            img{
              width: 100%;
              height: auto;
            }
            .acreage{
              font-size: 18rem/@size;
              color: #936634;
              .num{
                font-size: 18rem/@size;
                margin-right: 10rem/@size;
              }
            }
            .name{
              font-size: 18rem/@size;
              color: #333;
              font-weight: bold;
            }
            .info{
              font-size: 16rem/@size;
              color: #808080;
              ul{
                margin-top: 10rem/@size;
                li{
                  list-style: none;
                  float: none;
                  display: inline-block;
                  margin: 0 10rem/@size;
                }
              }
            }
          }
        }
      }
    }
    .comOne{
      margin-top: 80rem/@size;
    }
  }
}
</style>
