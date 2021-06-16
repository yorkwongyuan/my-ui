---
title: Photo
---
# 头像

> 主要用于医生/患者头像的展示

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

#### 患者头像

<template>
  <div class="photo-demos">
    <div class="photo-demos__block">
      <div class="photo-demo"> 
      <Photo gender="T" type="patient"/>
      <div class="photo-text">
        患者头像-性别不详
      </div>
    </div>
    <div class="photo-demo"> 
      <Photo gender="M" type="patient"/>
      <div class="photo-text">
        患者头像-男
      </div>
    </div>
    <div class="photo-demo"> 
      <Photo gender="F" type="patient"/>
      <div class="photo-text">
          患者头像-女
      </div>
    </div>
  </div>
  </div>
</template>

#### 医生头像

<template>
  <div class="photo-demos">
    <div class="photo-demos__block">
      <div class="photo-demo"> 
      <Photo gender="T" type="doctor"/>
      <div class="photo-text">
        医生头像-性别不详
      </div>
    </div>
    <div class="photo-demo"> 
      <Photo gender="M"  type="doctor"/>
      <div class="photo-text">
        医生头像-男
      </div>
    </div>
    <div class="photo-demo"> 
      <Photo gender="F"  type="doctor"/>
      <div class="photo-text">
        医生头像-女
      </div>
    </div>
  </div>
  </div>
</template>

<style lang="scss">
.photo-demos__block {
  border: 1px solid #eee;
  padding: 16px;
  margin-top: 12px;
  width: 100%;
  display: flex;
  flex-wrap:wrap;
}
.photo-demos{
  margin-top: 24px;
}
.photo-demo{
  text-align:center;
  margin-right: 28px;
}
.photo-text {
  margin-top: 6px;
}
.photo-demos__title{
  margin-top: 12px;
}
</style>

### 代码示例

::: details 点击展开代码

```vue
<template>
  <div>
    <div class="photo-demo"> 
      <Photo gender="T" type="doctor"/>
      <div class="photo-text">
      医生头像-性别不详
      </div>
    </div>
    <div class="photo-demo"> 
      <Photo gender="M"  type="doctor"/>
      <div class="photo-text">
        医生头像-男
      </div>
    </div>
    <div class="photo-demo"> 
      <Photo gender="F"  type="doctor"/>
      <div class="photo-text">
        医生头像-女
      </div>
    </div>

    <div class="photo-demo"> 
      <Photo gender="T" type="patient"/>
      <div class="photo-text">
        患者头像-性别不详
      </div>
    </div>

    <div class="photo-demo"> 
      <Photo gender="M" type="patient"/>
      <div class="photo-text">
        患者头像-男
      </div>
    </div>
    <div class="photo-demo"> 
      <Photo gender="F" type="patient"/>
      <div class="photo-text">
        患者头像-女
      </div>
    </div>
  </div>
</template>
```
:::

### 属性说明

属性名|类型|取值范围|默认值
--|:--:|:--:|:--:
gender|String|M\|F| M
type|String|doctor\|patient | doctor

