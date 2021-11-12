const app = getApp();
Page({
    data: {
      score: '',
      chooseArr: [],
      answerArr: [],
    },

    goIndex: function() {
        wx.switchTab({
          url: '../index/index',
        })
    },

    goOrder:function(){
      wx.navigateTo({
        url: '../order/order',
      })
    },

    onLoad: function(options) {
        console.log('result score'+app.globalData.score);
        console.log("选择的数组"+app.globalData.choose);
        console.log("答案数组"+app.globalData.answer)
        // var a = 0;
        // for(let i=0;i<app.globalData.answer.length;i++)
        // {
        //   if(app.globalData.answer[i] == app.globalData.choose[i])
        //   {
        //     a = a+1;
        //   }
        // }
        // console.log(a);
        console.log(app.globalData.score);
        // app.globalData.score = a;
        this.setData({
          
          //score:a,
          score: Math.round (app.globalData.score),
          chooseArr:app.globalData.choose,
          answerArr: app.globalData.answer,
        })
        
    },
  
})