const db = wx.cloud.database();
Page({
  options: {
    addGlobalClass: true,
  },


  data: {
    avatarUrl: '',
    userInfo: {},
    userName: 'null',
    userClass: 'null',
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1200,
    elements: [{
        title: '考试',
        name: 'answer',
        icon: 'question',
        color: 'blue'
      },
      {
        title: '预约',
        name: 'order',
        icon: 'like',
        color: 'red'
      },
      {
        title: '练习',
        name: 'exercise',
        icon: 'copy',
        color: 'cyan'
      },
      {
        title: '关于',
        name: 'about',
        icon: 'settings',
        color: 'pink'
      },
    ]
  },

  onLoad: function(options) {
    var that = this; 
    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "../../images/gdgc.png"
        },
        {
          "id": 2,
          "imgurl": "../../images/gdgc.png"
        },
        {
          "id": 3,
          "imgurl": "../../images/gdgc.png"
        },
        {
          "id": 4,
          "imgurl": "../../images/gdgc.png"
        }
      ]
    }; 

    db.collection('userInfo').get({
      success: res => {
        console.log(res)
        this.setData({
          userInfo: res.data[0].userInfo,
          avatarUrl: res.data[0].avatarUrl,
          userName: res.data[0].name,
          userClass: res.data[0]._class,
        })
      }
    }),
    that.setData({
      lunboData: data.datas
    })
  },
  //跳转
  to(event){
    let index = event.currentTarget.id
    let loginId = wx.getStorageSync('loginId')
    if(loginId){
      wx.navigateTo({
      url: "/pages/"+this.data.elements[index].name+"/"+this.data.elements[index].name
    })
    }else{
      wx.navigateTo({
        url: "/pages/welcome/welcome"
      })
      console.log(1);
    }
    
  }
})