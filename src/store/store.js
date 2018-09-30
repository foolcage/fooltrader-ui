// store.js

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: {
        coins: []
    },
    actions: {
        loadCoins({commit}) {
            axios
                .get('http://localhost:4000/results')
                .then(r => r.data)
                .then(coins => {
                    commit('SET_COINS', coins)
                })
        }
    },
    mutations: {
        SET_COINS(state, coins) {
            state.coins = coins
        }
    },

})