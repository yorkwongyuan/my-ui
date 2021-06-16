# 安装
### 通过npm安装
```shell
npm install mwp-ui
```

### 引入

#### 全局引入

```js
import Vue from 'vue';
import mwpUi from 'mwp-ui'
import 'mwp-ui/lib/styles/mwp-ui.css'
Vue.use(mwpUi)
```

#### 按需引入

```js
import Photo from 'mwp-ui/lib/photo'
import 'mwp-ui/lib/styles/photo.css'
```
如果嫌麻烦,可以使用 [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)插件进行配置将其简化。

首先需要安装 `babel-plugin-component`

```shell
npm i babel-plugin-component -D
```

然后需要在`.babelrc`文件中加入配置

```.txt
 "plugins": [
    "transform-vue-jsx",
    "transform-runtime",
    [
      "import",
      {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
      }
    ],
    "transform-decorators-legacy",
    [
      "component",
      {
        "libraryName": "mwp-ui",
        "styleLibrary": {
          "name": "styles",
          "base": false
        }
      }
    ]
  ]
```

此时的引入方式可以改为:

```javascript
import { Button } from 'mwp-ui'
Vue.component(Button.name, Button)
```
或者在sfc文件中按常规方式引入

```javascript
import {Button} from 'mwp-ui'

...
components: {
  Button
}
...
```