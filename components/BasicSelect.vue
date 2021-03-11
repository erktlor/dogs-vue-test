<template>
  <select @change="$emit('input', $event.target.value)">
    <option v-for="option in options" :key="option.id" :value="option.id">
      {{ option.value }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      open: false,
    }
  },
  computed: {
    selected() {
      return this.value
        ? this.options.find(({ id }) => id === this.value)
        : this.options.length > 0
        ? this.options[0]
        : null
    },
  },
  mounted() {
    if (this.selected) {
      this.$emit('input', this.selected.id)
    }
  },
}
</script>
