import Button from './packages/button'
import Notice from './packages/notice'
const components = {
  WButton: Button
}

const install = function (Vue, options={}) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
  Vue.prototype.$notice = Notice
}

export default install