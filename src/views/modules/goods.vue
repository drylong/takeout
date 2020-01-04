<template>
  <div class="goods">
    <div class="sidebar">
      <ul class="content">
        <li v-for="(val,i) in navList" :key="i" :class="{active: navIndex === i}"><p @click="clicked(i)" >{{val.name}}</p></li>
      </ul>
    </div>
    <div class="goodsList">
      <ul class="content">
        <li v-for="(val, i) in navList" :key="i" :id="i">
          <div class="protitle" >{{val.name}}</div>
          <div class="products" v-for="( val,i) in val.foods" :key='i'>
            <div class="pimg">
              <img :src="val.image" alt />
            </div>
            <div class="dec">
              <p class="name">{{val.name}}</p>
              <p class="msg">{{val.description}}</p>
              <p class="state">月售{{val.sellCount}}份 好评率{{val.rating}}%</p>
              <p class="price">￥<span class="nowprice">24</span><del>￥28</del>
                <span class="add">
                  <img :src="add" alt />
                </span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getGoods} from '@/api/index.js';
import Bscroll from 'better-scroll';


export default {
  data() {
    return {
      navList: [],
      navIndex: 0,
      // 右边商品

      
      add: require("@/assets/images/add.svg"),
      red: require("@/assets/images/red.svg")
    };
  },
  methods: {
    clicked(i) {
      this.navIndex = i;
      // 实现右侧锚点效果
      this.Right.scrollToElement(document.getElementById(i), 888);
      
    }
  },
  created() {
    const v = this;
    getGoods().then( rsdata => {
      v.navList = rsdata;
    })
   
  },
  mounted() {
    const options = {
      click: true,
      taps: true
     };
    this.Left = new Bscroll('.sidebar', options);
    this.Right = new Bscroll('.goodsList', {
      probeType: 3
    });
    // const v = this;
    this.Right.on('scroll', obj => {
      for (let i = 0; i < this.elHeight.length; i++) {
        if(i ===this.elHeight.length - 1) {
          this.navIndex = i;
          break;
        }
        if(Math.abs(obj.y)>=this.elHeight[i] && Math.abs(obj.y)<this.elHeight[i+1]) {
          this.navIndex = i;
          this.Left.scrollToElement('.active', 888);
          break;
        }
      }
    })
    
  },
  computed: {
    // 元素高度
    elHeight() {
      let arr = [];
      for(let i = 0; i < this.navList.length; i++) {
        arr.push(document.getElementById(i).offsetTop);
      }
      return arr;
    }
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
        background-color: #f5f5f5;
        p {
          height: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 14px;
          line-height: 18px;
          margin: 0 10px;
          border-bottom: 1px solid #dddee0;
        }
      }
      .active {
        background-color: #fff;
        p {
          border-color: #fff;
        }
      }
    }
  }
  .goodsList {
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