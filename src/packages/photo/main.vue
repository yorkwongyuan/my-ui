<template>
  <div class="mwp-photo">
    <div class="mwp-photo__photo-wrap" v-if="src">
      <img
        :src="src"
        alt
        class="mwp-photo__photo"
      />
    </div>
    <div class="mwp-photo__photo-wrap" v-else-if="['patient', 'doctor', 'volunteer'].includes(type) && ['M', 'F', 'T'].includes(gender)">
      <img
      :src="require(`./imgs/${type}-${gender}.png`)"
      alt
      class="mwp-photo__photo"
      />
    </div>
  </div>
</template>
<script>
import { oneOf } from '../../utils/assist'
export default {
  name: 'photo',
  props: {
    type:{
      type: String,
      default: () => 'doctor',
      validator (value) {
        return oneOf(value, ['doctor', 'patient', 'volunteer'])
      },
    },
    gender: {
      type: String,
      default: () => '',
      validator (value) {
        return oneOf(value, ['M', 'F', 'T'])
      },
    },
    src: {
      type: String,
      default: () => ''
    }
  }
}
</script>