module.exports = {
  title: 'myUi',
  base: '/my-ui/',
  description: 'another lightweight ui toolkit for Vue.js 2.X',
  port: 8083, 
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/component/guide/introduction' },
      { text: '主题', link: '/theme/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/components/': [
        {
          title: '基础组件',
          children: [
            'basic/button',
            'basic/notice'
          ]
        }
      ]
    }
  }
}