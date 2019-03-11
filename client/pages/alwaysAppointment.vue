<template>
  <div class="alwaysAppointment">
    <div class="BoxOne">
      <p class="headline">一生约介绍</p>
      <div class="content content-container">
        <p class="info">
          一生约是福瑞至控股生态的运营核心，承载着福瑞至控股现代农业、智慧社区、智慧能源、大健康四大板块的运营重任，
          其主要产品一生约APP聚集了100多位顶级专家的心血，经过6年研发，研发资金高达3亿，成功吸引了70万用户的加入，为公司创造了20亿的估值！
        </p>
        <div class="flexBox">
          <div class="list" v-for="(item,ind) of BoxOne" :key="ind">
            <p class="big">{{item.num}}</p>
            <p class="small">{{item.msg}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="BoxTwo">
      <div class="content content-container">
        <img v-lazy="img.ysy_01"/>
        <div class="info">
          <p class="title">切入点</p>
          <p class="msg">
            一生约家族健康卫士是国内首个家族健康赋能平台。以“健康相守，多活十年”为健康理念，
            围绕与家庭健康相关的“水、空气、食品、安全、人体数据”五个生活维度构建了家庭健康社区共享平台、
            城市级智慧民生平台等多生共赢商业生态系统，打造成房屋的第四个配套，
            不仅能让用户享受健康、安全、品质、便捷住居体验，还能帮助城市合作商、开发商、物管、政府转型升级。
          </p>
        </div>
      </div>
      <img class="phoneImg" v-lazy="img.ysy_02"/>
    </div>
    <div class="BoxThree">
      <p class="headline">一生约介绍</p>
      <div class="content">
        <img v-lazy="img.ysy_03"/>
        <div class="flexBox">
          <div class="list">
            利用大数据，对业主进行分析，进行相关内容推送，并在此基础上形成供应链运营，从而令一生约成为社区消费、创业的首选平台。
          </div>
          <div class="list">
            通过一生约的链接，使高楼里的人形成像村里人一样的邻里关系，彼此相识、相知、相扶、相助。
          </div>
          <div class="list">
            利用一生约的共享经济平台，物管可以从社区O2O交易、医疗康养服务定制中实现分利，获得持续、稳定的利润来源。
          </div>
        </div>
      </div>
    </div>
    <div class="BoxFour">
      <p class="headline">一生约核心构架</p>
      <div class="cotent">
        <img v-lazy="img.ysy_04"/>
        <div class="info">
          <ul>
            <li>基于“智慧魔盒” 配置，实现全屋智能，让房屋二十年不落伍。</li>
            <li>基于“华康中泰” 病理预测模块，实现对家族健康的提前预警，将疾病扼杀在摇篮中。</li>
            <li>软件+硬件，实现家族健康的人工智能化管理。</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="BoxFive">
      <p class="headline">一生约运营模式</p>
      <img v-lazy="img.ysy_05"/>
    </div>
    <div class="BoxSix">
      <p class="headline">一生约业务板块</p>
      <div class="content">
        <img v-lazy="img.ysy_06"/>
        <div class="info">
          <p class="title">一生约优势</p>
          <div class="msg">
            <p class="type">B端客户：开发商和物业公司转型升级的利器</p>
            <p class="lists">1、开发商：为开发商产品提升附加值，助力开发商转型为产业运营商。</p>
            <p class="lists">2、城市合作商：为城市赋能，实现智慧城市升级</p>
            <p class="lists">3、物管：为物业公司实现智慧升级、利润增收</p>
            <p class="lists">4、政府：帮助政府建立大数据中心，实现智能化管理。</p>
            <p class="type">C端客户：更健康、更智慧、更幸福</p>
            <p class="lists">一生约•家族健康卫士，将帮助千家万户实现“健康相守，多活十年”的家族亲情终极梦想！</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'alwaysAppointment',
  head() {
    return {
      title: '一生约',
    };
  },
  data() {
    return {
      img: {
        ysy_01: require('../assets/images/ysy_01.png'),
        ysy_02: require('../assets/images/ysy_02.png'),
        ysy_03: require('../assets/images/ysy_03.png'),
        ysy_04: require('../assets/images/ysy_04.png'),
        ysy_05: require('../assets/images/ysy_05.png'),
        ysy_06: require('../assets/images/ysy_06.png'),
      },
      BoxOne: [
        {
          num: '6年',
          msg: '研发',
        },
        {
          num: '3亿',
          msg: '投入',
        },
        {
          num: '70万',
          msg: '用户',
        },
        {
          num: '100位',
          msg: '顶级专家参与',
        },
        {
          num: '20亿',
          msg: '估值',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
  @phoneScreen:750px;
  @phone: ~"only screen and (max-width: @{phoneScreen})";
.alwaysAppointment{
  .content-container{
    max-width:1200px;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 15px;
  }
  .BoxOne{
    overflow: hidden;
    .headline{
      font-size:40px;
      color: #333;
      text-align: center;
      margin: 80px 0;
      @media @phone{
        font-size:26px;
        margin:15px 0;
      }
    }
    .info{
      font-size: 20px;
      width:75%;
      margin:0 auto;
      color: #333;
      @media @phone{
        font-size:15px;
        width:100%;
        padding: 0 15px;
        box-sizing: border-box;
      }
    }
    .flexBox{
      display: -webkit-flex; /* Safari */
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      margin: 80px 0;
      .list{
        .big{
          font-size: 60px;
          color: #006ebd;
        }
        .small{
          font-size: 24px;
          color: #333;
        }
      }
      @media @phone{
        flex-wrap:wrap;
        margin:15px 0;
        justify-content: space-around;
        .list{
          flex: 33% 0 0;
          text-align: center;
          box-sizing:border-box;
          .big{
            font-size: 23px;
          }
          .small{
            font-size:16px;
          }
        }
      }
    }

  }
  .BoxTwo{
    overflow: hidden;
    background-color: #f7f7f7;
    text-align: center;
    padding: 80px 0;
    .content{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    img{
      width: 45%;
    }
    .info{
      width: 50%;
      float: right;
      padding:0 70px;
      .title{
        font-size: 36px;
        color:#333;
      }
      .msg{
        font-size: 20px;
        color: #333;
        margin-top: 40px;
        text-align:left;
      }
    }
    .phoneImg{
      width: 45%;
      margin-top: 50px;
    }
    @media @phone{
      padding:20px 0;
      .content{
        display: block;
        .info{
          width:100%;
          float:none;
          margin-top: 25px;
          padding:0 15px;
          .title{
            font-size: 23px;
          }
          .msg{
            font-size: 15px;
            margin-top: 20px;
            text-indent: 2em;
          }
        }
      }
      .content>img{
        width:100%;
        padding: 0 15px;
      }
      .phoneImg{
        width:80%;
      }
    }
  }
  .BoxThree{
    overflow: hidden;
    padding: 80px 0;
    border-bottom: 1px solid #efefef;
    .headline{
      font-size: 50px;
      color: #333;
      text-align: center;
      margin-bottom: 80px;
    }
    .content{
      max-width:1200px;
      margin: 0 auto;
      overflow: hidden;
    }
    img{
      width: 100%;
    }
    .flexBox{
      display: -webkit-flex; /* Safari */
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      margin: 50px 0;
      .list{
        width: 27%;
        font-size: 20px;
        color: #333;
      }
    }
    @media @phone{
      padding: 20px 0;
      .headline{
        font-size:30px;
        margin-bottom: 20px;
      }
      img{
        width:85%;
        margin:0 auto;
        display: block;
      }
      .flexBox{
        display: block;
        padding:15px;
        margin: 0;
        .list{
          width:100%;
          display: block;
          font-size: 14px;
          text-indent: 2em;
        }
      }
    }
  }
  .BoxFour{
    overflow: hidden;
    text-align: center;
    padding: 80px 0;
    border-bottom: 1px solid #efefef;
    .headline{
      font-size: 50px;
      color: #333;
      text-align: center;
      margin-bottom: 80px;
    }
    .cotent{
      max-width:1200px;
      margin: 0 auto;
      overflow: hidden;
    }
    img{
      width: 60%;
    }
    .info{
      width: 40%;
      float: right;
      ul{
        li{
          list-style: none;
          font-size: 20px;
          color:#333;
          text-align: left;
          margin-left: 20px;
          margin-bottom: 20px;
        }
      }
    }
    @media @phone{
      padding:20px 0;
      .headline{
        font-size: 23px;
        margin-bottom: 20px;
      }
      img{
        width: 90%;
        margin: 0 auto;
        display: block;
      }
      .info{
        float:none;
        width:100%;
        padding:0 15px;
        ul{
          margin-top: 15px;
          li{
            font-size: 14px;
            margin:0;
            line-height: 1.5em;
            text-indent: 2em;
          }
        }
      }
    }
  }
  .BoxFive{
    overflow: hidden;
    text-align: center;
    padding: 80px 0;
    .headline{
      font-size: 50px;
      color: #333;
      text-align: center;
      margin-bottom: 80px;
    }
    img{
      width: 60%;
    }
    @media @phone{
      padding:20px 0;
      .headline{
        font-size: 23px;
        margin-bottom: 20px;
      }
      img{
        width:90%;
        margin: 0 auto;
      }
    }
  }
  .BoxSix{
    overflow: hidden;
    background-color: #f7f7f7;
    text-align: center;
    padding: 80px 0;
    .headline{
      font-size: 45px;
      color: #333;
      text-align: center;
      margin-bottom: 50px;
    }
    .content{
      max-width:1200px;
      margin: 0 auto;
      overflow: hidden;
      display:flex;
      justify-content: space-between;
      align-items: center;
      padding: 60px 0;
    }
    img{
      width: 45%;
    }
    .info{
      width: 50%;
      float: right;
      padding: 50px 0 50px 100px;
      text-align: left;
      .title{
        font-size: 36px;
        color:#333;
      }
      .msg{
        font-size: 20px;
        color: #333;
        margin-top: 20px;
        .type{
          font-weight: bold;
          margin-bottom: 10px;
          margin-top: 20px;
        }
      }
    }
    @media @phone{
      padding:20px 0;
      .headline{
        font-size: 23px;
        margin-bottom: 20px;
      }
      .content{
        padding:15px 0;
        display:block;
      }
      img{
        display: block;
        width:80%;
        margin: 0 auto;
      }
      .info{
        width:100%;
        float:none;
        padding:15px;
        margin-top: 15px;
        .title{
          font-size: 18px;
        }
        .msg{
          font-size: 14px;
          margin-top: 10px;
          .type{
            margin:10px 0 10px 10px;
          }
        }
      }
    }
  }
}
</style>
