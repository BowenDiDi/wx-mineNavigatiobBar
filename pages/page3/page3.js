const util = require('../../utils/util.js')
Page({
    data: {
        logs: []
    },
    jumpBack: function () {
        util.relaunchFunction('../index/index')
        // wx.reLaunch({
        //   url: '../page3/page3'
        // })
    }
})