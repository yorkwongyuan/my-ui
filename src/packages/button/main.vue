<template>
  <div>
    <button class="haha">
      <slot></slot>
    </button>
  </div>
</template>
<script>
import { oneOf } from '../../utils/assist'
export default {
  name: 'Button',
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['default', 'primary', 'info', 'success'])
      },
      type: String,
      default: 'default'
    }
  }
}
</script>
