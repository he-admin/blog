module.exports = {
  title: 'Notes',
  description: 'Just playing around',
  base: '/',
  themeConfig: {
    nav: [
      {text: '首页', link: '/'},
      {text: '前端体系', link: '/2.note/'},
      {text: '其他', link: '/other'},
      {text: 'GitHub', link: 'https://google.com'},
    ],
    sidebar: {
      "/2.note": [
        {
          title: "1.HTML",
          children: [
            "2.note/1.HTML/1.HTML基础.md",
            "2.note/1.HTML/2.HTML5.md"
          ]
        },
        {
          "title": "2.CSS",
          "children": [
            "2.note/2.CSS/1.CSS基础.md",
            "2.note/2.CSS/2.CSS3.md",
            "2.note/2.CSS/3.预处理器和后处理器.md",
            "2.note/2.CSS/4.现代化CSS.md"
          ]
        },
        {
          "title": "3.JavaScript",
          "children": [
            "2.note/3.JavaScript/1.JavaScript根基.md",
            "2.note/3.JavaScript/2.JavaScript深入.md",
            "2.note/3.JavaScript/3.JavaScript应用.md",
            "2.note/3.JavaScript/4.ES6.md",
            "2.note/3.JavaScript/5.Underscore库源码分析.md",
            "2.note/3.JavaScript/6.Lodashjs库源码分析.md",
            "2.note/3.JavaScript/7.函数式编程.md",
            "2.note/3.JavaScript/8.TypeScript.md"
          ]
        },
        {
          "title": "4.jQuery及其周边库",
          "children": [
            "2.note/4.jQuery及其周边库/1.jQuery基础.md",
            "2.note/4.jQuery及其周边库/2.jQuery第三方库.md",
            "2.note/4.jQuery及其周边库/3.jQuery源码解析以及实现.md"
          ]
        },
        {
          "title": "5.1MVVM框架（Vue）",
          "children": [
            "2.note/5.1MVVM框架（Vue）/1.MVVM框架绪论.md",
            "2.note/5.1MVVM框架（Vue）/2.Vue基础.md",
            "2.note/5.1MVVM框架（Vue）/3.Vue全家桶.md",
            "2.note/5.1MVVM框架（Vue）/4.Vue源码解析以及实现.md",
            "2.note/5.1MVVM框架（Vue）/5.VueRouter源码解析以及实现.md",
            "2.note/5.1MVVM框架（Vue）/6.Vuex源码解析以及实现.md",
            "2.note/5.1MVVM框架（Vue）/7.Axios源码解析以及实现.md",
            "2.note/5.1MVVM框架（Vue）/8.0 Vue SSR.md",
            "2.note/5.1MVVM框架（Vue）/8.1项目 开发Ant Design Pro Vue.md"
          ]
        },
        {
          "title": "5.2MVVM框架（React）",
          "children": [
            "2.note/5.2MVVM框架（React）/1.React基础.md",
            "2.note/5.2MVVM框架（React）/2.React全家桶.md"
          ]
        },
        {
          "title": "6.移动端",
          "children": [
            "2.note/6.移动端/0.移动端开发绪论.md",
            "2.note/6.移动端/1.HTML5混生开发.md",
            "2.note/6.移动端/2.微信小程序.md",
            "2.note/6.移动端/3.Flutter.md",
            "2.note/6.移动端/4.React-Native.md",
            "2.note/6.移动端/5.移动端原生开发.md"
          ]
        },
        {
          "title": "7.Node",
          "children": [
            "2.note/7.Node/1.Node绪论.md",
            "2.note/7.Node/2.原生Node.md",
            "2.note/7.Node/3.Express框架.md",
            "2.note/7.Node/4.Koa2框架.md",
            "2.note/7.Node/5.Egg框架.md"
          ]
        },
        {
          "title": "8.0网络",
          "children": [
            "2.note/8.0网络/1.前端网络基础.md",
            "2.note/8.0网络/2.前端网络应用.md"
          ]
        },
        {
          "title": "8.1前端工程化",
          "children": [
            "2.note/8.1前端工程化/1.前端工程化绪论.md",
            "2.note/8.1前端工程化/2.Webpack.md",
            "2.note/8.1前端工程化/3.Cil书写.md"
          ]
        },
        {
          "title": "8.2 前端安全",
          "children": [
            "2.note/8.2 前端安全/1.前端安全绪论.md",
            "2.note/8.2 前端安全/2.前端基本防护.md",
            "2.note/8.2 前端安全/3.渗透攻防.md"
          ]
        },
        {
          "title": "8.3前端性能优化",
          "children": [
            "2.note/8.3前端性能优化/1.前端性能优化基础.md"
          ]
        },
        {
          "title": "8.4前端代码质量",
          "children": [
            "2.note/8.4前端代码质量/1.前端代码质量绪论.md",
            "2.note/8.4前端代码质量/2.ESLint.md",
            "2.note/8.4前端代码质量/3.前端测试框架Jest.md",
            "2.note/8.4前端代码质量/4.自动化测试.md",
            "2.note/8.4前端代码质量/5.项目质量监测.md"
          ]
        },
        {
          "title": "8.5运维",
          "children": [
            "2.note/8.5运维/1.Linux知识.md",
            "2.note/8.5运维/2.容器化.md",
            "2.note/8.5运维/3.持续集成.md"
          ]
        },
        {
          "title": "8.6前端架构",
          "children": [
            "2.note/8.6前端架构/1.前端架构.md"
          ]
        },
        {
          "title": "9.项目",
          "children": [
            "2.note/9.项目/1.Node项目仿知乎API.md"
          ]
        }

      ]
    }

  },
  markdown: {
    anchor: {permalink: true, permalinkBefore: true, permalinkSymbol: '#'}
  },

}
