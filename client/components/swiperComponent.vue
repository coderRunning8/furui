<template>
  <div class="news">
    <div class="newsBox">
      <div class="swiper-container" v-if="dataList.length > 0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,ind) of dataList" :key="ind" @click="goCompany(item.url,item.id)">
          <img :src="item.memberImageUrl">
          <p>{{item.memberName}}</p>
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      <div class="nobody" v-else>
        暂无数据
      </div>
    </div>
    <div class="mobileBox">
      <!--<div class="box" v-for="(item,ind) of dataList" :key="ind" @click="goCompany(item.url,item.id)">-->
        <!--<img :src="item.memberImageUrl">-->
        <!--<p>{{item.memberName}}</p>-->
      <!--</div>-->
      <div class="swiper-container-mobile" v-if="dataList.length > 0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,ind) of dataList" :key="ind" @click="goCompany(item.url,item.id)">
            <img :src="item.memberImageUrl">
            <p>{{item.memberName}}</p>
          </div>
        </div>
      </div>
      <div class="nobody" v-else>
        暂无数据
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  props: {
    dataList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  components: {
  },
  mounted() {
    setTimeout(() => {
      const swiper = new Swiper('.swiper-container', {
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
      if (this.dataList.length < 5) {
        swiper.navigation.$nextEl.css('display', 'none');
        swiper.navigation.$prevEl.css('display', 'none');
      }

      const Swiper2 = new Swiper('.swiper-container-mobile', {
        autoplay: true, // 可选选项，自动滑动
        pagination: {
          el: '.swiper-pagination',
        },
        observer: true,
        observeParents: true,
      });
      console.debug(Swiper2);
    }, 100);
  },
  methods: {
    goCompany(url, id) {
      const first = url.substring(0, 1);
      if (first === '/') {
        this.$router.push({ path: url, query: { id } });
      } else {
        window.open(url);
      }
    },
  },
};
</script>
<style  lang="less" scoped>
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    cursor: pointer;
    img{
      width: 100%;
      height: 10vw;
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
  .swiper-button-disabled{
    display:none;
  }
  @media screen and (max-width: 750px) {
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      cursor: pointer;
      padding: 0 2%;
      img{
        width: 100%;
        height: 50vw;
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
        text-align: center;
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
</style>
<style lang="less" scoped>
  .newsBox{
    display: block;
    padding-top: 0.9rem;
    overflow: hidden;
    .nobody{
      text-align: center;
      font-size: 0.18rem;
      color: #333;
    }
  }
  .mobileBox{
    display: none;
  }
  @media screen and (max-width: 750px) {
    @size:37.5;
    .newsBox{
      display: none;
    }
    .mobileBox{
      display: block;
      .box{
        width: 100%;
        margin: 0 auto;
        img{
          width: 100%;
        }
        p{
          padding: 10rem/@size 0;
          text-align: center;
          font-size: 15rem/@size;
        }
      }
    }
  }
</style>
