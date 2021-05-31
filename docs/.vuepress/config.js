module.exports = {
  title: 'mwp-ui样式库',
  base: '/mwp-ui/',
  description: '基于vue.js2.x 开发的组件库',
  port: 8083,
  sidebarDepth: 2,
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '主题', link: '/theme/' },
      { text: '组件', link: '/component/basic' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '基础组件',
        collapsable: true,
        children: [
          'component/basic/button',
          'component/basic/notice',
          'component/basic/icon'
        ]
      },
      {
        title: '业务组件',
        collapsable: true,
        children: [
          'component/biz/button'
        ]
      }
    ]
  },
  chainWebpack (config) {
    config.module
    .rule('scss')
    .oneOf('vue')
    .use('px2rem-loader')
    .loader('px2rem-loader')
    .before('scss-loader') // this makes it work.
    .options({ remUnit: 75, remPrecision: 8 })
    .end()
  }
}