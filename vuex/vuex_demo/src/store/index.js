import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  // 只有mutations 才有权力去修改coun的数据
  mutations: {
    add (state) {
      state.count++
    },
    addN (state,step) {
      state.count +=step
    },
    snn (state) {
      state.count--
    },
    sub (state) {
      state.count--
    },
    subpllus (state, step) {
      state.count-=step
    }
  },
  actions: {
    addAsync (context) {
      setTimeout(() => {
        context.commit('add')
      }, 2000);
    },
    addAsyncN (context, step) {
      setTimeout(() => {
        context.commit('addN',step)
      }, 2000);
    },
    subAsync (context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000);
    }
  },
  modules: {
  }
})
