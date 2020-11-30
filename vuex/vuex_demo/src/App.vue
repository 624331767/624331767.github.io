<template>
  <div>
    <my-add></my-add>
    <p>---------------------------</p>
    <my-snn></my-snn>
  </div>
</template>


<script>
import Add from './components/Add'
import Snn from './components/Snn'
  export default {
    dada(){
   return {}
    },
     components: {
    'my-add': Add,
     'my-snn':Snn
    }
  }
</script>

<style lang="less" scoped>
</style>