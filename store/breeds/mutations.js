import {
  SET_BREEDS,
  SET_CURRENT_BREED,
  SET_BREED_IMAGES,
  SET_IS_LOADING,
} from './mutationTypes'

export default {
  [SET_BREEDS]: (state, payload) => {
    state.breeds = payload
  },
  [SET_CURRENT_BREED]: (state, payload) => {
    state.currentBreed = payload
  },
  [SET_BREED_IMAGES]: (state, payload) => {
    state.breedImages = payload
  },
  [SET_IS_LOADING]: (state, payload) => {
    state.isLoading = payload
  },
}
