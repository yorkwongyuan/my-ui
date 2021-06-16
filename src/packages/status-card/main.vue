<template>
  <div class="mwp-status-card">
    <div :class="`is-${status}`" class="mwp-status-card__block">
      {{this[this.bizType][status]}}
    </div>
  </div>
</template>
<script>
// 会诊
const CONSULTATION = {
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
// 预约
const APPOINT = {
  UNRECEIVED :'待受理',
  RECEIVED:'待报到',
  NOTACCEPTED: '不受理',
  REVOKE:'已撤回',
  HADREPORT: '已报到',
  CANCEL: '已取消',
  BREAKPROMISE: '失约',
  TREATMENTED: '已就诊'
}
// 转诊
const REFERRAL = {
  UNRECEIVED: '待安排',
  RECEIVED: '已安排',
  NOTACCEPTED: '不接收',
  REVOKE: '已撤回',
  HADREPORT: '已报到',
  CANCEL: '已取消',
  RESERVED: '已预约',
  TREATMENTED: '已就诊'
}
export default {
  name: 'status-card',
  data() {
    return {
      APPOINT,
      CONSULTATION,
      REFERRAL
    }
  },
  props: {
    status: {
      type: String,
      default: () => ''
    },
    bizType: {
      type: String,
      default: () => ''
    }
  }
}
</script>