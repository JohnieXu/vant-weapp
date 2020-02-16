# 基于有赞vant-weapp的小程序项目

# 使用步骤

## 1. 启动API接口服务

```bash
npm i
npm run server
```

或者用`yarn`

```bash
yarn
yarn server
```

## 2. 进入小程序IDE

小程序项目配置如下

![项目配置](https://tva1.sinaimg.cn/large/0082zybply1gbye3o5chij30l80sc77d.jpg)

> 记得**一定**勾选`使用 npm 模块` 和 `不校验合法域名、`

## 3. 构建小程序npm

如果项目目录的`miniprogram_npm`目录不存在，则执行`工具/构建npm` 构建小程序直接依赖的npm包

![构建npm](https://tva1.sinaimg.cn/large/0082zybply1gbye7iguu0j30s40mawuh.jpg)

## 4. 添加编译模式

项目中API接口区分了正式站接口和开发环境mock数据，需要添加自定义的编译模式进行环境判断，**启动参数必须为env=dev**方可使用本地mock数据

![添加编译模式](https://tva1.sinaimg.cn/large/0082zybply1gbyecj3teuj30wy0gmtak.jpg)

## 5. 项目启动完成

到此项目就已经成功启动，会看到项目首页如下：

![项目预览](https://tva1.sinaimg.cn/large/0082zybply1gbyeid5tsrj30o014i46a.jpg)