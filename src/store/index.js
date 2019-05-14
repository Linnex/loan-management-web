import Vue from 'vue'
import Vuex from 'vuex'
import { registerStoreModules } from '../utils/vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: registerStoreModules()
})
