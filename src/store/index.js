import Vue from 'vue'
import Vuex from 'vuex'
import burgerMenuData from "./module/burgerMenuData";
import spiderChartData from "./module/spiderChartData";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    burgerMenuData,
    spiderChartData
  }
})
