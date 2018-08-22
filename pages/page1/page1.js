const util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  jump2: function () {
      util.redirectFunction('../page2/page2')
    // wx.redirectTo({
    //   url: '../page2/page2'
    // })
  }
})