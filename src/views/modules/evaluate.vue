<template>
  <div>
    <h2>state的count值：{{this.$store.state.count}}</h2>
    <h2>getters的返回值值：{{this.$store.getters.getStateCount}}</h2>

    <p>
      <button @click="add">加一</button>
      <button @click="red">减一</button>
    </p>
    <p>
      <button @click="add2">两秒后加一</button>
      <button @click="red2">两秒后减一</button>
    </p>
  </div>
</template>

<script>
  export default {
    methods: {
      add() {
        this.$store.commit('add');   //直接提交mutations，不支持异步  看效果
      },
      red() {
        this.$store.commit('red');
      },
      add2() {
        this.$store.dispatch('Aadd');  //提交actions ，由actions 提交mutations  支持异步 看操作
      },
      red2() {
        this.$store.dispatch('Ared');
      }
    },
    created() {
      // console.log(this.$store.state.count);
      // console.log(this.$store.getters.getStateCount);
      // console.log(this.$store.getters.foodsList);
    }
  }

</script>

<style lang="scss" scoped>
</style>