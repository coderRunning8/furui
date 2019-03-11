<template>
  <div class="z-footer">
    <div class="logo"></div>
    <div class="content">
      <ul class="list">
        <li @click="go('CARBON_COIN_SYSTEM')">
          <p>CARBON COIN SYSTEM</p>
          <p>碳币系统</p>
        </li>
        <li @click="go('NDUSTRIAL_ECOLOGY')">
          <p>INDUSTRIAL ECOLOGY</p>
          <p>产业生态</p>
        </li>
        <li @click="go('THE_CORE_SOLUTION')">
          <p>THE CORE SOLUTION</p>
          <p>核心解决方案</p>
        </li>
        <li @click="go('PRODUCTS_CENTER')">
          <p>PRODUCTS CENTER</p>
          <p>产品中心</p>
        </li>
      </ul>
      <ul class="list">
        <li @click="go('CASE_PRECIPITATION')">
          <p>CASE PRECIPITATION</p>
          <p>案例沉淀</p>
        </li>
        <li @click="go('COMPANY_PROFILE')">
          <p>COMPANY PROFILE</p>
          <p>企业概况</p>
        </li>
        <li @click="go('INFORMATION_CENTRE')">
          <p>INFORMATION CENTRE</p>
          <p>资讯中心</p>
        </li>
        <li @click="go('CONTACT_US')">
          <p>CONTACT US</p>
          <p>联系我们</p>
        </li>
      </ul>
    </div>
    <div class="brief">
      <h2>{{corporationMsg.companyName}}</h2>
      <p>
        <span class="lefImg index_57"></span>
        总部咨询电话：{{corporationMsg.phoneNumber}}
      </p>
      <p>
        <span class="lefImg index_58"></span>
        总部地址：{{corporationMsg.address}}
      </p>
      <p>
        <span class="lefImg index_59"></span>
        关注我们：
        <span class="imgBox pcImgBox" @mouseover="hoverInFn()" @mouseleave="hoverOutFn()">
            <span class="index_50"></span>
            <img :hidden="showFlag" class="wx" src="../assets/images/wx.jpg"/>
            <i :hidden="showFlag"></i>
        </span>
        <span class="imgBox mobileImgBox" @click="handleView">
          <span class="index_50"></span>
          <img :hidden="showFlag" class="wx" src="../assets/images/wx.jpg"/>
          <i :hidden="showFlag"></i>
        </span>
      </p>
      <p>{{corporationMsg.caseNumber}}</p>
    </div>
    <Modal v-model="visible" footer-hide class-name="ivu-modal-wrap" width="80%!important">
      <img src="../assets/images/wx.jpg"  v-if="visible" >
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showFlag: true,
      visible: false,
      corporationMsg: {},
    };
  },
  mounted() {
    this.getData(1, 1);
  },
  methods: {
    getData(current, size) {
      this.$axios.$get('/api/v1/home/company/query', {
        params: {
          current,
          size,
        },
      }).then(res => {
        if (res.code === 0) {
          this.corporationMsg = res.data.list[0];
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
    hoverInFn() {
      this.showFlag = false;
    },
    hoverOutFn() {
      this.showFlag = true;
    },
    handleView() {
      this.visible = true;
    },
    go(type) {
      if (type === 'CARBON_COIN_SYSTEM') {
        this.$router.push({ name: 'carbonCurrency' });
        return;
      }
      if (type === 'NDUSTRIAL_ECOLOGY') {
        this.$router.push({ name: 'industrialEcology' });
        return;
      }
      if (type === 'THE_CORE_SOLUTION') {
        this.$router.push({ name: 'lowCarbon' });
        return;
      }
      if (type === 'PRODUCTS_CENTER') {
        this.$router.push({ name: 'productCenter', query: { id: '48d195756bba4df58d4f649f945ca72a' } });
        return;
      }
      if (type === 'CASE_PRECIPITATION') {
        this.$router.push({ name: 'industrialPark' });
        return;
      }
      if (type === 'COMPANY_PROFILE') {
        this.$router.push({ name: 'companyProfile' });
        return;
      }
      if (type === 'INFORMATION_CENTRE') {
        this.$router.push({ name: 'information' });
        return;
      }
      if (type === 'CONTACT_US') {
        this.$router.push({ name: 'contactUs' });
        return;
      }
    },
  },
};
</script>
<style lang="less">
  @phone:~'only screen and(max-width:750px)';
  .z-footer{
    padding: 70px 30px;
    background-color: #F1F1F1;
    display: flex;
    justify-content: space-between;
    align-items:center;

    .logo{
      display: inline-block;
      vertical-align: top;
      width: 295px;
      height: 80px;
      background-image: url('../assets/images/index_Sprites.png');
      background-repeat: no-repeat;
      background-size: 330px 230px;
      background-position: -0px -65px;
      /*img{*/
        /*width: 100%;*/
      /*}*/
    }
    .content{
      display: inline-block;
      margin-left: 5%;
      width: 45%;
      min-height: 180px;
      ul{
        display: block;
        li{
          list-style: none;
          display: inline-block;
          width: 150px;
          margin-right: 50px;
          padding-bottom: 15px;
          position: relative;
          cursor: pointer;
          p{
            font-size: 12px;
            color: #343434;
          }
        }
        li:last-of-type{
          margin-right: 0;
        }
        li::before{
          position: absolute;
          content: "";
          width: 100px;
          height: 1px;
          background-color: #000;
          left: 0;bottom: 0;
        }
        li::after{
          position: absolute;
          content: "";
          width: 15px;
          height: 1px;
          background-color: #000;
          left: 110px;bottom: 0;
        }
      }
      ul:nth-of-type(2){
        margin-top: 60px;
      }
    }
    .brief{
      display: inline-block;
      vertical-align: top;
      width: 20%;
      h2{
        font-size: 16px;
        color: #343434;
        font-weight: normal;
      }
      p{
        font-size: 12px;
        color: #343434;
        margin-top: 10px;
        .lefImg{
          display: none;
        }
      }
      p:nth-of-type(1){
        margin-top: 40px;
      }
      p:nth-of-type(3){
        margin-top: 15px;
        img{
          vertical-align: middle;
          margin-left: 10px;
        }
        span{
          display: inline-block;
          position: relative;
          .wx{
            position: absolute;
            left: -105px;
            top: -270px;
            margin: auto;
            z-index: 2;
            border-radius: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.3);
          }
          i{
            position: absolute;
            width:0;
            height:0;
            border-width:25px 25px 0;
            border-style:solid;
            border-color:#fff transparent transparent;/*灰 透明 透明 */
            top: -28px;
            left: 0;right: 0;
            margin: auto;
            z-index: 3;
          }
        }
        .pcImgBox{
          display: inline-block;
          .index_50{
            height: 40px;
            width: 40px;
            background-image: url('../assets/images/index_Sprites.png');
            background-repeat: no-repeat;
            background-position: -384px -220px;
          }
        }
        .mobileImgBox{
          display: none;
        }
      }
      p:nth-of-type(4){
        margin-top: 40px;
      }
    }
  }
  @media screen and (max-width: 1023px) {
    .z-footer{
      padding: 20px 0;
      .logo{
        display: none;
      }
      .content {
        display: none;
      }
      .brief{
        display: block;
        width: 100%;
        box-sizing: border-box;
        text-align: left;
        padding: 0 20px;
        p:nth-of-type(1) {
          margin-top: 15px;
        }
        p{
          .lefImg{
            display: inline-block;
            width: 20px;
            vertical-align: -3px;
            margin-right: 10px;
          }
          .index_57{
            height: 20px;
            background-image: url('../assets/images/index_Sprites.png');
            background-repeat: no-repeat;
            background-size: 220px 165px;
            background-position: -124px -142px;
          }
          .index_58{
            height: 20px;
            background-image: url('../assets/images/index_Sprites.png');
            background-repeat: no-repeat;
            background-size: 220px 165px;
            background-position: -88px -141px;
          }
          .index_59{
            height: 20px;
            background-image: url('../assets/images/index_Sprites.png');
            background-repeat: no-repeat;
            background-size: 220px 165px;
            background-position: -160px -141px;
          }
          .index_50{
            height: 20px;
            width: 20px;
            background-image: url('../assets/images/index_Sprites.png');
            background-repeat: no-repeat;
            background-size: 220px 165px;
            background-position: -198px -111px;
          }
        }
        p:nth-of-type(3){
          .lefImg{
            margin-left: 0;
          }
          img{
            width: 26px;
          }
          .pcImgBox{
            display: none;
          }
          .mobileImgBox{
            display: inline-block;
          }
        }
        p:nth-of-type(4) {
          margin-top: 20px;
        }
      }
    }
  }
</style>
