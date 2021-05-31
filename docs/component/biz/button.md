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
      this.$Notice({
        title: '哈哈',
        content: '这就是一坨屎'
      })
    }
  }
}
</script>

<template>
  <w-button>{{button}}</w-button>
  <img :src="$withBase('@public/test.png')"/>
  <w-button type="primary" @click.native="test">主色</w-button>
  <w-button type="success">成功</w-button>
  <w-button type="info">提示</w-button>
</template>


### 使用
```html
<w-button>默认</w-button>
<w-button type="primary">主色</w-button>
<w-button type="success">成功</w-button>
<w-button type="info">提示</w-button>
```