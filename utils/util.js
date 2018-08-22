const app = getApp()

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const navigateFunction = url => {
    app.globalData.pageStack.push(url)
    wx.navigateTo({
        url: url
    })
    console.log('app.globalData.pageStack',app.globalData.pageStack)
}
const redirectFunction = url => {
    wx.redirectTo({
        url: url
    })
}
const relaunchFunction = url => {
    app.globalData.pageStack = []
    wx.reLaunch({
        url: url
    })
}
module.exports = {
    formatTime: formatTime,
    redirectFunction: redirectFunction,
    relaunchFunction: relaunchFunction,
    navigateFunction: navigateFunction
}
