<template>
    <button class="mwp-button" :class="[`mwp-button--${type}`,`mwp-button--${size}`]" @click="$emit('click')">
      <slot></slot>
    </button>
</template>
<script>
import { oneOf } from '../../utils/assist'
export default {
  name: 'mwp-button',
  props: {
    type: {
      // validator (value) {
      //   return oneOf(value, ['default', 'primary', 'info', 'success', 'sub', 'normal'])
      // },
      type: String,
      default: 'primary'
    },
    size: {
      validator (value) {
        return oneOf(value, ['large', 'medium', 'small'])
      },
      type: String,
      default: 'medium'
    }
  }
}
</script>
