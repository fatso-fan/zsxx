<template>
  <i :style="{ fontSize: size ? `${size}px` : undefined }">
    <slot>
      <component :is="name" />
    </slot>
  </i>
</template>

<script lang="ts">
import { PropType, Component, defineComponent } from 'vue'

export default defineComponent({
  props: {
    size: {
      type: Number,
      default: undefined,
    },
    name: {
      type: Object as PropType<Component>,
      default: undefined,
    },
  },
})
</script>

<style lang="scss" scoped>
i {
  @apply inline-flex items-center justify-center;
  svg {
    height: 1em;
    width: 1em;
  }
}
</style>
