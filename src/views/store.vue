<template>
  <div class="container">
    <!-- 头部 -->
    <div
      class="head"
      :style="{background: 'url(' + headData.avatar + ') rgba(0, 0, 0, .6)  center center no-repeat',
                                backgroundSize : ' 100%' }"
      v-if="headData.supports"
    >
      <div class="head-top">
        <div class="logo">
          <img :src="headData.avatar" />
        </div>
        <div class="title">
          <h1>
            <img :src="pinpai" />
            {{headData.name}}
          </h1>
          <h3>{{headData.description}}/{{headData.deliveryTime}}分钟送达</h3>
          <div class="discount">
            <p v-if="headData.supports">
              <img :src="jian" />
              {{headData.supports[0].description}}
            </p>
            <span>{{headData.supportsLength}}个 ></span>
          </div>
        </div>
      </div>
      <div class="notice">
        <p>
          <img :src="gonggao" alt />
          {{headData.bulletin}}
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
    <div class="foot" @click="shopcarF = !shopcarF">
      <div class="count">
        <span class="countafter">
          <img :src="shopcar" alt />
        </span>
        <span class="zong">￥{{$store.getters.zongCount}}</span>
      </div>
      <div class="moreprice">另需配送费{{headData.deliveryPrice}}元</div>
      <div class="startsend" v-show="$store.getters.zongCount < headData.minPrice">￥{{headData.minPrice}}起送</div>
      <div class="startsend" v-show="$store.getters.zongCount > headData.minPrice">去结算</div>
    </div>
    <!-- 购物车 -->
    <div class="shopcar" v-show="shopcarF" @click="shopcarF = !shopcarF">
      <div class="foods">
        <p class="foods-title">搜索大所大所大所大所搜索大所大所大所大所搜索大所大所大所大所多</p>
        <div class="warp">
          <ul class="content">
            <li v-for="(val, i) in this.$store.getters.foodsList" :key="i" :id="i">
              <div class="products">
                <div class="pimg">
                  <img :src="val.image" alt />
                </div>
                <div class="dec">
                  <p class="name">{{val.name}}</p>
                  <p class="msg">{{val.description}}</p>
                  <p class="state">月售{{val.sellCount}}份好评率{{val.rating}}%</p>
                  <p class="price" v-if="$store.state.foodsList[i]">
                    ￥
                    <span class="nowprice">{{val.price}}</span>
                    <del v-show="val.oldPrice">￥{{val.oldPrice}}</del>
                    <span
                      class="red"
                      @click="carRedCount(val.i,val.index)"
                      v-show="$store.getters.foodsList[i].count > 0"
                    >
                      <img :src="red" />
                    </span>
                    <span
                      class="count"
                      v-show="$store.getters.foodsList[i].count > 0"
                    >{{$store.getters.foodsList[i].count}}</span>
                    <span class="add" @click="carAddCount(val.i,val.index)">
                      <img :src="add" />
                    </span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSeller } from "@/api/index.js";
import Bscroll from "better-scroll";

export default {
  data() {
    return {
      // 头部数据 背景图
      headData: {},
      pinpai: require("@/assets/images/pinpai.png"),
      jian: require("@/assets/images/jian.png"),
      gonggao: require("@/assets/images/gonggao.png"),
      // nav数据
      index: 0,

      // 尾部
      shopcar: require("@/assets/images/shopcar.svg"),
      // 购物车
      shopcarF: false,
      add: require("@/assets/images/add.svg"),
      red: require("@/assets/images/red.svg")
    };
  },
  methods: {
    // 导航点击事件
    beAction(i) {
      this.index = i;
    },
    // 购物车点击事件
    carAddCount(i, index) {
      this.$store.commit("addCount", { i, index });
      event.stopPropagation();
    },
    carRedCount(i, index) {
      this.$store.commit("redCount", { i, index });
      event.stopPropagation();
    }
  },
  created() {
    const v = this;
    getSeller().then(rsdata => {
      v.headData = rsdata;
      v.headData.supportsLength = v.headData.supports.length;
    });
    
  },
  mounted() {
    const options = {
      click: true,
      taps: true
    };
    // 注册点击事件
    this.foot = new Bscroll(".warp", options);
  },
  updated() {
    if(this.$store.getters.foodsList.length === 0) {
      this.shopcarF = false;
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
    background-blend-mode: multiply;
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
        width: 8em;
        white-space: nowrap;
        text-overflow: ellipsis;
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
          background-color: rgba(0, 0, 0, 0.6);
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
    border-bottom: 1px solid #d9dce1;
    display: flex;
    justify-content: space-around;
    a {
      text-decoration: none;
      color: #4a535a;
      line-height: 40px;
    }
    .active {
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
    z-index: 333;
    display: flex;
    bottom: 0px;
    width: 100%;
    height: 50px;
    background-color: #141c27;

    .count {
      flex: 1;
      text-align: right;
      color: #929196;
      font-weight: 700;
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      position: relative;
      .zong {
        margin-left: 50px;
        display: inline-block;
        padding: 0 2px;
        text-align: center;
      }
    }
    .countafter {
      width: 43px;
      height: 43px;
      position: absolute;
      top: -10px;
      left: 7px;
      background-color: #2b343d;
      border: 7px solid #141c27;
      border-radius: 50%;
      text-align: center;
      img {
        width: 32px;
        vertical-align: middle;
        margin-top: -6px;
      }
    }
    .moreprice {
      flex: 1.5;
      margin: 12px 0;
      height: 26px;
      line-height: 26px;
      border-left: 1px solid #929196;
      color: #929196;
      font-size: 12px;
      text-indent: 1em;
    }
    .startsend {
      flex: 1;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-weight: 700;
      font-size: 18px;
      color: #929196;
      background-color: #2b343b;
    }
  }
  // 购物车
  .shopcar {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    bottom: 50px;
    background-color: rgba(0, 0, 0, 0.3);

    .foods {
      margin-top: 20px;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      // height: 400px;
      background-color: #fff;
      .foods-title {
        margin-top: -20px;
        height: 20px;
        // width: 100%;
        padding: 0 30px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #ff6000;
        background-color: #ffedb2;
        border-radius: 1em 1em 0em 0;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
      }
      .warp {
        max-height: 400px;
        // height: 200px;
        overflow: scroll;
        ul {
          .products {
            padding: 20px 20px 15px;
            display: flex;
            justify-content: start;
            .pimg {
              margin-right: 8px;
              img {
                height: 52px;
              }
            }
            .dec {
              width: 100%;
              .name {
                font-size: 14px;
                font-weight: 600;
                color: #000;
              }
              .msg {
                font-size: 12px;
                line-height: 16px;
                color: #94999d;
                width: 12em;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
              .state {
                font-size: 12px;
                line-height: 16px;
                color: #94999d;
              }
              .price {
                color: red;
                font-size: 12px;
                line-height: 20px;
                position: relative;
                .nowprice {
                  font-size: 15px;
                  font-weight: 700;
                  margin-right: 10px;
                }
                del {
                  font-weight: 700;
                  color: #bfc0c2;
                  font-size: 12px;
                }
                .add {
                  width: 20px;
                  height: 20px;
                  display: inline-block;
                  background-color: #fff;
                  border-radius: 50%;
                  vertical-align: middle;
                  margin-top: -3px;
                  position: absolute;
                  top: 5px;
                  right: 0px;
                  img {
                    height: 20px;
                  }
                }
                .count {
                  width: 40px;
                  height: 20px;
                  line-height: 20px;
                  font-size: 14px;
                  text-align: center;
                  display: inline-block;
                  position: absolute;
                  top: 3px;
                  right: 20px;
                  color: #000;
                }
                .red {
                  width: 20px;
                  height: 20px;
                  display: inline-block;
                  background-color: #fff;
                  border-radius: 50%;
                  vertical-align: middle;
                  margin-top: -3px;
                  position: absolute;
                  top: 5px;
                  right: 60px;
                  img {
                    height: 20px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>