<template>
  <div class="companyProfile">
    <div class="CPtwo">
      <p class="headline">企业文化</p>
      <div class="content">
        <p class="lists thick">社会公德重于家庭责任</p>
        <p class="lists thick">家庭责任高于企业效益</p>
        <p class="lists thick">企业效益大于个人利益</p>
        <p class="lists">
          所谓社会公德是指存在于社会群体中间的道德，是生活与社会中的人们为了我们群体的利益而约定俗成的我们应该做什么和不应该做什么的行为规范。
          所谓家庭责任则是指一个人为他所在家庭的正常运转所承担或应尽的各种义务。他们在本质上都是一个国家，一个民族或者一个群体，在历史长河中、
          在社会实践活动中积淀下来的道德准则，文化观念和思想传统。
          它对维系社会公共生活和调整人与人之间的关系具有重要作用。而所谓企业效益与个人利益则是社会公德与家庭责任的重要驱动力。四者之间相辅相成，互为源泉。
        </p>
        <p class="lists">
          福瑞至认为：在当今社会经济剧烈变革的大环境下，维护社会公德的稳定性和提高社会公德的约束力重于一切。在这个大前提下，社会公德重于家庭责任。
          那么，在企业与家庭之间，员工家庭的稳定，是企业效益稳定与增长的前提和重要条件，所以，家庭责任高于企业效益。
          企业效益的不断提高可以促使员工利益的最大化，在这个基础上，企业效益大于个人利益。
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
      title: '企业文化',
    };
  },
  data() {
    return {
    };
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
  @phone:~'only screen and (max-width:750px)';
.companyProfile{
  .CPtwo{
    margin: 150px auto 0;
    overflow: hidden;
    border-bottom: 1px solid #efefef;
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
      .thick{
        font-weight: bolder;
      }
    }
    @media @phone{
      margin:0;
      .headline{
        font-size: 23px;
      }
      .content{
        width:100%;
        font-size: 14px;
        padding:0 15px;
        margin:20px auto;
        .lists{
          margin-bottom: 10px;
          text-indent: 1.5em;
        }
      }
    }
  }
}

</style>
