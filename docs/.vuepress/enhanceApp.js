import myUi from '../../src/index'
import "../../src/styles/index.scss"

export default ({Vue, options, router}) => {
  console.log('router', router)
  router.addRoute({
    path: '/users',
    name: 'Users',
    component: () => import('../component/example/demo.vue'),
    meta: {
      title: '用户管理',
      icon: 'user'
    }
  })
  Vue.use(myUi)
  Vue.use(router)
}