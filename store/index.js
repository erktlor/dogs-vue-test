import Vuex from 'vuex'
import breedsModule from './breeds'

new Vuex.Store({
  modules: {
    breeds: breedsModule,
  },
})
