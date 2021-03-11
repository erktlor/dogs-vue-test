<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss">
.container {
  margin: 0 auto;
  width: 100%;
  max-width: $container-max-width-xxxl;

  @media (max-width: $breakpoint-xxl) {
    max-width: $container-max-width-xxl;
  }

  @media (max-width: $breakpoint-xl) {
    max-width: $container-max-width-xl;
  }

  @media (max-width: $breakpoint-lg) {
    max-width: $container-max-width-lg;
  }

  @media (max-width: $breakpoint-md) {
    max-width: $container-max-width-md;
  }

  @media (max-width: $breakpoint-sm) {
    padding: 0 20px;
    max-width: $container-max-width-sm;
  }
}
</style>
