import { mapState } from 'Vuex';
<template>
  <div>
    <h3>当前的count值为{{count}}</h3>
    <button @click="handel2">-1</button>
       <button @click="handel3">-1 的第二种方法</button>
       <button @click="handel4">-N 的方法</button>
            <button @click="handel5">Async -1 的方法</button>
  </div>
</template>

<script>
import { mapState,mapMutations,mapActions} from 'vuex'
  export default {
    data(){
      return{

      }
    },
    computed:{
      ...mapState(['count'])
    },
    methods:{
      handel2(){
        this.$store.commit('snn')
      },
      ...mapMutations(['sub']),
      handel3(){
        this.sub()
      },
        ...mapMutations(['sub','subpllus']),
        ...mapActions(['subAsync']),
      handel4(){
      this.subpllus(3)
      },
      handel5(){
        this.subAsync()
      }
      
    }
  }
</script>

<style lang="less" scoped>
</style>