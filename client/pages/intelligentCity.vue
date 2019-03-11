<template>
  <div class="industrialPark">
    <div class="commonality commonOne">
      <p class="headline">新疆天富一生约智慧城市</p>
      <div class="content01">
        <p class="lists">2017年8月，福瑞至控股唐闻董事长阿克苏、石河子、乌鲁木齐三地新疆之行中，与石河子市钟永毅市长、林艾民副市长进行了长达4个半小时的热切商谈，就智慧城市（智慧交通为迫切需求）以及绿色工业园的改造合作达成共识。</p>
        <p class="lists">2017年11月2日，由福瑞至控股有限公司与新疆天富集团（股票代码：600509）共同组成的天富智慧城市（原名：天富一生约）项目组动员大会在天富集团会议中心举行，宣告天富智慧城市项目全面启动，预示着石河子市区及周边团场70万居民将能够享受智慧、健康新生活。</p>
        <p class="lists">2017年11月17日，新疆天富集团刘伟董事长一行莅临成都力宝大厦，对福瑞至控股有限公司进行交流考察，确定双方在智慧城市、能源互联网等领域的后续工作重点。经过天富一生约双11活动的成功案例，天富集团刘伟董事长充分肯定了联合运营团队所取得的工作成绩，并提到“自从与一生约团队合作以后，天富的团队就像有了蓬勃生机，焕发出了年轻人的活力，天富与一生约的合作，也是一个机遇，要坚定地把这个合作做下去。</p>
        <p class="lists">2017年12月，由新疆天富集团和福瑞至控股有限公司王牌生态产品一生约共同打造的天富一生约APP将正式在新疆天富集团内部上线。该平台不仅包含生态食品等40类商品以及便捷缴费、健康小屋、智能物业等7类服务，8000名天富员工率先体验健康、共享、品质的智慧城市服务。</p>
        <img v-lazy="img.intelligentCity_01"/>
      </div>
    </div>
    <div class="commonality">
      <p class="headline">智慧城市框架</p>
      <div class="content01">
        <p class="lists">天富智慧城市项目运用“互联网+”紧密链接居民、社区、城市、商家及运营商，将成为新疆首家“智慧社区健康生活服务平台”。该平台是由福瑞至生态成员一生约家族健康卫士、华康中泰、安心桥、香草小鲜、匠糖果椒，以及新疆天富集团旗下邻里中心、天富物业、天富房产、天富保险、易通物流等共同打造的一个集智慧家、智慧物业、智慧健康、智慧社区、政务服务、社区O2O、智慧旅游、党群服务、智慧金融、共享经济、智慧商业为一体的综合智能服务集成运营商。该平台不仅满足“场景、内容、载体、融合”四个智慧社区的基本点，还独有“小区共享”功能，让业主的闲置物品、闲置技能甚至是空闲时间，都能共享出来创造收益，真正做到普惠于民，智慧到家。</p>
        <p class="lists">天富智慧城市项目的落地、推进实施，是福瑞至低碳+产业支持“一带一路”建设，助推新疆快速发展的重要举措，是资源地域共享的伟大革新，也是西北疆域政府重视互联网AI新兴科技引进的重大成果。</p>
        <img v-lazy="img.intelligentCity_02"/>
      </div>
    </div>
    <div class="commonality">
      <p class="headline">项目进展</p>
      <p class="subhead">智慧物业</p>
      <div class="content01">
        <p class="lists">目前，天富一生约以白杨小区作为智慧物业的试点项目，并与25个小区达成合作意向，逐步向石河子乃至全疆推广，帮助广大业主用科技丰富生活，用智慧开启工作生活新模式，打造智能高效的生活新体验。</p>
      </div>
      <p class="subhead">供应链平台</p>
      <div class="content01">
        <p class="lists">解决当前存在的物流滞后问题，天富一生约项目组建立了完善的供应链平台，与石河子市、145团共70个商家签订快递代收合作协议，利用线上天富一生约平台与线下物流配送相结合的方法，由天富易通公司负责派送至就近代收网点，减少货物流通环节，帮助消费者在下单后快速获得需要的物品，这也是天富构建“智慧城市”的又一重要举措。</p>
      </div>
      <p class="subhead">智慧健康</p>
      <div class="content01">
        <p class="lists">在智慧健康方面，天富养老服务公司最新打造了健康小屋。健康小屋里有一台简洁、大气的健康监测一体机，它最大的特点是可以让职工不出远门自主完成血糖、尿酸、总胆固醇等十多项常规体检，平时在医院排队需要半天才能完成的检查，在这里只要10分钟就能全部做完。根据体检报告，该设备系统还可以进行体检数据分析解读、健康风险预警、营养膳食和调理运动方面的合理化建议。有益于被检测者进行自助式健康管理，对慢性病提前预防。</p>
        <img v-lazy="img.intelligentCity_03"/>
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
      title: '新疆天富一生约',
    };
  },
  data() {
    return {
      img: {
        intelligentCity_01: require('../assets/images/intelligentCity_01.png'),
        intelligentCity_02: require('../assets/images/intelligentCity_02.png'),
        intelligentCity_03: require('../assets/images/intelligentCity_03.png'),
      },
    };
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
  .industrialPark{
    .commonality{
      margin: 80px auto 0;
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
    }
    .commonOne{
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
          font-size: 15rem/@size;
          color: #808080;
          text-align: center;
          margin: 30rem/@size 0;
        }
        .content01{
          width: 90%;
          text-align: left;
          font-size: 15rem/@size;
          color: #333;
          margin: 30rem/@size auto;
          .lists{
            margin-bottom: 20rem/@size;
          }
          img{
            width: 100%;
          }
        }
      }
    }
    .commonOne{
      margin-top: 100rem/@size !important;
    }
  }
</style>
