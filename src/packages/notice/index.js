import Notice from './main.vue'
import Vue from 'vue'
Notice.newInstance = function (properties) {
  const instance = new Vue({
    render(h) {
      return h(Notice, {props: properties || {}})
    }
  })
  const component = instance.$mount()
  document.body.appendChild(component.$el)
  const notice = component.$children[0]
  return {
    add(_notice) {
      notice.add(_notice)
    }
  }
}

let noticeInstance

export default (_notice) => {
  noticeInstance = noticeInstance || Notice.newInstance()
  noticeInstance.add(_notice) 
}