# wx-mineNavigatiobBar
自定义小程序头
### 1.utils.js中添加navigateTo、redirectTo、reLaunch三种方法，并在方法中加入对历史记录栈的操作
```
const navigateFunction = url => {
    app.globalData.pageStack.push(url)
    <!-- navigate向栈添加历史 -->
    wx.navigateTo({
        url: url
    })
}
const redirectFunction = url => {
    wx.redirectTo({
        url: url
    })
}
const relaunchFunction = url => {
    app.globalData.pageStack = []
    <!-- reLaunch清空栈 -->
    wx.reLaunch({
        url: url
    })
}
module.exports = {
    redirectFunction: redirectFunction,
    relaunchFunction: relaunchFunction,
    navigateFunction: navigateFunction
}
```
在页面中如果需要用到跳转功能，必须要使用以上封好的方法，不然会导致无法返回
### 2.小程序app.json中window加入
```
<!-- 去除全局默认小程序navigationBar -->
"navigationStyle": "custom"
```
### 3.将自定义header组件component加入小程序目录，并在每个页面的json和wxml中注册引用
在json中注册
```
{
  "usingComponents": {
    "header": "../../components/header/header"
  }
}
```
在wxml中引用
```
<header background-color="#fff" color="#000" fixed>首页</header>
```
### 4.app.js中的globalData中添加页面历史记录栈
```
  globalData: {
      pageStack: []//建立一个空数组作为历史记录栈
  }
```
### 5.在需要跳转的页面中加入
```
const util = require('../../utils/util.js')
```
原本的navigataTo，redirectTo，reLaunch分别对应
```
util.navigateFunction('../logs/logs')
util.redirectFunction('../page2/page2')
util.relaunchFunction('../page3/page3')
```
### 6.左上角back功能去除栈的最后一项
```
    backFunction: function () {
        app.globalData.pageStack.pop()
        wx.navigateBack({
          delta: 1
        })
      },
```
### 7.左上角home功能返回主页（主页url需要自定义）
```
      goHomeFunction: function () {
        let home ='../index/index'
          util.navigateFunction(home)
      }
```
### 8.小程序头样式适配安卓手机或苹果手机
```
    isx: /iphone10|iphone x/i.test(wx.getSystemInfoSync().model),
    isAndroid: /android/i.test(wx.getSystemInfoSync().system)
    <!-- header.wxml中适配样式 -->
    <view class="header {{[isx ? 'isx' : '', isAndroid ? 'android' : '']}}">
```
安卓、苹果手机的navigationBar样式不同，可以根据需要做样式适配

#### 小结：如果在项目开始的时候就用自定义的navigationBar，那么只要在项目框架中写好，完全不会影响到正常的编程，仅仅在第5条中跳转的代码有所不同，而且navigationBar使用起来更加灵活。但是在写好的项目中重新定义，就是很让人头疼的一件事情了。
