import Vue from 'vue'
import Vuex from 'vuex'
// 引入其他Vuex组件模块
import PageIndex from './pageIndex'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        PageIndex,
    }
})