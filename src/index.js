import Button from './packages/button'
import Notice from './packages/notice'
import Icon from './packages/icon'
import mixin from './mixins/emitter'
const components = {
  Button: Button,
  Icon: Icon
}

const install = function (Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
  Vue.mixin(mixin)
  Vue.prototype.$notice = Notice
}

export default install