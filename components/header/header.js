// component/header.js
// import { navigateFunction } from '../../utils/utils'
const app = getApp()
const util = require('../../utils/util.js')
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        fixed: Boolean,
        color: {
            type: String,
            value: '#000'
        },
        backgroundColor: {
            type: String,
            value: '#fff'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        isx: /iphone10|iphone x/i.test(wx.getSystemInfoSync().model),
        isAndroid: /android/i.test(wx.getSystemInfoSync().system),
        navPage: 'back'
    },
    /**
     * 组件加载
     */
    created: function () {
        let pageStack = app.globalData.pageStack
        if (pageStack.length >= 1) {
            console.log('header现在是back')
            this.setData({
                navPage: 'back'
            })
            console.log('header现在是back', this.data.navPage)
        } else {
            console.log('header现在是home')
            this.setData({
                navPage: 'home'
            })
        }
    },
    methods: {
        /**
         * 返回上一个页面
         */
        backFunction: function () {
            // app.globalData.pageStack.pop()
            console.log('app.globalData.pageStack', app.globalData.pageStack)
            wx.navigateBack({
                delta: 1
            })
        },
        /**
         * 返回home页
         */
        goHomeFunction: function () {
            let home = '../index/index'
            util.navigateFunction(home)
        }
    }
})
