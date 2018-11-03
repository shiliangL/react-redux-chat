### --------------前端开发--------------
-安装依赖
-配置redeux开发调试
```
import { Provider } from 'react-redux'
import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import App from './App';
import { AppStore } from '@/store';

let store = createStore(rootReducer,
compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )  
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

```

- 使用 connect 链接 组件与 状态中心, connect接收两个参数（其实有4个数据）
> 1-映射数据 可以理解为 state 
> 2-映射方法 

```
import { connect } from "react-redux";

```

### ! create-react-app 中使用装饰器
安装 
```
npm install --save-dev @babel/plugin-proposal-decorators
配置（ npm run /暴露配置之后）
```
  "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "import",
        {
          "libraryName": "antd",
          "style": "css"
        }
      ]
    ]
  },
```


```
代理接口   // "proxy": "http://39.108.68.85:3001/",

### --------------服务器后台--------------


> 基于node,express开发

-app.get,app.post,开发get和post接口
-app.use使用模块
-res.send;res.json;res.sendfile

> 本地服务器开发调试 nodemon 启动后台

> 数据库mongodb,mongodb配合express使用需要插件mongoose

npm i mongoose -S

> mongodb配合express进阶
-mongodb独立工具函数
-express使用body-parser支持post参数
-使用cookie-parser储存登录信息cookie

>密码 cmd5加密+加严

-npm i utility -S