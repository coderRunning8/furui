<template>
  <div class="carbonCurrency">
    <div class="CBone">
      <p class="headline">什么是碳货币？</p>
      <p class="content">
        碳货币是指未来国际货币体系可能会在 “碳本位”上重建，即让二氧化碳排放权成为继黄金、白银、美元之后的另一种国际
        <br />
        货币基础，将碳货币发展为一种新的超主权货币。一旦碳货币体系建立起来，碳货币的储存和占有程度就会直接影响一个国家的经济体系。
      </p>
    </div>
    <div class="CBtwo">
      <p class="headline">碳的四大方向</p>
      <div class="flexBox content">
        <div class="list" v-for="(item,ind) of CBtwo" :key="ind">
          <img class="image" v-lazy="item.img" />
          <p class="title" :class="item.name === '生活碳'? 'blue':''">{{item.name}}</p>
        </div>
      </div>
      <p class="introduce">生活碳币系统，是以解决生活领域的生活碳为目标</p>
    </div>
    <div class="CBthree">
      <p class="headline">生活碳币系统由来</p>
      <div class="content">
        <div class="msg" v-for="(item,ind) of CBthree" :key="ind">
          <p class="title">{{item.title}}</p>
          <p class="info">
            <span class="left">{{item.left}}</span>
            <span class="right">{{item.right}}</span>
          </p>
        </div>
        <div class="incident">
          <div class="left">
            <img v-lazy="img.tb_09"/>
          </div>
          <div class="right">
            <p class="setStyle">2015年4月30日</p>
            <p class="setStyle">由北京灰霾防治合作交流协会（HPCA）与韩国环境公团（KECO）、韩国气候环境组织（KCEN）、韩国环境产业技术院（KEITI）签署了“中韩两国社会团体绿色低碳项目合作推进计划” 的备忘录。中国正式引进韩国绿卡制度与经验。</p>
            <p class="name">2016年福瑞至携手北京灰霾防治合作交流协会，启动中韩两国低碳援助项目。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="CBfour">
      <p class="headline">碳币系统运作体系</p>
      <img class="flowChart" v-lazy="img.tb_01"/>
      <img class="analysis" v-lazy="img.tb_02"/>
    </div>
    <div class="CBfive">
      <p class="headline">碳币系统价值：（促进中国生活领域低碳事业发展）</p>
      <div class="content">
        <div class="left-top">
          <p class="type">个人价值</p>
          <div>
            <div class="title">享低碳积分</div>
            <div class="info">消费者日常公共出行等低碳 行为进行低碳积分，并可在消费中进行积分抵扣</div>
          </div>
          <div>
            <div class="title">享低碳优惠</div>
            <div class="info">日常消费购物低碳产品享受高额度优惠折扣公园等景点享优惠</div>
          </div>
        </div>
        <div class="left-bottom">
          <p class="type">生态价值</p>
          <div>
            <div class="title">低碳认证</div>
            <div class="info">国家机构低碳认证，提升企业、产品销售竞争力</div>
          </div>
          <div>
            <div class="title">流通运营降税</div>
            <div class="info">运营商助力低碳产品流通，获得企业认证、政府补贴等支持</div>
          </div>
        </div>
        <div class="right-top">
          <p class="type">社会价值</p>
          <div>
            <div class="title">低碳中国</div>
            <div class="info">低碳减排贯穿个人消费到工业生产，低碳减排达到国际减排目标</div>
          </div>
          <div>
            <div class="title">可持续发展</div>
            <div class="info">低碳意识深入全面，全社会减碳为中国可持续发展助力。</div>
          </div>
        </div>
        <div class="right-bottom">
          <p class="type">经济价值</p>
          <div>
            <div class="title">提升各中间商收益</div>
            <div class="info">助力低碳产品流通，中间商获得更多低碳补贴</div>
          </div>
          <div>
            <div class="title">增加产品售卖收益</div>
            <div class="info">扩大低碳产品销售渠道，增加产品售卖收益</div>
          </div>
        </div>
        <img class="centerImg" v-lazy="img.tb_04"/>
      </div>
    </div>
    <div class="CBsix">
      <p class="headline">福瑞至在碳币系统中的角色</p>
      <div class="content">
        <div class="left">
          <img class="img" v-lazy="img.tb_03"/>
          <p class="info">
            2016.9.10中韩两国生活领域CO2减排促进会在京举行<br />
            我们将固化韩国绿卡模式，运用互联网，打造低碳互联网平台系统。</p>
        </div>
        <div class="right">
          <ul>
            <li><span class="overstriking">运营主体：</span>北京全球指数科技有限公司</li>
            <li><span class="overstriking">推进主体：</span>中国、韩国大使馆</li>
            <li><span class="overstriking">执行单位：</span>北京灰霾防治合作交流协会（HPCA）、<span class="overstriking">福瑞至控股</span></li>
            <li><span class="overstriking">目标：</span>共建低碳互联网平台</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="CBseven">
      <p class="headline">项目进展预期</p>
      <div class="schedule">
        <p class="item"><span class="overstriking">2016年</span>建设期</p>
        <p class="item"><span class="gray">→</span></p>
        <p class="item"><span class="overstriking">2017年</span>发展期</p>
        <p class="item"><span class="gray">→</span></p>
        <p class="item"><span class="overstriking">2018年</span>加速期</p>
      </div>
      <div class="lists">
        <div class="list">
          <ul>
            <li>成立互联网碳币系统平台公司</li>
            <li>与韩国对接，模式引入中国，完善基础设施建设</li>
            <li>与国家质检总局及其下属的6大职能部门建立合作</li>
            <li>关系，制定绿卡标准</li>
            <li>搭建标准化体系</li>
            <li>预计前期1000万人参与</li>
          </ul>
        </div>
        <div class="list">
          <ul>
            <li>选择1个试点示范城市</li>
            <li>搭建碳币平台</li>
            <li>参与人数达到5000万</li>
          </ul>
        </div>
        <div class="list">
          <ul>
            <li>与金融机构建立合作关系</li>
            <li>构建碳币交易系统</li>
            <li>参与人数达到1亿</li>
          </ul>
        </div>
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
      title: '碳币系统',
    };
  },
  data() {
    return {
      img: {
        tb_01: require('../assets/images/tb_01.png'),
        tb_02: require('../assets/images/tb_02.png'),
        tb_03: require('../assets/images/tb_03.png'),
        tb_04: require('../assets/images/tb_04.png'),
        tb_09: require('../assets/images/tb_09.png'),
      },
      CBthree: [
        {
          title: '国际性',
          left: '紧跟国际低碳步伐,中国计划于2017年启动全国碳排放交易体系。',
          right: '——中美两国《气候变化联合声明》',
        },
        {
          title: '国家性',
          left: '韩国将绿卡项目捐赠给北京灰霾防治合作交流协会，通过韩国绿卡制度与经验，助力中国低碳建设。',
          right: '——2015年4月30日',
        },
        {
          title: '成熟性',
          left: '截止2015年韩国超过五分之一人口已使用绿卡，低碳环保理念深入人心全民践行环保消费。',
          right: '——韩国环保绿卡普及',
        },
        {
          title: '参与性：',
          left: '人人参与享优惠，消费低碳产品，通过银行卡积分系统更可在各类政府公共资源免费享受使用特权。',
          right: '',
        },
      ],
      CBtwo: [
        {
          name: '工业碳',
          img: require('../assets/images/tb_05.png'),
        },
        {
          name: '建筑碳',
          img: require('../assets/images/tb_06.png'),
        },
        {
          name: '交通碳',
          img: require('../assets/images/tb_07.png'),
        },
        {
          name: '生活碳',
          img: require('../assets/images/tb_08.png'),
        },
      ],
    };
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
  @phone:~'only screen and (max-width:750px)';
.carbonCurrency{
  .content{
    max-width:1200px;
    box-sizing:border-box;
    padding:0 15px;
    margin:0 auto;
  }
  .CBone{
    overflow: hidden;
    .headline{
      font-size: 50px;
      color: #333;
      text-align: center;
      margin-top: 60px;
    }
    .content{
      text-align: left;
      font-size: 20px;
      text-indent: 2em;
      color: #808080;
      margin-top: 60px;
    }
    @media @phone{
      .headline{
        font-size: 23px;
        margin-top:20px;
      }
      .content{
        font-size: 14px;
        margin-top: 20px;
      }
    }
  }
  .CBtwo{
    overflow: hidden;
    .headline{
      font-size: 50px;
      color: #333;
      text-align: center;
      margin-top: 60px;
    }
    .flexBox{
      width:100%;
      margin: 60px auto 0;
      display: -webkit-flex; /* Safari */
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .list{
        flex:25% 0 0;
        padding:10px;
        .image{
          width: 100%;
          height:auto;
          display: block;
        }
        .title{
          text-align: center;
          font-size: 20px;
          color: #333;
          margin-top: 20px;
        }
        .blue{
          color: #006ebd;
        }
      }
    }
    .introduce{
      text-align: center;
      font-size: 20px;
      color: #808080;
      margin-top: 30px;
    }
    @media @phone{
      .headline{
        font-size: 23px;
        margin-top: 20px;
      }
      .flexBox{
        width:100%;
        .list {
          flex: 45% 0 0;
        }
      }
      .introduce{
        font-size: 14px;
        margin-top: 15px;
      }
    }
  }
  .CBthree{
    overflow: hidden;
    margin-top: 60px;
    .headline{
      font-size: 50px;
      color: #333;
      text-align: center;
      margin-top: 20px;
    }
    .content{
      /*width: 1150px;*/
      margin: 40px auto;
      overflow: hidden;
      padding-bottom: 60px;
      .msg{
        margin-bottom: 20px;
        .title{
          font-size: 24px;
          color: #333;
        }
        .info{
          color: #808080;
          font-size: 24px;
          overflow: hidden;
          .left{
            float: left;
          }
          .right{
           clear:both;
            display: block;
            width:100%;
            text-align: right;
          }
        }
      }
      .incident{
        overflow: hidden;
        margin-top: 40px;
        .left{
          width: 50%;
          float: left;
          img{
            height: 368px;
            width: 550px;
          }
        }
        .right{
          width: 50%;
          float: right;
          overflow: hidden;
          .setStyle{
            font-size: 24px;
            color: #808080;
            margin-left: 50px;
          }
          .name{
            margin-left: 50px;
            font-size: 24px;
            color: #333;
            margin-top: 80px;
          }
        }
      }
    }
    @media @phone{
      margin-top: 20px;
      .headline{
        margin-top: 10px;
        font-size: 23px;
      }
      .content{
        margin: 15px auto;
        overflow: hidden;
        padding-bottom: 20px;
        .msg{
          margin-bottom:8px;
          .title{
            font-size: 18px;
            font-weight: 500;
          }
          .info{
            font-size:14px;
          }
        }
        .incident{
          margin-top: 20px;
          .left{
            float:none;
            width:100%;
            height:auto;
            img{
              width:100%;
              height:auto;
            }
          }
          .right{
            width:100%;
            float:none;
            .setStyle{
              margin-left: 0;
              margin-top: 15px;
              font-size: 16px;
            }
            .name{
              margin-left: 0;
              margin-top: 15px;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
  .CBfour{
    background-color: #f7f7f7;
    height: 1000px;
    overflow: hidden;
    .headline{
      font-size: 50px;
      color: #333;
      text-align: center;
      margin-top: 80px;
    }
    .flowChart{
      width: 80%;
      display: block;
      margin: 100px auto 0;
    }
    .analysis{
      width: 50%;
      display: block;
      margin: 100px auto 0;
    }
    @media @phone{
      height:auto;
      .headline{
        font-size: 23px;
        margin-top: 20px;
      }
      .flowChart{
        width:95%;
        margin:20px auto;
      }
      .analysis{
        width:100%;
       padding:20px 15px;
        background:#fff;
        margin: 0;
      }
    }
  }
  .CBfive{
    height: 1140px;
    overflow: hidden;
    .headline{
      font-size: 50px;
      color: #333;
      text-align: center;
      margin-top: 60px;
    }
    .content{
      width: 80%;
      height: 690px;
      margin: 130px auto 0;
      position: relative;
      .centerImg{
        width: 30%;
        position: absolute;
        left: 35%;
        top: 15%;
      }
      .left-top{
        width: 30%;
        height: 330px;
        position: absolute;
        left: 0;
        top: 0;
        .type{
          display: none;
        }
        .title{
          font-size: 24px;
          color: #333;
          margin-bottom:20px;
        }
        .info{
          font-size: 24px;
          color: #333;
          margin-bottom: 30px;
        }
      }
      .left-bottom{
        width: 30%;
        height: 330px;
        position: absolute;
        left: 0;
        bottom: 0;
        .type{
          display: none;
        }
        .title{
          font-size: 24px;
          color: #333;
          margin-bottom: 20px;
        }
        .info{
          font-size: 24px;
          color: #333;
          margin-bottom: 30px;
        }
      }
      .right-top{
        width: 30%;
        height: 330px;
        position: absolute;
        right: 0;
        top: 0;
        .type{
          display: none;
        }
        .title{
          font-size: 24px;
          color: #333;
          margin-bottom: 20px;
        }
        .info{
          font-size: 20px;
          color: #333;
          margin-bottom: 30px;
        }
      }
      .right-bottom{
        width: 30%;
        height: 330px;
        position: absolute;
        right: 0;
        bottom: 0;
        .type{
          display: none;
        }
        .title{
          font-size: 24px;
          color: #333;
          margin-bottom: 20px;
        }
        .info{
          font-size: 20px;
          color: #333;
          margin-bottom: 30px;
        }
      }
    }
    @media @phone{
      height:auto;
      .headline{
        font-size: 23px;
        margin-top: 20px;
      }
      .content{
        width:100%;
        height:auto;
        margin:20px auto;
        padding-top: 400px;
        .centerImg{
          width:80%;
          position: absolute;
          left:50%;
          top:10px;
          transform:translateX(-50%);
        }
        .left-top,.left-bottom,.right-top,.right-bottom{
          width: 100%;
          height:auto;
          position: static;
          .type{
            display: block;
            font-size: 20px;
            color: #006dba;
          }
          .title{
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin-bottom:10px;
          }
          .info{
            font-size: 14px;
            color: #333;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  .CBsix{
    background-color: #f7f7f7;
    height: 680px;
    overflow: hidden;
    .headline{
      font-size: 50px;
      color: #333;
      text-align: center;
      margin-top: 80px;
    }
    .content{
      width: 80%;
      height: 400px;
      margin: 80px auto 0;
      .left{
        width: 50%;
        height: 400px;
        float: left;
        .img{
          display: block;
          width: 490px;
          margin: 0 auto;
        }
        .info{
          font-size: 18px;
          color: #808080;
          margin-left: 40px;
          margin-top: 0.100px;
        }
      }
      .right{
        width: 50%;
        height: 400px;
        float: right;
        ul{
          margin-left: 30px;
          li{
            margin-bottom: 20px;
            font-size: 24px;
            color: #808080;
            .overstriking{
              color: #333;
            }
          }
        }
      }
    }
    @media @phone{
      height:auto;
      .headline{
        font-size: 23px;
        margin-top: 20px;
      }
      .content{
        height:auto;
        margin:0;
        width:100%;
        .left,.right{
          width:100%;
          float:none;
          margin-top: 10px;
          height:auto;
          img{
            width: 100%!important;
          }
          .info{
            margin-left: 0;
            margin-top: 15px;
          }
          ul{
            li{
              font-size: 16px;
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }
  .CBseven{
    overflow: hidden;
    .headline{
      font-size: 50px;
      color: #333;
      text-align: center;
      margin-top: 80px;
    }
    .schedule{
      width: 80%;
      height: 200px;
      display: -webkit-flex; /* Safari */
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: center;
      margin: 0 auto;
      .item{
        font-size: 30px;
        color: #333;
        .overstriking{
          font-size: 60px;
          margin-right: 0.100px;
        }
        .gray{
          font-size: 60px;
          color: #808080;
        }
      }
    }
    .lists{
      width: 80%;
      margin: 0 auto 100px;
      overflow: hidden;
      .list{
        width: 33.33%;
        float: left;
        padding: 20px;
        ul{
          margin-left: 20px;
          li{
            margin-bottom: 20px;
            font-size: 18px;
          }
        }
      }
    }
    @media @phone{
      .headline{
        font-size: 23px;
        margin-top:30px;
      }
      .schedule{
        width:100%;
        margin-top: 20px;
        height:auto;
        padding:0 15px;
        justify-content: space-around;
        .item{
          font-size: 14px;
          .overstriking{
            font-size: 18px;
            display: block;
          }
          .gray{
            font-size: 24px;
          }
        }
      }
      .lists{
        width:100%;
        margin-bottom: 20px;
        .list{
          width:100%;
          padding:10px 15px;
          ul{
            li{
              margin-bottom: 6px;
              font-size: 14px;
            }
          }
          &:first-child{
            &:before{
              content:'2016年';
              color: #333;
              font-size: 18px;
            }
          }
          &:nth-child(2){
            &:before{
              content:'2017年';
              color: #333;
              font-size: 18px;
            }
          }
          &:nth-child(3){
            &:before{
              content:'2018年';
              color: #333;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}
</style>
