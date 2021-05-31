---
title: Button
---
# 按钮
<script>
export default {
  data() {
    return {
      button: '默认'
    }
  },
  methods: {
    test () {
      console.log('111')
      // this.$Notice({
      //   title: '哈哈',
      //   content: '这就是一坨屎'
      // })
    }
  }
}
</script>

<template>
  <phone>
    <Button type="primary" @click="test">主色</Button>
    <Button type="sub">次要</Button>
    <Button type="normal">普通按钮</Button>
    <Button size="large">大按钮</Button>
    <Button size="medium">中型按钮</Button>
    <Button size="small">小按钮</Button>
  </phone>
</template>


### 使用
```html
<template>
<Button>默认</Button>
<Button type="primary">主色</Button>
<Button type="success">成功</Button>
<Button type="info">提示</Button>
</template>
<script>
export default {
  data() {
    return {
      button: '默认'
    }
  },
  methods: {
    test () {
      // this.$Notice({
      //   title: '哈哈',
      //   content: '这就是一坨屎'
      // })
    }
  }
}
</script>
```