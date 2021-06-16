<template>
   <member-card :value="info" class="mwp-patient-card" @click="click" type="patient" :gender="info.patGender">
    <template v-slot:topLeft="{value}">
      <span class="mwp-patient-card__name mr-4">{{value.patName}}</span>
      <span class="mwp-patient-card__gender mr-4">{{value.patGender === 'M' ? '男' : '女'}}</span>
      <span class="mwp-patient-card__age mwp-patient-card__gray-font">{{value.patAge}}</span>
    </template>
     <template v-slot:topRight="{value}">
      <span class="mwp-patient-card__status" :class="`is-${value.consultTationStatus}`">{{statusMap[value.consultTationStatus]}}</span>
    </template>
    <template v-slot:bottom="{value}">
      <ul class="mwp-patient-card__ul">

        <!-- 上部 -->
        <!-- 会诊 -->
        <li class="mwp-patient-card__li" v-if="type === BIZTYPE.CONSULTATION">
          <span class="mwp-patient-card__gray-font">申请时间:</span>
          <span class="mwp-patient-card-value">{{value.applicationDate}}</span>
        </li>
        <!-- 预约 -->
        <li class="mwp-patient-card__li" v-if="type === BIZTYPE.APPOINTMENT">
          <span class="mwp-patient-card__gray-font">申请时间:</span>
          <span class="mwp-patient-card-value">{{value.logcDate}}</span>
        </li>
        <!-- 转诊 -->
        <li class="mwp-patient-card__li" v-if="type === BIZTYPE.REFERRAL">
          <span class="mwp-patient-card__gray-font">申请时间:</span>
          <span class="mwp-patient-card-value" v-if="pageType === 'RETURN'">{{
          value.returnTime || '-'}}</span>
          <span class="mwp-patient-card-value" v-else>{{ value.createTime || '-' }}</span>
        </li>

        <!-- 中部 -->
        <!-- 会诊 -->
        <li class="mwp-patient-card__li" v-if="type === BIZTYPE.CONSULTATION">
          <span class="mwp-patient-card__gray-font">会诊类型:</span>
          <span class="mwp-patient-card-value">临床会诊</span>
        </li>
        <!-- 预约 -->
        <li class="mwp-patient-card__li" v-if="type === BIZTYPE.APPOINTMENT">
          <span class="mwp-patient-card__gray-font">预约类型:</span>
          <span class="mwp-patient-card-value">{{appointmentType[info.appointmentType]}}</span>
        </li>
        <!-- 转诊 -->
        <template v-else-if="type === BIZTYPE.REFERRAL">
          <li class="mwp-patient-card__li" >
            <span class="mwp-patient-card__gray-font">转诊类型:</span>
              <span class="mwp-patient-card-value">{{
            referralType || info.referralTypeName || '-'
          }}</span>
          </li>
          <li class="mwp-patient-card__li" v-if="type === BIZTYPE.REFERRAL && pageType === 'RETURN'">
            <span class="mwp-patient-card__gray-font">来源单位:</span>
            <span class="mwp-patient-card-value">{{info.fromHospitalName}}</span>
          </li>
        </template>

        <!-- 底部 -->
        <!-- 预约 -->
        <li class="mwp-patient-card__li" v-if="type === BIZTYPE.APPOINTMENT">
          <span class="mwp-patient-card__gray-font">就诊时间:</span>
          <span class="mwp-patient-card-value" v-if="info.treatmentTime">{{info.treatmentTime | globalFilterGetDate}}</span>
          <span class="mwp-patient-card-value" v-else-if="info.dateTimeStr">{{info.dateTimeStr}}</span>
          <span class="mwp-patient-card-value" v-else-if="info.fromStartTime && info.fromEndTime">{{getDateStr3(info.fromStartTime)}} {{info.toEndTime}}</span>
          <span class="mwp-patient-card-value" v-else>-</span>
        </li>
        <!-- 转诊 -->
        <li class="mwp-patient-card__li" v-if="type === BIZTYPE.REFERRAL">
            <span class="mwp-patient-card__gray-font" >就诊时间:</span>
          <template v-if="pageType === 'CHOOSEPATIENT'">
            <span class="mwp-patient-card-value" >{{info.treatmentTime | globalFilterGetDate}}</span>
          </template>
          <template v-else>
            <span class="mwp-patient-card-value" >{{info.fromStartTime | globalFilterGetDate}}</span>
          </template>
        </li>
        <!-- 会诊 -->
        <li class="mwp-patient-card__li" v-if="type === BIZTYPE.CONSULTATION">
          <span class="mwp-patient-card__gray-font" >会诊时间:</span>
          <span class="mwp-patient-card-value" v-if="value.arrangeDate">{{getDateStr2(value.arrangeDate)}}&nbsp;&nbsp;{{value.arrangeTime}}</span>
          <span class="mwp-patient-card-value" v-else>{{getTimeRangStr3(value.appointmentStartTime, value.appointmentEndTime)}}</span>
        </li>
      </ul>
    </template>
  </member-card>
</template>
<script>

// 业务类型
const BIZTYPE = {
  APPOINTMENT: 'APPOINTMENT',
  REFERRAL: 'REFERRAL',
  CONSULTATION: 'CONSULTATION'
}

// 预约类型
const appointmentType = {
  'OUTPATIENT': '门诊预约',
  'HOSPITALIZATION': '住院预约',
  'CT': 'CT检查',
  'DR': 'DR检查',
  'ULTRASONIC': '超声检查',
  'MRI': 'MRI检查',
  'ECG': '心电图检查',
  'ERCP': '内窥镜检查'
}
const statusMap = {
  IS_VALID: '有效会诊',
  TO_BE_CONFIRMED: '待确认',
  RECEIVED: '待会诊',
  NOTACCEPTED: '无法安排',
  CONSULTATIONING: '进行中',
  HADFINISH: '已完成',
  CANCEL: '已取消',
  APPLIED: '待支付',
  UNRECEIVED: '待接收',
  DISMISSED: '已退诊',
  REVOKE: '已撤回'
}
export default {
  name: 'mwp-patient-card',
  data () {
    return {
      BIZTYPE,
      statusMap,
      appointmentType,
      referralTypeObj: {
        HOSPITALIZATION: '住院转诊',
        CHECK: '检查转诊',
        RETURN: '转回患者',
        OUTPATIENT: '门诊转诊'
      },
    }
  },
  filters: {
    globalFilterGetDate (date) {
      if (date) {
        // 如果是带秒的时间，就把秒去掉
        if (date.match(/:/g).length === 2) {
          return date.substr(0, date.lastIndexOf(':'))
        } else {
          return date
        }
      } else {
        return '-'
      }
    }
  },
  computed: {
    referralType () {
      return this.info.referralType ? this.referralTypeObj[this.info.referralType] : ''
    }
  },
  methods: {
    // 08-20(周四)
    getDateStr3 (date) {
      var days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      let str = date.substr(5, 10) + '(' + days[new Date(date).getDay()] + ')'
      return str
    },
    getTimeRangStr3 (startDate, endDate) {
      if (!startDate) return ''
      var days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      if (endDate) {
        let str = startDate.substr(0, 10) + ' (' + days[new Date(startDate.substr(0, 10)).getDay()] + ') ' + startDate.substr(11, 5) + '-' + endDate.substr(11, 5)
        return str
      } else {
        return startDate.substr(0, 10) + ' (' + days[new Date(startDate.substr(0, 10)).getDay()] + ')'
      }
    },
    // 2018-12-20 (周三)
    getDateStr2 (date) {
      var days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      let str = date + ' (' + days[new Date(date).getDay()] + ')'
      return str
    },
    click () {
      this.$emit('click', this.info)
    }
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    type: {
      type: String,
      default: () => 'APPOINTMENT'
    },
    pageType: {
      type: String,
      default: ''
    },
  }
}
</script>