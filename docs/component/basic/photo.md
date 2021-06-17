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
      <mwp-photo gender="T" type="patient"/>
      <div class="photo-text">
        患者头像-性别不详
      </div>
    </div>
    <div class="photo-demo"> 
      <mwp-photo gender="M" type="patient"/>
      <div class="photo-text">
        患者头像-男
      </div>
    </div>
    <div class="photo-demo"> 
      <mwp-photo gender="F" type="patient"/>
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
      <mwp-photo gender="T" type="doctor"/>
      <div class="photo-text">
        医生头像-性别不详
      </div>
    </div>
    <div class="photo-demo"> 
      <mwp-photo gender="M"  type="doctor"/>
      <div class="photo-text">
        医生头像-男
      </div>
    </div>
    <div class="photo-demo"> 
      <mwp-photo gender="F"  type="doctor"/>
      <div class="photo-text">
        医生头像-女
      </div>
    </div>
    <div gender="M" class="photo-demo"> 
      <mwp-photo src="http://qqpublic.qpic.cn/qq_public/0/0-2669778281-EFE6011C93A81DBE6D315AB827BBCFE9/0?fmt=jpg&size=122&h=507&w=900&ppv=1/0"/>
      <div class="photo-text">
        任意图片
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
      <mwp-photo gender="T" type="doctor"/>
      <div class="photo-text">
      医生头像-性别不详
      </div>
    </div>
    <div class="photo-demo"> 
      <mwp-photo gender="M"  type="doctor"/>
      <div class="photo-text">
        医生头像-男
      </div>
    </div>
    <div class="photo-demo"> 
      <mwp-photo gender="F"  type="doctor"/>
      <div class="photo-text">
        医生头像-女
      </div>
    </div>
    <div class="photo-demo"> 
      <mwp-photo src="http://qqpublic.qpic.cn/qq_public/0/0-2669778281-EFE6011C93A81DBE6D315AB827BBCFE9/0?fmt=jpg&size=122&h=507&w=900&ppv=1/0"/>
      <div class="photo-text">
        医生头像-女
      </div>
    </div>

    <div class="photo-demo"> 
      <mwp-photo gender="T" type="patient"/>
      <div class="photo-text">
        患者头像-性别不详
      </div>
    </div>

    <div class="photo-demo"> 
      <mwp-photo gender="M" type="patient"/>
      <div class="photo-text">
        患者头像-男
      </div>
    </div>
    <div class="photo-demo"> 
      <mwp-photo gender="F" type="patient"/>
      <div class="photo-text">
        患者头像-女
      </div>
    </div>
  </div>
</template>
```
:::

### 属性说明

属性名| 说明 |类型|取值范围|默认值
--|:--:|:--:|:--:|:--:
gender| 性别 |String|M\|F| M
type| 头像类型,包括医生和患者 |String|doctor\|patient | doctor
src| 图片路径(如果有此项，将显示src里的图片) |String| - | -

