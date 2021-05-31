<template>
  <div>
    <img src="./assets/test.jpg" alt="">
    icon
  </div>
</template>
<script>
export default {
  name: 'Icon',
  mounted () {
    this.dispatch('Button', 'test', 'hehe')
  }
}
</script>