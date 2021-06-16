<template>
  <div>
    <img src="./assets/test.jpg" alt="">
    icon
  </div>
</template>
<script>
export default {
  name: 'mwp-icon',
  mounted () {
    this.dispatch('Button', 'test', 'hehe')
  }
}
</script>