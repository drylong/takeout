<template>
  <div class="goods">
    <div class="sidebar">
      <ul>
        <li v-for="(val,i) in navList" :key="i">{{val}}</li>
      </ul>
    </div>
    <div class="goods-list">
      <ul>
        <li class="protitle">特色粥品</li>
        <li class="products">
          <div class="pimg">
            <img :src="produrt1" alt />
          </div>
          <div class="dec">
            <p class="name">皮蛋瘦肉粥配包子套餐</p>
            <p class="msg">咸粥</p>
            <p class="state">月售11230份 好评率100%</p>
            <p class="price">
              ￥
              <span class="nowprice">24</span>
              <del>￥28</del>
              <span class="add">
                <img :src="add" alt />
              </span>
            </p>
          </div>
        </li>
        <li class="protitle">特色粥品</li>
        <li class="products">
          <div class="pimg">
            <img :src="produrt1" alt />
          </div>
          <div class="dec">
            <p class="name">皮蛋瘦肉粥配包子套餐</p>
            <p class="msg">咸粥</p>
            <p class="state">月售11230份 好评率100%</p>
            <p class="price">
              ￥
              <span class="nowprice">24</span>
              <del>￥28</del>
              <span class="add">
                <img :src="add" alt />
              </span>
            </p>
          </div>
        </li>
        <li class="products">
          <div class="pimg">
            <img :src="produrt1" alt />
          </div>
          <div class="dec">
            <p class="name">皮蛋瘦肉粥配包子套餐</p>
            <p class="msg">咸粥</p>
            <p class="state">月售11230份 好评率100%</p>
            <p class="price">
              ￥
              <span class="nowprice">24</span>
              <del>￥28</del>
              <span class="add">
                <img :src="add" alt />
              </span>
            </p>
          </div>
        </li>
        <li class="products">
          <div class="pimg">
            <img :src="produrt1" alt />
          </div>
          <div class="dec">
            <p class="name">皮蛋瘦肉粥配包子套餐</p>
            <p class="msg">咸粥</p>
            <p class="state">月售11230份 好评率100%</p>
            <p class="price">
              ￥
              <span class="nowprice">24</span>
              <del>￥28</del>
              <span class="add">
                <img :src="add" alt />
              </span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        "热销榜",
        "担任特色套餐",
        "冒菜",
        "特色粥品",
        "精选热菜",
        "爽口凉菜",
        "半成品",
        "饭类",
        "面食"
      ],
      // 右边商品
      produrt1: require("@/assets/images/product1.jpg"),
      produrt2: require("@/assets/images/product2.jpg"),
      produrt3: require("@/assets/images/product3.jpg"),
      produrt4: require("@/assets/images/product4.jpg"),
      add: require("@/assets/images/add.svg"),
      red: require("@/assets/images/red.svg")
    };
  }
};
</script>

<style lang="scss" scoped>
.goods {
  display: flex;
  height: 100%;
  justify-content: space-between;
  overflow: hidden;
  .sidebar {
    width: 80px;
    // height: 100%;
    overflow: scroll;
    padding-bottom: 5px;

    ul {
      background-color: #f4f5f7;
      li {
        padding: 20px 0;
        text-align: center;
        font-size: 14px;
        line-height: 18px;
        margin: 0 10px;
        border-bottom: 1px solid #dddee0;
      }
    }
  }
  .goods-list {
    flex: 1;
    // height: 100%;
    overflow: scroll;
    padding-bottom: 5px;
    
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
          }
        }
      }
      .protitle {
        height: 25px;
        line-height: 25px;
        background-color: #f4f5f7;
        border-left: 2px solid #d9dce1;
        color: #92969f;
        font-size: 12px;
        text-indent: 1em;
      }
    }
  }
}
</style>