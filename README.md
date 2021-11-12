# 答题小程序云开发版
## 部署流程

1. 注册微信小程序账号，开通云服务。
2. 将代码下载到本地。用微信小程序开发工具打开。

​    3.设置云开发环境。这里生成的云开发环境中的ID，需要在微信小程序代码中做配置。配置云开发环境ID。

​    4.创建集合。点击微信开发者工具栏上的云开发菜单，跳转到云开发控制台。

> 这里需要特别说明一下，questionBank中的字段，需要自己手动创建。具体的格式参考代码仓库中的exam_demo.json文件。

​    5.同步云函数库。用微信开发者工具打开代码，可以看到如下的目录。

![image-20211111164136235](https://github.com/NoMorningstar/AnswerApplet/pi/image-20211111164136235.png)

​    鼠标选中cloudfunctions目录，右键，选择同步云函数。

​     同步成功之后，云开发控制台中的云函数列表，则有如下几个函数。

![image-20211111164037691](E:\系统默认\桌面\移动互联开发\pic\image-20211111164037691.png)

​     6.导入题目数据。

点击云开发控制台中的数据库，接着创建集合：question、questionstatus、userInfo、feedback 、questionBank集合，选择导入按钮，在questionBank导入题目文件。

![image-20211111164312375](E:\系统默认\桌面\移动互联开发\pic\image-20211111164312375.png)




## 欢迎体验并提出你宝贵的建议
![gh_87fd9d30b3e1_430](https://github.com/NoMorningstar/AnswerApplet/blob/master/pic/gh_87fd9d30b3e1_430.jpg)

## 参考文档
- [ColorUI](https://github.com/weilanwl/ColorUI)

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

