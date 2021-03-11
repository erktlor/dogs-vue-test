<template>
  <div class="images-grid">
    <div v-for="image in images" :key="image" class="images-grid__cell">
      <ImageCard :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  width: 100%;
}

.images-grid__cell {
  width: 100%;
  height: 250px;
}
</style>
