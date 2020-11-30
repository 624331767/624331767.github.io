<template>
  <div>
    <h3>当前的count值为:{{$store.state.count}}</h3>
    <button @click="handel1">+1</button>
     <button @click="handel2">+N</button>
       <button @click="handel3">+1 Async</button>
         <button @click="handel4">+N Async</button>
  </div>
</template>

<script>
  export default {
   data:function(){
     return{}
   },
   methods: {
     handel1(){
     this.$store.commit('add')
     },
     handel2(){
       this.$store.commit('addN',3)
     },
    //  异步地址 coun自增+1
     handel3(){
       this.$store.dispatch('addAsync')
       //  异步地址 coun自增+1
     },
     handel4(){
       this.$store.dispatch('addAsyncN',8)
     }
   }
  }
</script>

<style lang="less" scoped>
</style>