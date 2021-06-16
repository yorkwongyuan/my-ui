---
title: Status-card
---
# 业务状态组件

> 不同的业务/状态，其颜色/文案均不同
### 效果展示

#### 会诊
<template>
  <div class="status-demo">
    <mwp-status-card bizType="CONSULTATION" status="RECEIVED"/>
    <mwp-status-card bizType="CONSULTATION" status="TO_BE_CONFIRMED"/>
    <mwp-status-card bizType="CONSULTATION" status="RECEIVED"/>
    <mwp-status-card bizType="CONSULTATION" status="NOTACCEPTED"/>
    <mwp-status-card bizType="CONSULTATION" status="CONSULTATIONING"/>
    <mwp-status-card bizType="CONSULTATION" status="HADFINISH"/>
    <mwp-status-card bizType="CONSULTATION" status="CANCEL"/>
    <mwp-status-card bizType="CONSULTATION" status="APPLIED"/>
    <mwp-status-card bizType="CONSULTATION" status="UNRECEIVED"/>
    <mwp-status-card bizType="CONSULTATION" status="DISMISSED"/>
    <mwp-status-card bizType="CONSULTATION" status="REVOKE"/>
  </div>
</template>

::: details 点击展开代码
> 会诊部分
```vue
<template>
<div>
 <mwp-status-card bizType="CONSULTATION" status="RECEIVED"/>
  <mwp-status-card bizType="CONSULTATION" status="TO_BE_CONFIRMED"/>
  <mwp-status-card bizType="CONSULTATION" status="RECEIVED"/>
  <mwp-status-card bizType="CONSULTATION" status="NOTACCEPTED"/>
  <mwp-status-card bizType="CONSULTATION" status="CONSULTATIONING"/>
  <mwp-status-card bizType="CONSULTATION" status="HADFINISH"/>
  <mwp-status-card bizType="CONSULTATION" status="CANCEL"/>
  <mwp-status-card bizType="CONSULTATION" status="APPLIED"/>
  <mwp-status-card bizType="CONSULTATION" status="UNRECEIVED"/>
  <mwp-status-card bizType="CONSULTATION" status="DISMISSED"/>
  <mwp-status-card bizType="CONSULTATION" status="REVOKE"/>
</div>
</template>
```
:::

#### 预约
<template>
  <div class="status-demo">
    <mwp-status-card bizType="APPOINT" status="UNRECEIVED"/>
    <mwp-status-card bizType="APPOINT" status="RECEIVED"/>
    <mwp-status-card bizType="APPOINT" status="NOTACCEPTED"/>
    <mwp-status-card bizType="APPOINT" status="REVOKE"/>
    <mwp-status-card bizType="APPOINT" status="HADREPORT"/>
    <mwp-status-card bizType="APPOINT" status="CANCEL"/>
    <mwp-status-card bizType="APPOINT" status="BREAKPROMISE"/>
    <mwp-status-card bizType="APPOINT" status="TREATMENTED"/>
  </div>
</template>

::: details 点击展开代码
> 预约部分
```vue
<template>
<div>
  <mwp-status-card bizType="APPOINT" status="UNRECEIVED"/>
  <mwp-status-card bizType="APPOINT" status="RECEIVED"/>
  <mwp-status-card bizType="APPOINT" status="NOTACCEPTED"/>
  <mwp-status-card bizType="APPOINT" status="REVOKE"/>
  <mwp-status-card bizType="APPOINT" status="HADREPORT"/>
  <mwp-status-card bizType="APPOINT" status="CANCEL"/>
  <mwp-status-card bizType="APPOINT" status="BREAKPROMISE"/>
  <mwp-status-card bizType="APPOINT" status="TREATMENTED"/>
</div>
</template>
```
:::

#### 转诊
<template>
  <div class="status-demo">
    <mwp-status-card bizType="REFERRAL" status="UNRECEIVED"/>
    <mwp-status-card bizType="REFERRAL" status="RECEIVED"/>
    <mwp-status-card bizType="REFERRAL" status="NOTACCEPTED"/>
    <mwp-status-card bizType="REFERRAL" status="REVOKE"/>
    <mwp-status-card bizType="REFERRAL" status="HADREPORT"/>
    <mwp-status-card bizType="REFERRAL" status="CANCEL"/>
    <mwp-status-card bizType="REFERRAL" status="BREAKPROMISE"/>
    <mwp-status-card bizType="REFERRAL" status="TREATMENTED"/>
  </div>
</template>

::: details 点击展开代码
> 转诊部分
```vue
<template>
<div>
  <mwp-status-card bizType="REFERRAL" status="UNRECEIVED"/>
  <mwp-status-card bizType="REFERRAL" status="RECEIVED"/>
  <mwp-status-card bizType="REFERRAL" status="NOTACCEPTED"/>
  <mwp-status-card bizType="REFERRAL" status="REVOKE"/>
  <mwp-status-card bizType="REFERRAL" status="HADREPORT"/>
  <mwp-status-card bizType="REFERRAL" status="CANCEL"/>
  <mwp-status-card bizType="REFERRAL" status="BREAKPROMISE"/>
  <mwp-status-card bizType="REFERRAL" status="TREATMENTED"/>
</div>
</template>
```
:::




<style lang="scss">
.status-demo {
  border: 1px solid #eee;
  padding: 16px;
  margin-top: 24px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>

### 属性说明

属性名|类型|取值范围
--|:--:|:--:
bizType|String|CONSULTATION \| APPOINT \| REFERRAL|
status|String| 后台返回的状态字段，详情请`见状态表`

### 状态表(status属性合法值)
#### 会诊
字段|中文名|
--|:--:|
IS_VALID | 有效会诊
TO_BE_CONFIRMED | 待确认
RECEIVED | 待会诊
NOTACCEPTED | 无法安排
CONSULTATIONING | 进行中
HADFINISH | 已完成
CANCEL | 已取消
APPLIED | 待支付
UNRECEIVED | 待接收
DISMISSED | 已退诊
REVOKE | 已撤回

#### 预约
字段|中文名|
--|:--:|
UNRECEIVED | 待受理
RECEIVED| 待报到
NOTACCEPTED | 不受理
REVOKE | 已撤回
HADREPORT | 已报到
CANCEL | 已取消
BREAKPROMISE | 失约
TREATMENTED | 已就诊

#### 转诊
字段|中文名|
--|:--:|
UNRECEIVED | 待安排
RECEIVED | 已安排
NOTACCEPTED | 不接收
REVOKE | 已撤回
HADREPORT | 已报到
CANCEL | 已取消
RESERVED | 已预约
TREATMENTED | 已就诊
