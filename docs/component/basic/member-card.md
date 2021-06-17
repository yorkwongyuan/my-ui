---
title: MemberCard
---
# 医生/患者信息卡片骨架组件

> 该组件为patient-card/doctor-card的基础组件，左侧头像部分通过参数改变，右侧暴露出3个插槽供修改

### 效果展示
<script>
export default {
  methods: {
    handleClick () {
      alert('点击了卡片')
    }
  }
}
</script>
<template>
  <div class="member-card-demos">
    <mwp-member-card @click="handleClick">
      <!-- 左上方 -->
      <template v-slot:topLeft="{value}">
        <div class="mwp-member-card-demos__top">
          <span class="mwp-member-card-demos__name mr-4">测试人员</span>
          <span class="mwp-member-card-demos__gender mr-4">男</span>
          <span class="mwp-member-card-demos__age mwp-member-card-demos__gray-font">12岁</span>
        </div>
      </template>
      <!-- 右上方 -->
      <template v-slot:topRight="{value}">
        <span class="mwp-member-card-demos__status is-RECEIVED">待会诊</span>
      </template>
      <!-- 下方 -->
      <template v-slot:bottom="{value}">
        <ul class="mwp-member-card-demos__ul">
          <li class="mwp-member-card-demos__li">
            <span class="mwp-member-card-demos__gray-font">申请时间:</span>
            <span class="demo-value">2020-12-12</span>
          </li>
          <li class="mwp-member-card-demos__li">
            <span class="mwp-member-card-demos__gray-font">会诊类型:</span>
            <span class="demo-value">临床会诊</span>
          </li>
          <li class="mwp-member-card-demos__li">
            <span class="mwp-member-card-demos__gray-font">会诊时间:</span>
            <span class="demo-value">2020-12-12</span>
          </li>
        </ul>
      </template>
    </mwp-member-card>
  </div>
</template>

<style lang="scss">
.member-card-demos {
  margin-top: 24px;
  width: 375px;
  display: flex;
  flex-wrap:wrap;
}
</style>

### 代码示例

::: details 点击查看代码
```vue {5-32}
<template>
  <div class="member-card-demos">
    <mwp-member-card @click="handleClick">
      <!-- 左上方 -->
      <template v-slot:topLeft="{value}">
        <div class="mwp-member-card-demos__top">
          <span class="mwp-member-card-demos__name mr-4">测试人员</span>
          <span class="mwp-member-card-demos__gender mr-4">男</span>
          <span class="mwp-member-card-demos__age mwp-member-card-demos__gray-font">12岁</span>
        </div>
      </template>
      <!-- 右上方 -->
      <template v-slot:topRight="{value}">
        <span class="mwp-member-card-demos__status is-RECEIVED">待会诊</span>
      </template>
      <!-- 下方 -->
      <template v-slot:bottom="{value}">
        <ul class="mwp-member-card-demos__ul">
          <li class="mwp-member-card-demos__li">
            <span class="mwp-member-card-demos__gray-font">申请时间:</span>
            <span class="demo-value">2020-12-12</span>
          </li>
          <li class="mwp-member-card-demos__li">
            <span class="mwp-member-card-demos__gray-font">会诊类型:</span>
            <span class="demo-value">临床会诊</span>
          </li>
          <li class="mwp-member-card-demos__li">
            <span class="mwp-member-card-demos__gray-font">会诊时间:</span>
            <span class="demo-value">2020-12-12</span>
          </li>
        </ul>
      </template>
    </mwp-member-card>
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
    handleClick () {
      alert('点击了卡片')
    }
  }
}
</script>
```
:::
### slot说明
name|说明
-----------|:-----------:|
topLeft|用于卡片左上方区域的显示|
topRight|用于卡片右上方区域的显示|
bottom|用于卡片下方区域的显示|

