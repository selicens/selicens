# miniprogram use local images 微信小程序使用本地图片

遇到的一个案例，HBuildX创建的uniapp小程序项目，没有命令行启动，比较老需要使用HBuildX运行成小程序，在微信开发者工具预览时发现无法正确展示图片并且报错：  
`[渲染层网络层错误] Failed to load local image resource /static/banner.png the server responded with a status of 500 (HTTP/1.1 500 Internal Server Error) (env: Windows,mp,1.06.2503281; lib: 3.7.12)`  

运行成h5在浏览器访问正常，排除路径引用错误可能，[参照uniapp文档关于static目录的描述](https://uniapp.dcloud.net.cn/tutorial/project.html#static)：uni-app编译器根据pages.json扫描需要编译的页面，并根据页面引入的js、css合并打包文件。对于本地的图片、字体、视频、文件等资源，如果可以直接识别，那么也会把这些资源文件打包进去
理论上将图片放入static目录下然后以`<image src="/static/xx.png" />`方式使用是没问题的，但是看了下打包产物确实没有static文件夹，最后询问deepseek得出以下解决方案，加上后打包产物就有static目录了

```javascript
{
  "mp-weixin": {
    "packOptions": {
      "imclude": [{ "type": "folder", "value": "static" }]
    }
  }
}
```

[参照微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html#packOptions)：packOptions 用以配置项目在打包过程中的选项，指定 `packOptions.include` 字段，用以配置打包时需要强制带上的文件，其中，`type` 可以取的值为 `folder`、`file`、`suffix`、`prefix`、`regexp2`、`glob2`，分别对应文件夹、文件、后缀、前缀、正则表达式、Glob 规则。所有规则值都会自动忽略大小写  

原生小程序可以在project.config.json中的packOptions字段同样配置
