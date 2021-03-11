<template>
  <div class="image-card" :style="{ backgroundImage: `url(${src})` }"></div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.image-card {
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  border-radius: 4px;
  box-shadow: 0 3px 3px -2px rgb(0 0 0 / 20%), 0 3px 4px 0 rgb(0 0 0 / 14%),
    0 1px 8px 0 rgb(0 0 0 / 12%);
  background-color: $gray;
}
</style>
