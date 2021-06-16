---
title: Button
---
# 按钮
### 效果展示
<script>
export default {
  data() {
    return {
      button: '默认'
    }
  },
  methods: {
    test () {
      console.log('点击了按钮')
    }
  }
}
</script>
<template>
  <div class="button-demo">
    <div class="mb-16 button-demo__row">
      <mwp-button class="button-demo__btn" @click="test" type="primary">主色</mwp-button>
      <mwp-button class="button-demo__btn" @click="test" type="sub">次要</mwp-button>
      <mwp-button class="button-demo__btn" @click="test" type="danger">成功</mwp-button>
      <mwp-button class="button-demo__btn" @click="test" type="normal">普通</mwp-button>
      <mwp-button class="button-demo__btn" @click="test" type="link">链接</mwp-button>
    </div>
    <div class="button-demo__row">
      <mwp-button class="button-demo__btn" @click="test" size="large">large</mwp-button>
      <mwp-button class="button-demo__btn" @click="test" size="medium" type="normal">medium</mwp-button>
      <mwp-button class="button-demo__btn" @click="test" size="small" type="link">small</mwp-button>
    </div>
  </div>
</template>

<style lang="scss">
.button-demo {
  border: 1px solid #eee;
  padding: 16px;
  margin-top: 24px;
  /* display: flex; */
  width: 100%;
  flex-wrap:wrap;
}
.button-demo__btn {
  margin-left: 12px;
}
.button-demo__row {
  display: flex;
  align-items: flex-end;
}
</style>

### 代码示例
>按钮组件
```vue
<template>
<div>
  <!-- type部分 -->
  <mwp-button class="button-demo__btn" type="primary" >主色</mwp-button>
  <mwp-button class="button-demo__btn" type="sub">次要</mwp-button>
  <mwp-button class="button-demo__btn" type="danger">成功</mwp-button>
  <mwp-button class="button-demo__btn" type="info">提示</mwp-button>
  <mwp-button class="button-demo__btn" type="normal">普通</mwp-button>
  <mwp-button class="button-demo__btn" type="link">链接</mwp-button>
  <!-- 尺寸部分 -->
  <mwp-button class="button-demo__btn" size="large">large</mwp-button>
  <mwp-button class="button-demo__btn" size="medium" type="normal">medium</mwp-button>
  <mwp-button class="button-demo__btn" size="small" type="link">small</mwp-button>
</div>
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
      console.log(11)
    }
  }
}
</script>
```

### 属性说明

属性名|类型|取值范围|默认值
--|:--:|:--:|:--:
size|normal|min/medium/large| medium
type|normal|primary/normal/plain | primary

### event

方法名|类型|参数|
--|:--:|:--:
click|event|none
