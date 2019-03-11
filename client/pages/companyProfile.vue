<template>
  <div class="companyProfile">
    <div class="CPone">
      <p class="headline">公司简介</p>
      <div class="content">
        <p class="lists">福瑞至控股有限公司，中国首个“生活低碳+”产业赋能平台，于2011年成立，在全球低碳减排的趋势下，以“为蓝天、为明天”为使命，率先提出了“让地球低一度”的企业愿景，在低碳领域深耕8年，先后投资23家企业，其中有2家上市，致力于通过技术实现低碳，低碳改变未来！</p>
        <p class="lists">企业生态以一生约家族健康卫士为运营核心，围绕与家庭健康相关的“水、空气、食品、安全、人体数据”五个生活维度构建了家庭健康社区共享平台、城市级智慧民生平台等多生共赢商业生态系统，打造成房屋的第四个配套，并通过股权投资、产业整合、顶层设计、资源配置、等手段，构建了现代农业、大健康产业、智慧社区、智慧能源四大板块。</p>
        <p class="lists">同时，福瑞至控股坚持以政府推动资本，资本促进科技，科技带动产业的理念，与政府和企业合作解决区域内绿色种养殖、慢病预防管理、社区（城市）智慧化等问题，为政府在一、二、三产业实现供给侧、需求侧改革提供系统的解决方案。</p>
        <p class="lists">经过多年深耕，福瑞至控股先后在南京永宁、内蒙古磴口、上海金山工业园、新疆石河子等落地，其中新疆石河子项目是公司的明星项目，已被石河子政府列为新疆地区5—10年内打造成百亿级的重点项目！</p>
        <img v-lazy="img.cp_01"/>
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
      title: '企业简介',
    };
  },
  data() {
    return {
      img: {
        cp_01: require('../assets/images/cp_01.png'),
      },
    };
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
  @phone:~'only screen and (max-width:750px)';
.companyProfile{
  .CPone{
    margin: 150px auto 0;
    overflow: hidden;
    border-bottom: 1px solid #d2d2d2;
    .headline{
      font-size: 50px;
      color: #333;
      text-align: center;
    }
    .content{
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
    @media @phone{
      margin:0;
      .headline{
        font-size:23px;
        margin:20px 0;
      }
      .content{
        width:100%;
        padding:0 15px;
        font-size: 14px;
        margin:15px auto;
        .lists{
          margin-bottom: 15px;
          text-indent: 1.5em;
        }
        img{
          width:100%;
        }
      }
    }
  }
}

</style>
