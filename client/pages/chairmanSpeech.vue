<template>
  <div class="companyProfile">
    <div class="CPfour">
      <p class="headline">董事长致辞</p>
      <div class="content">
        <img v-lazy="img.cp_03"/>
      </div>
      <div class="content">
        <p class="lists">福瑞至控股有一个愿景：为蓝天，为明天，我们一起，让地球低一度。</p>
        <p class="lists">
          或许有人说，作为一名商人，在商言商，实实在在做事就好，谈使命愿景说现实梦想，这是件多么不可思议，甚至像忽悠的事情。然而，我们这群做企业的人真的只是一名没有梦想只追逐利益的商人吗？
        </p>
        <p class="lists">
          我们在思考：我们是谁？我们生活的目的是什么？我们追求的幸福是什么？难道只是为了香车豪宅？我们与世界的关系是什么？究竟什么是我们继续向上生长的力量？我们向上生长的力量来源是什么？
        </p>
        <p class="lists">
          遇见福瑞至天然冷媒之前，我自己已做多年事业，小有成就。同时做一名自在的投资人，也看过许多投资项目。偶然投资了天然冷媒后，发现我们的产品可以消灭破坏人类环境头号公敌—氟利昂时，我抑制不住内心的兴奋，隐隐感觉到，或许这就是我生命中的梦想，我遇见了向上生长的力量。从此，我从投资人转为操盘者，以天然冷媒为基础，创办了福瑞至控股，并一直为之奋斗并快乐着。
        </p>
        <p class="lists">
          很多人疑惑我为什么要这么折腾？在中国赚钱其实不难，当投资人也乐得悠闲，在中国做环保却件苦差事，但于我而言，这是一件极具挑战、极具冒险的事业，但同时却又极富快乐感、极富意义的一件事情。人生难得一次冒险，难得做一件有意义的事情。所以，我无悔。
        </p>
        <p class="lists">
          中国古贤说“发上等愿，结中等缘，享下等福。”或许因为我们使命愿景太大太“上等”，甚至遥不可及，所以上帝怜悯我。所以梦想让我成为生命的幸运儿，创造生命中的奇迹：
        </p>
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
      title: '董事长致辞',
    };
  },
  data() {
    return {
      img: {
        cp_03: require('../assets/images/cp_03.png'),
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
    .CPfour{
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
    @media @phone{
      .CPfour{
        margin: 20px auto 0;
        border-bottom: 1px solid #efefef;
        .headline{
          font-size: 23px;
          margin-top:20px;
        }
        .content{
          width:100%;
          padding:0 15px;
          font-size: 16px;
          margin:20px auto;
          img{
            width:100%;
            display: block;
          }
          p{
            text-indent: 1.5em;
          }
          .lists{
            margin-bottom: 10px;
          }
        }
      }
    }
  }

</style>
