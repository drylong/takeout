<template>
  <div class="container">
    <!-- 头部 -->
    <div class="head" :style="headbg">
      <div class="head-top">
        <div class="logo">
          <img :src="loge" />
        </div>
        <div class="title">
          <h1>
            <img :src="pinpai" />粥品香坊（大运村）
          </h1>
          <h3>蜂鸟转送/38分钟送达</h3>
          <div class="discount">
            <p>
              <img :src="jian" />
              在线支付，满50减28，满100减20
            </p>
            <span>5个 ></span>
          </div>
        </div>
      </div>
      <div class="notice">
        <p>
          <img :src="gonggao" alt />周香坊秘制酱料工艺，采用现代化技术经立信制作送达所大三大所多所
        </p>
      </div>
    </div>
    <!-- 路由导航 -->
    <div class="router-box">
      <router-link to="/store/goods">
        <span @click="beAction(0)" :class="{active : index === 0}">商品</span>
      </router-link>
      <router-link to="/store/evaluate">
        <span @click="beAction(1)" :class="{active : index === 1}">评价</span>
      </router-link>
      <router-link to="/store/storedetail">
        <span @click="beAction(2)" :class="{active : index === 2}">商家</span>
      </router-link>
    </div>
    <!-- <div class="nav">
      <span v-for="(val, i) in navList" :key="i" @click="action(i)" :class="{active : index === i}">{{val}}</span>
    </div>-->
    <!-- 路由出口 -->
    <div class="main">
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <div class="foot">
      <div class="count">
        <span class="countafter">
          <img :src="shopcar" alt />
        </span>
        <span>￥0</span>
      </div>
      <div class="moreprice">另需配送费xxx元</div>
      <div class="startsend">￥20起送</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 头部数据 背景图
      headbg: {
        background:
          " url(" +
          require("@/assets/images/logo.jpg") +
          ") rgba(0, 0, 0, .7)  0 center",
        backgroundSize: "100% ",
        backgroundBlendMode: "multiply"
      },
      loge: require("@/assets/images/logo.jpg"),
      pinpai: require("@/assets/images/pinpai.png"),
      jian: require("@/assets/images/jian.png"),
      gonggao: require("@/assets/images/gonggao.png"),
      // nav数据
      navList: ["商品", "评价", "商家"],
      index: 0,

      // 尾部
      shopcar: require('@/assets/images/shopcar.svg'),
    };
  },
  methods: {
    beAction(i) {
      this.index = i;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  // 头部
  .head {
    height: 134px;
    .head-top {
      display: flex;
      justify-content: start;
      .logo {
        padding: 24px 16px 18px 24px;
        img {
          width: 64px;
        }
      }
    }
    .title {
      padding: 24px 0 0 0;
      h1 {
        font-weight: 700;
        color: #fff;
        font-size: 16px;
        line-height: 26px;
        img {
          height: 16px;
          vertical-align: middle;
          margin-top: -3px;
          margin-right: 6px;
        }
      }
      h3 {
        font-weight: 400;
        color: #ddd;
        font-size: 12px;
        line-height: 20px;
      }
      .discount {
        display: flex;
        justify-content: start;
        p {
          color: #ddd;
          font-size: 10px;
          line-height: 24px;
          width: 143px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          position: relative;
          img {
            width: 12px;
            vertical-align: middle;
            margin-top: -1px;
            margin-right: 3px;
          }
        }
        span {
          display: inline-block;
          width: 42px;
          height: 24px;
          background-color: rgba(0, 0, 0, 0.7);
          border-radius: 12px;
          text-align: center;
          font-size: 10px;
          line-height: 24px;
          margin-left: 0.9rem;
        }
      }
    }
    .notice {
      background-color: rgba(0, 0, 0, 0.5);
      height: 28px;
      padding: 0 12px;
      p {
        width: 310px;
        font-size: 10px;
        line-height: 28px;
        color: #ccc;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        img {
          height: 12px;
          vertical-align: middle;
          margin-top: -3px;
          margin-right: 3px;
        }
      }
    }
  }
  .router-box {
    background-color: #fff;
    height: 40px;
    border-bottom: 1px solid #D9DCE1;
    display: flex;
    justify-content: space-around;
    a {
      text-decoration: none;
      color: #4A535A;
      line-height: 40px;
    }
    .active{
      color: red;
    }
  }
  //中间主体
  .main {
    flex: 1;
    overflow: hidden;
    margin-bottom: 50px;
  }
  // 尾部
  .foot {
    position: fixed;
    display: flex;
    bottom: 0px;
    width: 100%;
    height: 50px;
    background-color: #141C27;

    .count {
      flex:1;
      text-align: right;
      color: #929196;
      font-weight: 700;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      position: relative;
      span {
        display: inline-block;
        width: 48px;
        text-align: center;
      }
    }
    .countafter {
      width: 43px;
      height: 43px;
      position: absolute;
      top: -10px;
      left: 7px;;
      background-color: #2B343D;
      border: 7px solid #141C27;
      border-radius: 50%;
      img {
        width: 32px;
        vertical-align: middle;
        margin-top: -3px;
      }
    }
    .moreprice {
      flex:1.5;
      margin: 12px 0;
      height: 26px;
      line-height: 26px;
      border-left: 1px solid #929196;
      color: #929196;
      font-size: 12px;
      text-indent: 1em;
    }
    .startsend {
      flex:1;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-weight: 700;
      color: #929196;
      background-color: #2B343B;
    }
  }
}
</style>