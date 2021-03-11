<template>
  <div class="main-page">
    <AppHeader />
    <div class="main-page__body">
      <Container>
        <div class="main-page__filter">
          <BreedFilter />
        </div>
        <div v-if="isLoading" class="main-page__loader">
          <img :src="require(`~/assets/images/loader.gif`)" />
        </div>
        <ImagesGrid v-if="!isLoading" :images="breedImages" />
      </Container>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  async fetch() {
    await this.fetchBreeds()
  },
  computed: {
    ...mapState('breeds', ['isLoading', 'breedImages']),
  },
  methods: {
    ...mapActions('breeds', ['fetchBreeds']),
  },
}
</script>

<style lang="scss" scoped>
.main-page__body {
  padding: 40px 0;
}

.main-page__loader {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-page__filter {
  margin-bottom: 30px;
}
</style>
