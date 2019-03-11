<template>
  <div class="fourPattern">
    <div class="commonality comOne">
      <p class="headline">四平模式</p>
      <div class="content01">
        <p class="lists">
          四平市是吉林省中部创新转型核心区主要支点城市，幅员1.47万平方公里，人口341万，耕地面积87万公顷，是玉米之都以及全国商品粮、畜产品生产基地，正邦集团、温氏集团、君乐宝等大型企业在此成集群发展。
        </p>
        <p class="lists">
          2017年10月15日，福瑞至控股有限公司董事长唐闻携福瑞至生态专家一行参加四平绿色农业供给侧改革策略暨福瑞至绿色循环农业生态企业项目推介会。在会议最后，福瑞至控股与四平金谷集团正式签署战略合作协议，双方将联手打造国内一流的全产业链绿色农业生态化产业平台。
        </p>
        <p class="lists">
          针对四平农业发展中存在的问题，福瑞至引入循环经济打造绿色循环农业发展样板——“四平模式”。不仅可以实现农业发展降成本、提质量、重环保的客观需求，也极大地提高了农民的经济收益以及农产品的综合效益。
        </p>
        <img v-lazy="img.fp_01"/>
        <img v-lazy="img.fp_02"/>
      </div>
    </div>
    <div class="commonality">
      <p class="headline">商业模式</p>
      <p class="subhead">推进供需两优化   共享经济下打造产业生态闭环</p>
      <div class="content01">
        <img v-lazy="img.fp_03"/>
      </div>
    </div>
    <div class="commonality">
      <p class="headline">实施策略</p>
      <div class="content01">
        <img v-lazy="img.fp_04"/>
      </div>
    </div>
    <div class="commonality">
      <p class="headline">实施步骤</p>
      <div class="content01">
        <img v-lazy="img.fp_05"/>
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
      title: '四平模式',
    };
  },
  data() {
    return {
      img: {
        fp_01: require('../assets/images/fp_01.png'),
        fp_02: require('../assets/images/fp_02.png'),
        fp_03: require('../assets/images/fp_03.png'),
        fp_04: require('../assets/images/fp_04.png'),
        fp_05: require('../assets/images/fp_05.png'),
      },
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
  .fourPattern{
    .commonality{
      margin: 80px auto 0;
      overflow: hidden;
      border-bottom: 1px solid #d2d2d2;
      .headline{
        font-size:50px;
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
    .comOne{
      margin-top: 150px;
    }
  }
  @media screen and (max-width: 750px) {
    @size:37.5;
    .fourPattern {
      .commonality{
        margin: 40rem/@size auto 0;
        overflow: hidden;
        border-bottom: 1px solid #d2d2d2;
        .headline{
          font-size:30rem/@size;
          color: #333;
          text-align: center;
        }
        .subhead{
          width: 90%;
          font-size: 15rem/@size;
          color: #808080;
          text-align: center;
          margin: 10rem/@size auto;
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
      .comOne{
        margin-top: 80rem/@size;
      }
    }
  }
</style>
