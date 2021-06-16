<template>
  <div
    class="mwp-member-card"
    @click="click"
  >
    <div class="mwp-member-card__left">
      <Photo :type="type" :gender="gender"/>
    </div>
    <div class="mwp-member-card__right">
      <div class="mwp-member-card__right--top">
        <div class="left-part">
          <slot name="topLeft" v-bind:value="value"></slot>
        </div>
          <span>
            <slot name="topRight" v-bind:value="value"></slot>
          </span>
      </div>
      <div class="mwp-member-card__right--bottom">
        <slot name="bottom" v-bind:value="value"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mwp-member-card',
  props: {
    value: {
      type: Object,
      default: () => {}
    },
    isDoctor: {
      type: Boolean,
      default: () => true
    },
    type: {
      type: String,
      default: () => 'doctor'
    },
    gender: {
      type: String,
      default: () => 'M'
    }
  },
  methods: {
    click () {
      this.$emit('click', this.value)
    }
  }
}
</script>
