---
title: Photo
---
# 头像
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
  <div class="photo-demos">
    <div class="photo-demo"> 
      <Photo gender="M"  type="doctor"/>
      <div class="photo-text">
        医生头像-女
      </div>
    </div>
    <div class="photo-demo"> 
      <Photo gender="F"  type="doctor"/>
      <div class="photo-text">
        医生头像-女
      </div>
    </div>
    <div class="photo-demo"> 
      <Photo gender="M" type="patient"/>
      <div class="photo-text">
        患者头像-女
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

<style lang="scss">
.photo-demos {
  border: 1px solid #eee;
  padding: 16px;
  margin-top: 24px;
  width: 100%;
  display: flex;
  flex-wrap:wrap;
}
.photo-demo{
  text-align:center;
  margin-right: 28px;
}
.photo-text {
  margin-top: 6px;
}
</style>

### 代码示例
> 头像
```vue
<template>
<div>
 <div class="photo-demos">
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
gender|String|M\|F| M
type|String|doctor\|patient | doctor

