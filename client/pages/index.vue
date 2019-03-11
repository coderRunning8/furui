<template>
  <div class="index">
    <div class="imgBox">
      <div class="swiper-container-header">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,ind) of bannerList" :key="ind">
            <img v-lazy="item.imageUrl">
            <!--<router-link to="/companyProfile" class="aboutUs" >了解我们<Icon type="ios-arrow-dropright" size="20"/></router-link>-->
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="brief">
      <div class="content">
        <h2>一生约简介</h2>
        <p>成都一生约信息技术有限公司由国内首个生活低碳产业互联网平台福瑞至孵化，是一家专注于通过建筑物及智慧社区功能 的系统升级，满足家族成员健康和安全需求的产业互联网企业。</p>
        <div class="image-text">
          <div class="box">
            <!--<img v-lazy="indexImg.index_08">-->
            <div class="ysyImg ysyImg_01"></div>
            <h3>住户变商户</h3>
            <p>利用大数据，对业主进行分析，进行相关内容推送并在此基础上形成</p>
          </div>
          <div class="box">
            <!--<img v-lazy="indexImg.index_10">-->
            <div class="ysyImg ysyImg_02"></div>
            <h3>高楼变村落</h3>
            <p>通过一生约的链接，使高楼里的人形成像村里人一样的关系</p>
          </div>
          <div class="box">
            <!--<img v-lazy="indexImg.index_12">-->
            <div class="ysyImg ysyImg_03"></div>
            <h3>物管变村长</h3>
            <p>利用一生约的共享经济平台，物管可以从社区O2O交易,医疗</p>
          </div>
        </div>
        <router-link to="/alwaysAppointment">查看更多<Icon type="ios-arrow-dropright" size="20"/></router-link>
      </div>
      <video class="videoImg" :poster="indexImg.videoUrl" v-if="videoStart" autoplay loop src="http://static.yishengyue.cn/ysyxcnew" controls="controls" controlslist="nodownload">您的浏览器不支持 video 标签。</video>
    </div>
    <div class="industry">
      <h2>产业生态</h2>
      <div class="industryBox">
        <div class="box" @click="go('现代农业')">
          <img v-lazy="indexImg.index_19">
          <div class="layer"><span>现代农业</span></div>
        </div>
        <div class="box" @click="go('智慧能源')">
          <img v-lazy="indexImg.index_21">
          <div class="layer"><span>智慧能源</span></div>
        </div>
        <div class="box" @click="go('智慧社区')">
          <img v-lazy="indexImg.index_25">
          <div class="layer"><span>智慧社区</span></div>
        </div>
        <div class="box" @click="go('大健康')">
          <img v-lazy="indexImg.index_26">
          <div class="layer"><span>大健康</span></div>
        </div>
      </div>
    </div>
    <div class="videoBox">
      <h2>一生约家族健康赋能平台</h2>
      <video class="videoImg" :poster="indexImg.videoUrl" v-if="!videoStart" src="http://static.yishengyue.cn/ysyxcnew" controls="controls" controlslist="nodownload">您的浏览器不支持 video 标签。</video>
    </div>
    <div class="plan">
      <h2>核心解决方案</h2>
      <div class="industryBox">
        <div class="box" @click="goSolution('lowCarbon')">
          <img v-lazy="indexImg.index_53">
          <p>低碳社区解决方案</p>
        </div>
        <div class="box" @click="goSolution('greenPlan')">
          <img v-lazy="indexImg.index_54">
          <p>绿色工业园解决方案</p>
        </div>
        <div class="box" @click="goSolution('energyLnternet')">
          <img v-lazy="indexImg.index_55">
          <p>能源互联网改造方案</p>
        </div>
        <div class="box" @click="goSolution('characteristicTown')">
          <img v-lazy="indexImg.index_56">
          <p>特色小镇方案</p>
        </div>
        <div class="box" v-show="morePlan" @click="goSolution('smartCommunityPlan')">
          <img v-lazy="indexImg.index_58">
          <p>智慧社区解决方案</p>
        </div>
        <div class="box" v-show="morePlan" @click="goSolution('motherLove')">
          <img v-lazy="indexImg.index_57">
          <p>妈咪爱室内空气方案</p>
        </div>
      </div>
      <div class="checkMore" @click="lookMorePlan">查看更多</div>
    </div>
    <div class="know">
      <div class="content">
        <img v-lazy="indexImg.index_30">
        <p>福瑞至控股有限公司，中国首个生活低碳产业互联网赋能平台，2012年在全球率先提出“让地球低一度”的企业愿景。致力搭建一个围绕水、空气、安全、人体数据五个生活维度出发的多生共赢商业生态系统，并通过股权投资、产业整合、顶层设计、资源配置、互联网AI工具赋能合作伙伴，助力其依托福瑞至平台的资本模式孵化上市，通过互联网的手段让节能、环保、大健康产业的生活低碳产品走进千家万户，让每一个转型升级的企业家能寻找到适宜的当地推广的福瑞至“生活低碳+”产品。</p>
        <router-link to="companyProfile">了解我们<Icon type="ios-arrow-dropright" size="20"/></router-link>
      </div>
    </div>
    <div class="news">
      <h2 v-if="newsLinks.length > 0">新闻资讯</h2>
      <div class="newsBox" v-if="newsLinks.length > 0">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,ind) of newsLinks" :key="ind" @click="goNews(item.id)">
              <img v-lazy="item.homeImgUrl">
              <h3>{{item.title}}</h3>
              <span>{{item.createTime}}</span>
              <p>{{item.subtitle}}</p>
            </div>
          </div>
          <div class="swiper-button-next" style="outline: none "></div>
          <div class="swiper-button-prev" style="outline: none "></div>
        </div>
      </div>
      <div class="mobileBox">
        <div class="box" v-for="(item,ind) of newsLinks" :key="ind" @click="goNews(item.id)">
          <div>
            <img v-lazy="item.homeImgUrl">
          </div>
          <div>
            <h3>{{item.title}}</h3>
            <span>{{item.createTime}}</span>
            <p>{{item.subtitle}}</p>
          </div>
        </div>
        <router-link class="checkMore" to="/information">查看更多<Icon type="ios-arrow-dropright" size="20"/></router-link>
      </div>
    </div>
    <div class="link">
      <Tabs value="name1">
        <TabPane label="合作机构" class="linkTitle" name="name1">
          <span @click="goLinks(item.url)" class="links" v-for="(item,ind) of teamworkLinks" :key="ind" target="view_window">{{item.linkName}}</span>
          <Page class="Page" v-show="teamworkPage.pageTotal > 20" :page-size="friendlyPage.pageSize" :total="teamworkPage.pageTotal" size="small" @on-change="pageChange1"/>
        </TabPane>
        <TabPane label="友情链接" name="name2" class="linkTitle">
          <span @click="goLinks(item.url)" class="links" v-for="(item,ind) of friendlyLinks" :key="ind" target="view_window">{{item.linkName}}</span>
          <Page class="Page" v-show="friendlyPage.pageTotal > 20" :page-size="friendlyPage.pageSize" :total="friendlyPage.pageTotal" size="small" @on-change="pageChange2"/>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  data() {
    return {
      value: 0,
      morePlan: false, // 移动端，是否显示更多解决方案
      videoStart: false,
      friendlyLinks: [], // 友情链接
      friendlyPage: {
        pageNo: 1,
        pageSize: 20,
        pageTotal: 0,
      },
      newsLinks: [], // 新闻资讯
      newPage: {
        pageNo: 1,
        pageSize: 100,
        pageTotal: 0,
      },
      teamworkLinks: [], // 合作伙伴
      teamworkPage: {
        pageNo: 1,
        pageSize: 20,
        pageTotal: 0,
      },
      bannerList: [], // banner列表
      bannerPage: {
        pageNo: 1,
        pageSize: 10,
        pageTotal: 0,
      },
      indexImg: {
        banner_01: 'http://static.yishengyue.cn/banner_01.jpg',
        banner_02: 'http://static.yishengyue.cn/banner_02.jpg',
        banner_03: 'http://static.yishengyue.cn/index_03.jpg',
        videoUrl: require('../assets/images/vid.jpg'),
        index_19: require('../assets/images/index_19.jpg'),
        index_21: require('../assets/images/index_21.jpg'),
        index_25: require('../assets/images/index_25.jpg'),
        index_30: require('../assets/images/index_30.png'),
        index_26: require('../assets/images/index_26.jpg'),
        index_53: require('../assets/images/index_53.jpg'),
        index_54: require('../assets/images/index_54.jpg'),
        index_55: require('../assets/images/index_55.jpg'),
        index_56: require('../assets/images/index_56.jpg'),
        index_57: require('../assets/images/index_57.jpg'),
        index_58: require('../assets/images/index_58.jpg'),
      },
    };
  },
  asyncData() {
    return { value: 0 };
  },
  components: {
  },
  head: {
    title: '福瑞至',
  },
  mounted() {
    const hWidth = window.screen.width;
    if (hWidth > 750) {
      this.videoStart = true;
      this.getNewsList(this.newPage.pageNo, this.newPage.pageSize);
    } else {
      this.videoStart = false;
      this.getNewsList(this.newPage.pageNo, 5);
    }
    this.getList(this.friendlyPage.pageNo, this.friendlyPage.pageSize, 'LINKS');
    this.getList(this.friendlyPage.pageNo, this.friendlyPage.pageSize, 'COOPERATIVE_INSTITUTION');
    this.getBannerList(this.bannerPage.pageNo, this.bannerPage.pageSize);
  },
  methods: {
    lookMorePlan() {
      this.morePlan = !this.morePlan;
    },
    goSolution(name) {
      this.$router.push({ name });
    },
    goLinks(url) {
      // const first = url.substring(0, 1);
      // if (first === '/') {
      //   this.$router.push({ path: url, query: { id } });
      // } else {
      //   window.open(url);
      // }
      window.open(url);
    },
    go(type) {
      if (type === '现代农业') {
        this.$router.push({ name: 'modernAgriculture' });
        return;
      }
      if (type === '智慧能源') {
        this.$router.push({ name: 'smartEnergy' });
        return;
      }
      if (type === '智慧社区') {
        this.$router.push({ name: 'smartCommunity' });
        return;
      }
      if (type === '大健康') {
        this.$router.push({ name: 'bigHealth' });
        return;
      }
    },
    pageChange2(pageNo) {
      this.getList(pageNo, this.friendlyPage.pageSize, 'LINKS');
    },
    pageChange1(pageNo) {
      this.getList(pageNo, this.teamworkPage.pageSize, 'COOPERATIVE_INSTITUTION');
    },
    // 友情链接和合作机构
    getList(current, size, linkType) {
      this.$axios.$get('/api/v1/home/links/query', {
        params: {
          current,
          size,
          linkType,
        },
      }).then(res => {
        if (res.code === 0) {
          if (linkType === 'LINKS') {
            this.friendlyLinks = res.data.list;
            this.friendlyPage.pageTotal = res.data.totalCount;
            return;
          }
          if (linkType === 'COOPERATIVE_INSTITUTION') {
            this.teamworkLinks = res.data.list;
            this.teamworkPage.pageTotal = res.data.totalCount;
            return;
          }
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
    // 获取banner列表
    getBannerList(current, size) {
      this.$axios.$get('/api/v1/home/banner/query', {
        params: {
          current,
          size,
        },
      }).then(res => {
        if (res.code === 0) {
          this.bannerList = res.data.list;
          this.bannerPage.pageTotal = res.data.totalCount;
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
    // 获取新闻列表
    getNewsList(current, size) {
      this.$axios.$get('/api/v1/home/news/query', {
        params: {
          current,
          size,
        },
      }).then(res => {
        if (res.code === 0) {
          this.newsLinks = res.data.list;
          this.newPage.pageTotal = res.data.totalCount;
          setTimeout(() => {
            const Swiper1 = new Swiper('.swiper-container', {
              slidesPerView: 4,
              spaceBetween: 30,
              slidesPerGroup: 4,
              loop: false,
              loopFillGroupWithBlank: true,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            });
            if (res.data.list.length > 0 && res.data.list.length < 5) {
              Swiper1.navigation.$nextEl.css('display', 'none');
              Swiper1.navigation.$prevEl.css('display', 'none');
            }
            const Swiper2 = new Swiper('.swiper-container-header', {
              autoplay: true, // 可选选项，自动滑动
              pagination: {
                el: '.swiper-pagination',
              },
              observer: true,
              observeParents: true,
            });
            console.debug(Swiper2);
          }, 100);
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
    // 前往新闻详情
    goNews(id) {
      this.$router.push({ name: 'informationInfo', query: { id } });
    },
  },
};
</script>
<style>
  .swiper-pagination{
    z-index: 3;
  }
</style>
<style  lang="less" scoped>
.link .ivu-tabs-nav .ivu-tabs-tab {
  color: #838383;
  font-size: 30px;
  padding: 20px 0;
  text-align: left;
}
.link .ivu-tabs-nav .ivu-tabs-tab-active {
  border-color: #fff;
  color: #000;
}
.Page{
  text-align: center;
}
.swiper-container-header{
  width: 100%;
  height: 100%;
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    cursor: pointer;
    img{
      width: 100%;
      height: 90vh;
    }
  }
}
@media screen and (max-width: 1023px) {
  .swiper-container-header{
    .swiper-slide {
      img{
        width: 100%;
        height: 60vw;
      }
    }
  }
}
.swiper-container {
  width: 100%;
  height: 100%;
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    cursor: pointer;
    img{
      width: 100%;
      height: 12vw;
    }
    h3{
      text-align: left;
      color: #333;
      font-size: 16px;
      margin: 20px 10%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    span,p{
      display: block;
      text-align: left;
      color: #999;
      font-size: 12px;
      margin: 0 10%;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
    }
  }
}

.swiper-button-disabled{
  display:none;
}
</style>
<style lang="less" scoped>
.index{
  .imgBox{
    position: relative;
    overflow: hidden;
    img{
      display: block;
      width: 100%;
    }
    .aboutUs{
      display: none;
      text-align: center;
      background-color: rgba(0,0,0,0.3);
      font-size: 14px;
      color: #fff;
      width: 50%;
      min-width: 220px;
      height: 40px;
      line-height: 40px;
      position: absolute;
      bottom: 30px;left: 0;right: 0;
      margin: auto;
      i{
        margin-left: 10px;
      }
    }
  }
  .brief{
    margin-top: 50px;
    width: 100%;
    box-sizing: border-box;
    padding: 70px 50px;
    background-color: #F7F7F7;
    position: relative;
    overflow: hidden;
    .content{
      width: 45%;
      h2{
        color: #015797;
        font-size: 26px;
      }
      p{
        margin-top: 60px;
        color: #5F5F5F;
        font-size: 16px;
        line-height: 30px;
      }
      .image-text{
        margin-top: 86px;
        .box{
          display: inline-block;
          width: 25%;
          vertical-align: top;
          .ysyImg{
            margin: 0 auto;
            width: 142px;
            height: 48px;
          }
          .ysyImg_01{
            background-image: url('../assets/images/index_Sprites.png');
            background-repeat: no-repeat;
            background-position: 0 -283px;
          }
          .ysyImg_02{
            background-image: url('../assets/images/index_Sprites.png');
            background-repeat: no-repeat;
            background-position: 0 -219px;
          }
          .ysyImg_03{
            background-image: url('../assets/images/index_Sprites.png');
            background-repeat: no-repeat;
            background-position: -158px -218px;
          }
          h3{
            text-align: center;
            margin-top: 25px;
            font-size: 14px;
            color: #243755;
          }
          p{
            font-size: 12px;
            color: #888888;
            line-height: 20px;
            margin-top: 25px;
          }
        }
        :nth-of-type(2){
          margin: 0 50px;
        }
      }
      a{
        display: block;
        text-align: center;
        background-color: #006EBD;
        font-size: 14px;
        color: #fff;
        width: 200px;
        min-width: 100px;
        height: 50px;
        line-height: 50px;
        margin: 70px auto;
        i{
          margin-left: 10px;
        }
      }
      a:hover{
        background-color: #006AAA;
      }
    }
    .videoImg{
      position: absolute;
      width: 45%;
      top: 150px;
      right: 5%;
    }
  }
  .videoBox{
    display: none;
    position: relative;
    padding: 0 20px;
    h2{
      text-align: center;
      font-size: 16px;
      color: #fff;
      position: absolute;
      top: 20px;
      left: 0;right: 0;
      margin: auto;
    }
    .videoImg{
      width: 100%;
      height: auto;
    }
  }
  .industry{
    max-width: 1200px;
    margin: 70px auto 0;
    padding: 0 90px;
    h2{
      font-size: 40px;
      line-height: 140px;
      color: #015797;
      border-bottom: 1px solid #202020;
      position: relative;
      text-align: center;
      font-weight: normal;
    }
    h2::after{
      content: "";
      width: 400px;
      height: 10px;
      position: absolute;
      bottom: 0;left: 0;right: 0;
      margin: auto;
      background-color: #006EBD;
    }
    .industryBox{
      padding-top: 90px;
      overflow: hidden;
      .box{
        float: left;
        margin-bottom: 70px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        position: relative;
        cursor: pointer;
        width: 48%;
        height: 40vh;
        box-sizing: border-box;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
        .layer{
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;top:0;
          background-color: rgba(0,0,0,.3);
          text-align: center;
          span{
            position: absolute;
            width: 100%;
            text-align: center;
            height: 53px;
            line-height: 53px;
            left: 0;right: 0;top: 0;bottom: 0;
            margin: auto;
            font-size: 36px;
            color: #fff;
          }
        }
        p{
          font-size: 16px;
          color: #343434;
          text-align: center;
          margin-top: 30px;
        }
      }
      .box:nth-of-type(2n){
        float: right;
      }
    }
    a{
      display: block;
      text-align: center;
      background-color: #006EBD;
      font-size: 14px;
      color: #fff;
      width: 50%;
      height: 80px;
      line-height: 80px;
      margin: 70px auto;
      i{
        margin-left: 10px;
      }
    }
    a:hover{
      background-color: #006AAA;
    }
  }
  .plan{
    display: none;
  }
  .know{
    background-color: #F7F7F7;
    .content{
      max-width: 1200px;
      text-align: center;
      padding: 70px;
      margin: 0 auto;
      img{
        width: 400px;
        height: 90px;
      }
      p{
        width: 100%;
        margin: 0 auto;
        color: #343434;
        font-size: 14px;
        line-height: 20px;
        margin-top: 60px;
        word-break: break-all;
      }
      a{
        display: block;
        background-color: #006EBD;
        font-size: 14px;
        color: #fff;
        width: 200px;
        min-width: 100px;
        height: 50px;
        line-height: 50px;
        margin: 0 auto;
        margin-top: 70px;
        i{
          margin-left: 10px;
        }
      }
      a:hover{
        background-color: #006AAA;
      }
    }
  }
  .link{
    max-width: 1200px;
    padding: 30px 0;
    margin: 0 auto;
    .linkTitle{
      padding: 0 3% 10px;
      span{
        cursor: pointer;
        font-size: 14px;
        color: #323232;
        margin-right: 20px;
      }
      span:hover{
        color: #000;
      }
    }
  }
  .news{
    max-width: 1200px;
    margin: 0 auto;
    padding: 70px 0 0;
    h2{
      font-size: 40px;
      line-height: 140px;
      color: #015797;
      border-bottom: 1px solid #202020;
      position: relative;
      text-align: center;
      font-weight: normal;
    }
    h2::after{
      content: "";
      width: 400px;
      height: 10px;
      position: absolute;
      bottom: 0;left: 0;right: 0;
      margin: auto;
      background-color: #006EBD;
    }
    .nobody{
      padding-top: 100px;
      text-align: center;
      font-size: 24px;
      color: #333;
    }
    .newsBox{
      padding: 60px 0;
      overflow: hidden;
      .box{
        width: 22%;
        float: left;
        margin-left: 4%;
        img{
          width: 100%;
        }
        h3{
          margin: 50px 0;
          color: #333;
          font-size: 16px;
        }
        span,p{
          color: #999;
          font-size: 12px;
        }
      }
      .box:first-of-type{
        margin-left: 0;
      }
    }
    .mobileBox{
      display: none;
      margin-top: 20px;
      .box{
        display: flex;
        display: -webkit-flex;
        margin-bottom: 10px;
        div:first-of-type{
          width: 33%;
          img{
            width: 80%;
            height: 20vw;
          }
        }
        div:last-of-type{
          width: 67%;
          h3{
            font-size: 16px;
            margin-bottom: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            /*! autoprefixer: off */
            -webkit-box-orient: vertical;
            /* autoprefixer: on */
          }
          span{
            color: #999;
            font-size: 12px;
          }
          p{
            font-size: 12px;
            color: #666;
            margin-top: 5px;
            overflow:hidden;
            text-overflow:ellipsis;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2;
            /*! autoprefixer: off */
            -webkit-box-orient: vertical;
            /* autoprefixer: on */
          }
        }
      }
    }
  }
  @media screen and (max-width: 1023px) {
    .imgBox{
      .aboutUs{
        display: block;
      }
    }
    .brief{
      display: none;
    }
    .industry{
      margin-top: 0;
      padding: 0 20px;
      h2{
        line-height: normal;
        padding-top: 40px;
        padding-bottom: 20px;
        font-size: 17px;
        border-bottom: 1px solid rgba(130,130,130,0.6);
      }
      h2::after{
        content: "";
        width: 200px;
        height: 2px;
        position: absolute;
        bottom: 0;left: 0;right: 0;
        margin: auto;
        background-color: #006EBD;
      }
      .industryBox{
        padding-top: 20px;
        display: block;
        .box{
          width: 48%;
          height: 40vw;
          float: left;
          padding: 0;
          margin-bottom: 20px;
          .layer{
            span{
              font-size: 18px;
            }
          }
        }
      }
      a{
        width: 70%;
        margin: 20px auto;
      }
    }
    .videoBox{
      display: block;
    }
    .plan{
      display: block;
      margin-top: 0;
      padding: 0 20px;
      text-align: center;
      h2{
        line-height: normal;
        padding-top: 40px;
        padding-bottom: 20px;
        font-size: 17px;
        border-bottom: 1px solid rgba(130,130,130,0.6);
        color: #015797;
        font-weight: normal;
        position: relative;
      }
      h2::after{
        content: "";
        width: 200px;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background-color: #006EBD;
      }
      .industryBox{
        padding-top: 20px;
        display: block;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        position: relative;
        cursor: pointer;
        .box{
          width: 46%;
          height: 40vw;
          float: left;
          padding: 0;
          margin-bottom: 20px;
          img{
            width: 100%;
            height: 30vw;
          }
          p{
            line-height: 50px;
          }
          .layer{
            span{
              font-size: 18px;
            }
          }
        }
      }
      .checkMore{
        display: block;
        background-color: #006ebd;
        width: 70%;
        line-height: 40px;
        margin: 0 auto;
        color: #fff;
      }
    }
    .know{
      display: none;
    }
    .news {
      width: 90%;
      margin: 0 auto;
      padding: 0;
      h2{
        line-height: normal;
        padding-top: 40px;
        padding-bottom: 20px;
        font-size: 17px;
        border-bottom: 1px solid rgba(130,130,130,0.6);
      }
      h2::after{
        content: "";
        width: 200px;
        height: 2px;
        position: absolute;
        bottom: 0;left: 0;right: 0;
        margin: auto;
        background-color: #006EBD;
      }
      .newsBox{
        display: none;
      }
      .mobileBox{
        display: block;
        margin-top: 20px;
        .checkMore{
          text-align: center;
          display: block;
          background-color: #006ebd;
          width: 70%;
          line-height: 40px;
          margin: 10px auto;
          color: #fff;
        }
        .box{
          display: flex;
          display: -webkit-flex;
          margin-bottom: 10px;
          overflow: hidden;
          img{
            width: 100%;
          }
          div:first-of-type{
            width: 33%;
            img{
              width: 80%;
            }
          }
          div:last-of-type{
            width: 67%;
            h3{
              font-size: 16px;
              margin-bottom: 10px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              /*! autoprefixer: off */
              -webkit-box-orient: vertical;
              /* autoprefixer: on */
            }
            span{
              color: #999;
              font-size: 12px;
            }
            p{
              font-size: 12px;
              color: #666;
              margin-top: 5px;
              overflow:hidden;
              text-overflow:ellipsis;
              display:-webkit-box;
              -webkit-box-orient:vertical;
              -webkit-line-clamp:2;
              /*! autoprefixer: off */
              -webkit-box-orient: vertical;
              /* autoprefixer: on */
            }
          }
        }
      }
    }
    .link{
      max-width: 1200px;
      padding: 0 0;
    }
  }
}
</style>
