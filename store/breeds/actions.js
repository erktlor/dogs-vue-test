import {
  SET_BREEDS,
  SET_CURRENT_BREED,
  SET_BREED_IMAGES,
  SET_IS_LOADING,
} from './mutationTypes'
import { mapBreedsTreeToFlatList } from './utils'

export default {
  async fetchBreeds({ dispatch, commit }) {
    const { message } = await this.$axios.$get('/api/breeds/list/all')
    const breeds = mapBreedsTreeToFlatList(message)
    commit(SET_BREEDS, breeds)
    if (breeds.length > 0) {
      const currentBreedId = breeds[0].id
      commit(SET_CURRENT_BREED, currentBreedId)
      await dispatch('fetchBreed', currentBreedId)
    }
  },
  async fetchBreed({ commit }, breed) {
    try {
      commit(SET_IS_LOADING, true)
      const { message: images } = await this.$axios.$get(
        `/api/breed/${breed}/images`
      )
      commit(SET_BREED_IMAGES, images)
    } catch (e) {
      alert("Can't load data")
      commit(SET_BREED_IMAGES, [])
    } finally {
      commit(SET_IS_LOADING, false)
    }
  },
  changeCurrentBreed({ commit, dispatch }, breedId) {
    commit(SET_CURRENT_BREED, breedId)
    dispatch('fetchBreed', breedId)
  },
}
