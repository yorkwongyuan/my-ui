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
  <phone path="/users"></phone>
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