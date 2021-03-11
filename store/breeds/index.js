import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const state = () => ({
  breeds: [],
  currentBreed: null,
  breedImages: [],
  isLoading: false,
})

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
