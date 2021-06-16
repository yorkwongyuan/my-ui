import Button from './packages/button'
import Notice from './packages/notice'
import Photo from './packages/photo'
import MemberCard from './packages/member-card'
import Icon from './packages/icon'
import PatientCard from './packages/patient-card'
import StatusCard from './packages/status-card'
import mixin from './mixins/emitter'
const components = {
  Button,
  Icon,
  Photo,
  MemberCard,
  PatientCard,
  StatusCard
}

const install = function (Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
  Vue.mixin(mixin)
  Vue.prototype.$notice = Notice
}

export default install