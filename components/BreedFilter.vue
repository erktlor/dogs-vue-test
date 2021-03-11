<template>
  <div class="breed-filter">
    <div class="breed-filter__label">Choose breed:</div>
    <BasicSelect
      :options="breeds"
      :value="currentBreed"
      @input="changeCurrentBreed($event)"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('breeds', ['breeds', 'currentBreed']),
  },
  methods: {
    ...mapActions('breeds', ['changeCurrentBreed']),
  },
}
</script>

<style lang="scss">
.breed-filter {
  display: flex;
}

.breed-filter__label {
  font-weight: 500;
  margin-right: 12px;
}
</style>
