<template>
  <transition>
    <div class="body">
      <Header />
      <nuxt class="container"/>
      <Footer />
      <BackTop />
    </div>
  </transition>
</template>
<script>
import Header from '../components/header';
import Footer from '../components/footer';
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
    };
  },
  head() {
    return {
      title: '福瑞至',
    };
  },
  mounted() {
    const _this = this;
    this.getRemFn();
    window.onresize = function() {
      _this.getRemFn();
    };
  },
  methods: {
    getRemFn() {
      const html = document.documentElement;
      let hWidth = window.screen.width / 10;
      hWidth = hWidth > 75 ? 100 : hWidth;
      html.style.fontSize = hWidth + 'px';
    },
  },
};
</script>
<style lang="less">
  body{
    margin-top: 100px !important;
  }
  @media screen and (max-width: 1023px) {
    .body{
      margin-top: 60px;
    }
  }
  @media screen and (max-width:750px){
    body,.body{
      margin-top: 50px !important;
    }
  }
</style>
