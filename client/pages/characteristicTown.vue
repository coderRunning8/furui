<template>
  <div class="industrialPark">
    <div class="commonality">
      <p class="headline">项目目标</p>
      <div class="content01">
        <p class="lists">以绿色有机农业标准化为引导，互联网 + 农业为服务体系，建成有机生态农产品供应基地为核心，打造具有国际领先水平有持续盈利能力的现代化农业产业园。</p>
      </div>
    </div>
    <div class="commonality">
      <p class="headline">项目简介</p>
      <h3>以磴口生态农业产业园为参考</h3>
      <div class="content01">
        <p class="lists">项目选址为内蒙古巴彦淖尔市磴口县，地处河套平原腹地，属于一带一路经济带。总面积4167 平方公里，其中已有耕地 65.3 万亩，可用于农业开发用地 200 多万亩；大小湖泊46 处，共有水域面积 3.61 万亩。区域交通便利，紧邻G7新京高速，距机场仅35公里。</p>
        <p class="lists">项目总体规划面积 30 万亩，一期综合示范园区占地 1.7 万亩，总投资 95 亿元，以互联网 + 农业为依托，建设现代化绿色有机农业、特色旅游和智能化冷链仓储三大示范基地。</p>
        <p class="lists">致力于打造成为以中国（磴口）有机生态农产品供应基地为核心，集国际农牧业、高新会展、航天科普教育、休闲观光疗养度假、生态农业旅游、沙漠探险与沙漠乐园为一体的绿色有机生态、可持续、天人合一的区域特色经济产业带。</p>
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
      <p class="headline">磴口中储云平台运营模式</p>
      <div class="content01">
        <img v-lazy="img.town_01"/>
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
      <p class="headline">项目优势</p>
      <h3>1、丰富的自然资源</h3>
      <div class="content03">
        <div class="list">
          <img v-lazy="img.town_04"/>
          <h2>气候</h2>
          <p>温带大陆性季风气候，温差大，气温年较差是 33.4-37.3°C，气温日较差平均为13-14°C，适合作物生长和特色型旅游。</p>
        </div>
        <div class="list">
          <img v-lazy="img.town_05"/>
          <h2>光照</h2>
          <p>温带大陆性季风气候，温差大，气温年较差是 33.4-37.3°C，气温日较差平均为 13-14°C，适合作物生长和特色型旅游。</p>
        </div>
        <div class="list">
          <img v-lazy="img.town_06"/>
          <h2>生态</h2>
          <p>磴口县土壤总体偏弱碱性，总面积4167平方公里，其中有耕地65.3万亩，盐碱地20万亩。乌兰布和沙 在磴口境内426.9万亩，可用于农业开发用地200多万亩。</p>
        </div>
        <div class="list">
          <img v-lazy="img.town_07"/>
          <h2>土壤资源</h2>
          <p>水资源丰富，共有大小湖泊46处，可开采面积3452.11平方公里，水域面积3.61万亩。</p>
        </div>
        <div class="list">
          <img v-lazy="img.town_08"/>
          <h2>水资源</h2>
          <p>具有十余种名贵药材和稀有植物，一百余种珍稀动物，旅游资源丰富。</p>
        </div>
      </div>
      <h3>2、独特的景观风景资源</h3>
      <div class="content04">
        <div class="list">
          <img v-lazy="img.town_02"/>
          <h2>阴山壁画</h2>
        </div>
        <div class="list">
          <img v-lazy="img.town_03"/>
          <h2>窳浑古城遗址</h2>
        </div>
        <div class="list">
          <img v-lazy="img.town_09"/>
          <h2>三盛公水利枢纽工程</h2>
        </div>
        <div class="list">
          <img v-lazy="img.town_10"/>
          <h2>梦幻峡谷</h2>
        </div>
      </div>
      <div class="content04">
        <div class="list">
          <img sv-lazy="img.town_11"/>
          <h2>纳林湖</h2>
        </div>
        <div class="list">
          <img v-lazy="img.town_12"/>
          <h2>哈腾套海保护区</h2>
        </div>
        <div class="list">
          <img v-lazy="img.town_13"/>
          <h2>乌兰布和沙漠</h2>
        </div>
        <div class="list">
          <img v-lazy="img.town_14"/>
          <h2>冬青湖</h2>
        </div>
      </div>
      <div class="content05">
        <div class="list">
          <h2>3、巨大的市场空间</h2>
          <p>中国中产阶级迅速壮大，对生活品质有更高的需求，未来十年，中国有机农业生产面积以及产品生产年均增长20%—30%</p>
        </div>
        <div class="list">
          <h2>4、与国家和地方政府紧密合作</h2>
          <p>获得国家三大部委二十余项相关产业政策的扶持。取得内蒙古磴口县1.7万亩流转土地50年使用权，农发行3亿元贷款。</p>
        </div>
        <div class="list">
          <h2>5、国家授权示范基地</h2>
          <p>中国青少年航天教育科普基地（已纳入九年义务教育）、农产品产地（水、土、气）立体污染综合防控模拟实验示范基地、农业产业化精准抚贫示范基地、现代综合设施农业+能源互联网及其产业化示范基地、中国航天科技育种基地</p>
        </div>
        <div class="list">
          <h2>6、国内外资本及政府政策性支持</h2>
          <p></p>
        </div>
        <div class="list">
          <h2>7、知名高校与顶尖智囊团队鼎力协助</h2>
          <p>中国农科院 清华大学能源互联网创新研究院 中国航天科技集团 中国航天育种研究中心 荷兰瓦赫宁根大学及研究中心 方塘智库等专家 </p>
        </div>
        <div class="list">
          <h2>8、九家领先产业链企业合作构建现代化农业体系</h2>
          <p></p>
        </div>
      </div>
      <h3>9、与五个行业“世界第一”企业联合打造现代化农业标准</h3>
      <div class="content06">
        <div class="list">
          <img v-lazy="img.town_15"/>
          <h2>世界第一</h2>
          <h2>荷兰瑞克斯旺种子公司</h2>
          <p>拥有25种作物的1000多个品种种子,可提供高品质的育种服务与技术。</p>
        </div>
        <div class="list">
          <img v-lazy="img.town_15"/>
          <h2>世界第一</h2>
          <h2>荷兰瓦赫宁根大学及研究中心</h2>
          <p>在种植技术支持与园区规划设计方面世界领先,是欧盟第一个被授予ECTS(欧洲信用转移系统)认证的大学,与中储达成中国民营企业领域唯一合作伙伴关系。
          </p>
        </div>
        <div class="list">
          <img v-lazy="img.town_15"/>
          <h2>世界第一</h2>
          <h2>荷兰升腾设施农业国际股份有限公司</h2>
          <p>提供最先进的果蔬植温室大棚技术保障。</p>
        </div>
        <div class="list">
          <img v-lazy="img.town_15"/>
          <h2>世界第一</h2>
          <h2>天津捷盛东辉保鮮科技有限公司</h2>
          <p>提供技术支持与果疏气调保鲜整体方案,具有国内最强的研发实力,拥有10余年气调项目整体建设经验,已获得国内发明专利60项,打造“缔一保鲜网”。</p>
        </div>
        <div class="list">
          <img v-lazy="img.town_15"/>
          <h2>世界第一</h2>
          <h2>以色列艾森贝克农业设备(北京)有限公司</h2>
          <p>供农业整体解决方案,通过农业全产业链的管控,有效降低成本,提高农产品品质与生产力技能，提高农业项目的整体盈利能力。</p>
        </div>
      </div>
    </div>
    <div class="commonality">
      <p class="headline">项目价值</p>
      <div class="content01">
        <p class="lists text"><b>创税增收:</b>项目一期示范基地建成预计将实现年营业收入超百亿元人民币,年上缴税金(享受政策优惠后)将超过十亿元人民币</p>
        <p class="lists text"><b>精准扶贫:</b>改变传统地区农业种植结构实现农业扶贫,农业产业工人化可直接帯动上万农户,直接提供1500个就业岗位,间接提供万余个就业岗位,人均增收在万元以上,帯动周边10个农产品示范种植基地,缓解当地就业压力问题。</p>
        <p class="lists text"><b>全产业链标准化:</b>统一了农产品种植、采摘、仓储、分选、包装、物流的标准化建设,突现食品安全标准并可追溯的全产业链延伸</p>
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
      title: '特色小镇解决方案',
    };
  },
  data() {
    return {
      img: {
        ck_03: require('../assets/images/ck_03.png'),
        ck_04: require('../assets/images/ck_04.png'),
        ck_05: require('../assets/images/ck_05.png'),
        ck_06: require('../assets/images/ck_06.png'),
        town_01: require('../assets/images/town_01.jpg'),
        town_02: require('../assets/images/town_02.jpg'),
        town_03: require('../assets/images/town_03.jpg'),
        town_04: require('../assets/images/town_04.jpg'),
        town_05: require('../assets/images/town_05.jpg'),
        town_06: require('../assets/images/town_06.jpg'),
        town_07: require('../assets/images/town_07.jpg'),
        town_08: require('../assets/images/town_08.jpg'),
        town_09: require('../assets/images/town_09.jpg'),
        town_10: require('../assets/images/town_10.jpg'),
        town_11: require('../assets/images/town_11.jpg'),
        town_12: require('../assets/images/town_12.jpg'),
        town_13: require('../assets/images/town_13.jpg'),
        town_14: require('../assets/images/town_14.jpg'),
        town_15: require('../assets/images/town_15.png'),
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
  @phone:~'only screen and (max-width:750px)';
  .industrialPark{
    .commonality{
      margin: 150px auto 0;
      overflow: hidden;
      border-bottom: 1px solid #EFEFEF;
      @media @phone{
        margin:0;
      }
      .headline{
        font-size: 50px;
        color: #333;
        text-align: center;
        @media @phone{
          font-size: 23px;
          margin-top: 20px;
        }
      }
      h3{
        font-weight: normal;
        color: #848484;
        width: 90%;
        font-size: 23px;
        text-align: center;
        margin: 20px auto 0;
        @media @phone{
          font-size:18px;
          margin-top: 10px;
        }
      }
      .subhead{
        font-size: 35px;
        color: #808080;
        text-align: center;
        margin: 30px 0;
        @media @phone{
          font-size: 24px;
          margin:15px 0;
        }
      }
      .content01{
        width: 60%;
        text-align: left;
        font-size: 20px;
        color: #333;
        margin: 60px auto;
        .lists{
          margin-bottom: 20px;
          text-indent: 40px;
        }
        .text{
          text-indent: 0;
        }
        img{
          width: 100%;
        }
        @media @phone{
          width:100%;
          font-size: 14px;
          margin:20px auto;
          padding:0 15px;
          .lists{
            margin-bottom: 10px;
            text-indent:1.5em;
          }
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
          .list{
            width: 260px;
            text-align: center;
            img{
              width: 100%;
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
              font-size: 15px;
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
        @media @phone{
          width:100%;
          font-size: 14px;
          margin:20px auto;
          .flexBox{
            display: block;
            .list{
              width:100%;
              text-align: left;
              padding:15px;
              img{
                display: block;
                width:100%;
                margin:0 auto;
              }
              .acreage{
                font-size: 16px;
                margin-top:20px;
                .num{
                  font-size: 18px;
                }
              }
              .name{
                font-size: 16px;
              }
              .info{
                font-size: 14px;
                ul{
                  display: flex;
                  justify-content: space-between;
                  li{
                   flex:1 0 0;
                    padding:0 4px;
                  }
                }
              }
            }
          }

        }
      }
      .content03{
        width: 80%;
        margin: 60px auto;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        .list{
          width: 260px;
          padding-bottom: 20px;
          background-color: #F5F5F5;
          img{
            width: 100%;
          }
          h2{
            font-size: 22px;
            margin: 25px 0;
            text-align: center;
          }
          p{
            font-size: 18px;
            color: #808080;
            line-height: 30px;
            padding: 0 20px;
          }
        }
        @media @phone{
          width:100%;
          margin:20px auto;
          display: block;
          .list{
            width:100%;
            img{
              width:90%;
              display: block;
              margin:0 auto;
            }
            h2{
              font-size: 18px;
              margin:10px 0;
            }
            p{
              font-size: 14px;
              line-height: 1.5em;
              padding:0 10px;
            }
          }
        }
      }
      .content04{
        width: 80%;
        margin: 60px auto;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        .list{
          width: 318px;
          img{
            width: 100%;
          }
          h2{
            font-size: 22px;
            margin: 25px 0;
            text-align: center;
          }
        }
        @media @phone{
          display: block;
          width:100%;
          margin:20px auto;
          .list{
            width:100%;
            img{
              width:90%;
              margin:0 auto;
              display: block;
            }
            h2{
              font-size: 18px;
              margin:10px 0;
            }
          }
        }
      }
      .content05{
        width: 80%;
        margin: 60px auto;
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .list{
          width: 440px;
          padding: 45px 30px;
          box-sizing: border-box;
          margin-bottom: 20px;
          background-color: #F5F5F5;
          img{
            width: 100%;
          }
          h2{
            font-size: 32px;
            margin: 25px 0;
            color: #808080;
            font-weight: normal;
          }
          p{
            font-size: 18px;
            color: #333;
          }
        }
        @media @phone{
          width:100%;
          margin: 20px auto;
          padding:0 15px;
          .list{
            width:100%;
            padding:10px;
            margin-bottom: 15px;
            img{
              width:90%;
              margin: 0 auto;
              display: block;
            }
            h2{
              font-size: 16px;
              margin:10px 0;
            }
            p{
              font-size: 14px;
            }
          }
        }
      }
      .content06{
        width: 60%;
        margin: 60px auto;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        .list{
          width: 180px;
          box-sizing: border-box;
          img{
            width: 146px;
            display: block;
            margin: 0 auto;
          }
          h2{
            font-size: 22px;
            color: #B49672;
            text-align: center;
            margin: 25px 0;
          }
          p{
            font-size: 18px;
            color: #3B3738;
          }
        }
        @media @phone{
          width:100%;
          margin:20px auto;
          display: block;
          .list{
            width:100%;
            img{
              display: none;
            }
            h2{
              font-size: 16px;
              margin:10px 0;
            }
            p{
              font-size: 14px;
              padding:0 15px;
            }
          }
        }
      }
    }
  }
  /*@media screen and (max-width: 750px) {
    .industrialPark{
      .commonality{
        .content01{
          width: 90%;
        }
        .content02{
          width: 90%;
          .flexBox {
            flex-wrap: wrap;
            .list {
              width: 100%;
              text-align: center;
              img {
                width: 100%;
              }
            }
          }
        }
        .content03{
          width: 90%;
          flex-wrap: wrap;
          .list{
            width: 45%;
            margin-bottom: 20px;
            img{
              width: 100%;
            }
            p{
              line-height: 130px;
            }
          }
        }
        .content04{
          width: 90%;
          flex-wrap: wrap;
          .list{
            width: 45%;
          }
        }
        .content05{
          width: 90%;
          flex-wrap: wrap;
          .list{
            width: 45%;
          }
        }
        .content06{
          width: 90%;
          flex-wrap: wrap;
          .list{
            width: 100%;
          }
        }
      }
    }
  }*/
</style>
