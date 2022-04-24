import { createStore } from 'vuex'

export default createStore({
  state: {
    mobileMenu: false
  },
  getters: {
  },
  mutations: {
    toggle(state){
      state.mobileMenu=!state.mobileMenu
    }
  },
  actions: {
  },
  modules: {
  }
})
