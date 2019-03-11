<template>
  <div class="companyProfile">
    <div class="CPthree">
      <p class="headline">组织架构</p>
      <div class="content">
        <img v-lazy="img.cp_02"/>
      </div>
      <p class="headline">福瑞至控股各部门职能</p>
      <div class="content">
        <p class="lists"><span class="head">董事长办公室：</span>事长日程管理；辅助董事长对接商务资源、开展商务洽谈、项目前期对接；董事长商务、项目资源与经营层对接及协调落地。</p>
        <p class="lists"><span class="head">品牌中心：</span>公司品牌塑造、品牌建设；业VI系统设计与应用管理；品牌公关活动、媒体发布、及危机处理；司网站设计维护及下属企业网站设计指导</p>
        <p class="lists"><span class="head">政策研究中心：</span>碳环保政策研究，定期向公司内企业发布政策消息；策划公司及下属企业可申请的政策方案，并协助申请办理；碳环保政府部门的公共关系维系。</p>
        <p class="lists"><span class="head">技术中心：</span>找符合公司发展的相关产品、技术和服务，并达成商务合作；规范统一公司所有产品技术和服务的应用标准和价格体系；协调产品、技术和服务提供商与公司内企业的合作协调；及时为公司下属企业提供相关信息。</p>
        <p class="lists"><span class="head">运营中心：</span>包括经营、财务、审计、法务四个部门。</p>
        <p class="lists"><span class="head">四川人力行政中心：</span>一公司人力资源及行政管理的标准和各项制度；四川办公人员的人力资源配置、提升、稳定和发展服务；责成都办公室商务接待、行政管理等工作。</p>
        <p class="lists"><span class="head">北京人力行政中心：</span>北京地区办公人员的人力资源配置、提升、稳定和发展服务；责北京办公室商务接待、行政管理等工作。</p>
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
      title: '组织架构',
    };
  },
  data() {
    return {
      img: {
        cp_02: require('../assets/images/cp_02.png'),
      },
    };
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
  .companyProfile{
    .CPthree{
      margin: 150px auto 0;
      overflow: hidden;
      border-bottom: 0.01rem solid #d2d2d2;
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
        img{
          width: 100%;
        }
        .lists{
          margin-bottom: 20px;
          .head{
            font-weight: bold;
          }
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    @size:37.5;
    .companyProfile{
      .CPthree{
        margin: 80rem/@size auto 0;
        overflow: hidden;
        border-bottom: 1px solid #d2d2d2;
        .headline{
          font-size: 23rem/@size;
          color: #333;
          text-align: center;
        }
        .content{
          width: 90%;
          text-align: left;
          font-size: 20rem/@size;
          color: #333;
          margin: 60rem/@size auto;
          img{
            width: 100%;
          }
          .lists{
            margin-bottom: 20rem/@size;
            .head{
              font-weight: bold;
              font-size: 18rem/@size;
            }
          }
        }
      }
    }
  }
</style>
