<template>
  <div class="plan">
    <div class="list" v-for="(item,ind) in list" :key="ind">
      <div class="content">
        <h2 v-if="item.title != ''">{{item.title}}</h2>
        <h3 v-if="item.describe != ''">{{item.describe}}</h3>
        <h4 v-if="item.content != ''">{{item.content}}</h4>
        <img v-if="item.imgUrl != ''" v-lazy="item.imgUrl"/>
        <p v-for="(it,index) in item.notes" :key="index">{{it}}</p>
      </div>
    </div>
    <div class="list">
      <div class="content">
        <h2>智慧社区功能承载体：智慧社区APP</h2>
        <h3>智慧社区APP软件架构</h3>
        <img v-lazy="imgList.smart_18"/>
        <h3>智慧社区APP与竞品对比</h3>
        <img v-lazy="imgList.smart_19"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'low-carbon',
  head: {
    title: '智慧社区解决方案',
  },
  data() {
    return {
      imgList: {
        smart_18: require('../assets/images/smart_18.jpg'),
        smart_19: require('../assets/images/smart_19.jpg'),
      },
      list: [
        { title: '什么是智慧社区？', describe: '', content: '是指充分利用物联网、云计算、移动互联网等信息技术, 集成信息化、智能化社会管理与服务手段的人居形态。', imgUrl: require('../assets/images/smart_20.jpg'), notes: [] },
        { title: '智慧社区结构', describe: '', content: '智慧社区打造人与人的连接，成为每个人的健康经济分享平台。', imgUrl: require('../assets/images/smart_21.jpg'), notes: [] },
        { title: '智慧社区模型', describe: '', content: '', imgUrl: require('../assets/images/smart_22.jpg'), notes: [] },
        { title: '智慧社区技术支持', describe: '', content: '', imgUrl: require('../assets/images/smart_17.jpg'), notes: [] },
        { title: '智慧社区硬件设施：智慧魔盒', describe: '智慧魔盒优势：弱电集成成本比传统弱电箱降低30%-50%', content: '', imgUrl: require('../assets/images/smart_23.jpg'), notes: [] },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
  .plan{
    .list{
      padding: 60px 0;
      border-bottom: 1px solid #E1E1E1;
      .content{
        width: 1150px;
        margin: 0 auto;
        h2{
          font-size: 50px;
          padding: 10px 0;
          color: #333;
          font-weight: normal;
          text-align: center;
          position: relative;
        }
        h3{
          color: #808080;
          font-size: 26px;
          font-weight: normal;
          text-align: center;
          margin-top: 40px;
        }
        h4{
          color: #333;
          font-size: 0.14rem;
          font-weight: normal;
          text-align: center;
          margin-top: 40px;
        }
        img{
          width: 100%;
          display: block;
          margin: 40px auto;
        }
        p{
          text-align: left;
          color: #333;
          font-size: 18px;
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    @size:37.5;
    .plan{
      .list{
        padding: 30rem/@size 0;
        border-bottom: 1px solid #E1E1E1;
        .content{
          width: 90%;
          margin: 0 auto;
          h2{
            font-size: 23rem/@size;
            padding: 10rem/@size 0;
            color: #333;
            font-weight: normal;
            text-align: center;
            position: relative;
          }
          h3{
            color: #808080;
            font-size: 18rem/@size;
            font-weight: normal;
            text-align: center;
            margin-top: 20rem/@size;
          }
          h4{
            color: #333;
            font-size: 15rem/@size;
            font-weight: normal;
            text-align: center;
            margin-top: 20rem/@size;
          }
          img{
            width: 100%;
            display: block;
            margin: 20rem/@size auto;
          }
          p{
            text-align: left;
            color: #333;
            font-size: 18rem/@size;
          }
        }
      }
    }
  }
</style>
