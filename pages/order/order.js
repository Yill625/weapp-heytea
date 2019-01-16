//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
  },
  toIndex:function(){
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
})
