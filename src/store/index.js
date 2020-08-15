import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    favData: []
  },
  mutations: {
    addFavData (state, data) {
      if (state.favData.find(e => e.id === data.id) === undefined) {
        state.favData.push(data)
      }
    },
    removeFavData (state, data) {
      const fav = state.favData.find(e => e.id === data.id)
      if (fav) {
        state.favData.splice(state.favData.indexOf(fav), 1)
      }
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    favData (state) {
      return state.favData
    }
  }
})
