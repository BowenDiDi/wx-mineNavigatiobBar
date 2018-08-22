const util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  jump3: function () {
      util.relaunchFunction('../page3/page3')
    // wx.reLaunch({
    //   url: '../page3/page3'
    // })
  }
})