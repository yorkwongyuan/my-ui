---
title: Patient-card
---
# 患者卡片

> 主要用于患者列表的展示

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

<style lang="scss">
.patient-demo {
  margin-top: 24px;
  width: 375px;
  display: flex;
  flex-wrap:wrap;
}
</style>

<script>
  export default {
    data () {
      return {
        appointInfo: {
          appointmentId: "yyd000002021040200000",
          appointmentType: "OUTPATIENT",
          fromEndTime: "18:00-18:30",
          fromStartTime: "2021-04-02",
          isRecipient: true,
          logcDate: "2021-04-02 13:38",
          patAge: "35岁",
          patGender: "M",
          patName: "巫马秋荷",
          status: "BREAKPROMISE",
          toEndTime: "18:00-18:30",
          toStartTime: "2021-04-02",
          treatmentTime: ""
        },
        referrelInfo: {
          createTime: "2021-06-16 10:55",
          diagnosis: "尚未确诊",
          fromEndTime: "2021-06-16 12:00:00",
          fromHospitalName: "金蝶医疗产品开发中心",
          fromInitiatorName: "汪源",
          fromStartTime: "2021-06-16 11:00:00",
          fromTime: "2021-06-16 11:00-12:00",
          patAge: "25岁",
          patGender: "F",
          patName: "柏慧琳",
          referralId: "R00000202106160000",
          referralStatus: "RESERVED",
          referralType: "OUTPATIENT",
          referralTypeName: "门诊转诊",
          treatmentTime: ""
        },
        consultationInfo: {
          applicantAvatarUrl: "http://static.yunzhijia.com/space/c/photo/load?id=5b8cf55ddb5aa636e5225891&spec=180&spec=180",
          applicantEmpId: "F1FB45C5CDB74A1D8FA1D9ECB45F06CC",
          applicantEmpName: "柏慧琳",
          applicantHospitalName: "",
          applicationDate: "2021-04-13 18:07",
          appointmentEndTime: "2021-04-13 18:30:00",
          appointmentStartTime: "2021-04-13 18:00:00",
          arrangeDate: "2021-04-13",
          arrangeTime: "18:00-18:30",
          consultTationStatus: "CONSULTATIONING",
          consultationDemand: "",
          consultationId: "hzd000002021041300002",
          consultationObjective: "明确诊断 指导治疗",
          consultationType: "SPECIALIST",
          firstDiagnosis: "副伤寒、胃肠炎、结肠炎",
          handleTime: "2021-04-13 18:08",
          handlerName: "汪源",
          medicalPatientId: "26E47C91DF0B4C19AE0E801E51E34CF7",
          patAge: "35岁",
          patCondition: "112222",
          patGender: "M",
          patName: "齐东义",
          rejectReason: "",
          roomId: "",
          toEmpName: "汪源",
          toOrgName: "心脏科",
          treatmentDoctor: "",
          treatmentEmpId: "",
          treatmentHospital: "金蝶医疗产品开发中心",
          treatmentOrg: "",
          treatmentPicUrl: ""
        }
      }
    },
    methods: {
      handleClick (info) {
        alert('点击事件触发:' + JSON.stringify(info, null, 4))
      }
    }
  }
</script>

#### 会诊

<template>
  <div class="patient-demo">
    <mwp-patient-card :info="consultationInfo" @click="handleClick" type="CONSULTATION"/>
  </div>
</template>

#### 代码示例
::: details 点击展开代码

```vue
<template>
  <div>
    <mwp-patient-card :info="consultationInfo" @click="handleClick" type="CONSULTATION"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
         consultationInfo: {
          applicantAvatarUrl: "http://static.yunzhijia.com/space/c/photo/load?id=5b8cf55ddb5aa636e5225891&spec=180&spec=180",
          applicantEmpId: "F1FB45C5CDB74A1D8FA1D9ECB45F06CC",
          applicantEmpName: "柏慧琳",
          applicantHospitalName: "",
          applicationDate: "2021-04-13 18:07",
          appointmentEndTime: "2021-04-13 18:30:00",
          appointmentStartTime: "2021-04-13 18:00:00",
          arrangeDate: "2021-04-13",
          arrangeTime: "18:00-18:30",
          consultTationStatus: "CONSULTATIONING",
          consultationDemand: "",
          consultationId: "hzd000002021041300002",
          consultationObjective: "明确诊断 指导治疗",
          consultationType: "SPECIALIST",
          firstDiagnosis: "副伤寒、胃肠炎、结肠炎",
          handleTime: "2021-04-13 18:08",
          handlerName: "汪源",
          medicalPatientId: "26E47C91DF0B4C19AE0E801E51E34CF7",
          patAge: "35岁",
          patCondition: "112222",
          patGender: "M",
          patName: "齐东义",
          rejectReason: "",
          roomId: "",
          toEmpName: "汪源",
          toOrgName: "心脏科",
          treatmentDoctor: "",
          treatmentEmpId: "",
          treatmentHospital: "金蝶医疗产品开发中心",
          treatmentOrg: "",
          treatmentPicUrl: ""
        }
      }
    }
  }
</script>
```
:::

#### 预约

<template>
  <div class="patient-demo">
    <mwp-patient-card :info="appointInfo" @click="handleClick" type="APPOINTMENT"/>
  </div>
</template>

#### 代码示例
::: details 点击展开代码

```vue
<template>
  <div>
    <mwp-patient-card :info="appointInfo" @click="handleClick" type="CONSULTATION"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        appointInfo: {
          appointmentId: "yyd000002021040200000",
          appointmentType: "OUTPATIENT",
          fromEndTime: "18:00-18:30",
          fromStartTime: "2021-04-02",
          isRecipient: true,
          logcDate: "2021-04-02 13:38",
          patAge: "35岁",
          patGender: "M",
          patName: "巫马秋荷",
          status: "BREAKPROMISE",
          toEndTime: "18:00-18:30",
          toStartTime: "2021-04-02",
          treatmentTime: ""
        },
      }
    }
  }
</script>
```
:::

#### 转诊

<template>
  <div class="patient-demo">
    <mwp-patient-card :info="referrelInfo" @click="handleClick" type="REFERRAL"/>
  </div>
</template>

#### 代码示例
::: details 点击展开代码

```vue
<template>
  <div>
    <mwp-patient-card :info="appointInfo" @click="handleClick" type="CONSULTATION"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        referrelInfo: {
          createTime: "2021-06-16 10:55",
          diagnosis: "尚未确诊",
          fromEndTime: "2021-06-16 12:00:00",
          fromHospitalName: "金蝶医疗产品开发中心",
          fromInitiatorName: "汪源",
          fromStartTime: "2021-06-16 11:00:00",
          fromTime: "2021-06-16 11:00-12:00",
          patAge: "25岁",
          patGender: "F",
          patName: "柏慧琳",
          referralId: "R00000202106160000",
          referralStatus: "RESERVED",
          referralType: "OUTPATIENT",
          referralTypeName: "门诊转诊",
          treatmentTime: ""
        },
      }
    }
  }
</script>
```
:::


### 属性说明

属性名|类型|取值范围|默认值
----|:--:|:--:|:--:
info|Object| 后台接口返回的数据 | {}
type|String|CONSULTATION(会诊) \| APPOINTMENT(预约) \| REFERRAL(转诊) | doctor

### 事件说明

属性名|说明|回调参数
----|:--:|:--:
click|点击卡片后出发| 选中的卡片的info

