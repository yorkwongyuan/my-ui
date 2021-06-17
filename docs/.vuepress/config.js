module.exports = {
  title: 'mwp-ui样式库',
  base: '/mwp-ui/',
  description: '基于vue.js2.x 开发的组件库',
  port: 8083,
  sidebarDepth: 2,
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/component/basic' }
    ],
    sidebar: [
      {
        title: '快速开始',
        collapsable: false,
        children: [
          'component/guide/install'
        ]
      },
      {
        title: '基础组件',
        collapsable: true,
        children: [
          'component/basic/button',
          'component/basic/photo',
          'component/basic/member-card',
          'component/basic/status-card'
        ]
      },
      {
        title: '业务组件',
        collapsable: true,
        children: [
          'component/biz/patient-card'
        ]
      }
    ]
  }
}