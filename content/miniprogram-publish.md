# miniprogram-publish 微信小程序打包上传

微信开发者工具右侧上传会打包并分析代码

如提示组件按需注入未通过，在manifest.json（uniapp开发）或app.json（原生小程序开发）中加入：

```javascript
"lazyCodeLoading": "requiredComponents" // 开启小程序按需注入特性
```

如提示图片或音频资源未通过，采用cdn的形式引用资源  
如提示主包大小未通过，采用分包的形式，uniapp开发需在manifest.json中加入：

```javascript
"optimization" : {
  "subPackages" : true // 是否开启分包优化
}
```

假设文件目录如下：

```javascript
├── app.js
├── app.json
├── app.wxss
├── packageA
│   └── pages
│       ├── cat
│       └── dog
├── packageB
│   └── pages
│       ├── apple
│       └── banana
├── pages
│   ├── index
│   └── logs
└── utils
```

uniapp开发在pages.json中配置，原生小程序在app.json中配置以下

```javascript
{
  "pages":[
    "pages/index",
    "pages/logs"
  ],
  "subPackages": [
    {
      "root": "packageA",
      "pages": [
        "pages/cat",
        "pages/dog"
      ],
      "entry": "index.js" // entry 字段可以指定该分包中的任意一个 JS 文件作为入口文件，该文件会在分包注入时首先被执行
    },
    {
      "root": "packageB",
      "name": "pack2",
      "pages": [
        "pages/apple",
        "pages/banana"
      ]
    }
  ]
}
```

上传通过后可以在微信公众平台-管理-版本管理-开发版本中提交审核，待审核通过后可以选择发布体验版或者线上版本
