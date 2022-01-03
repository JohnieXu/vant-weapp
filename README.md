# 基于有赞vant-weapp的小程序项目

<p align="center">
  <img src="https://tva1.sinaimg.cn/large/00831rSTgy1gd0kr0wlwwj30by0by3yv.jpg" alt="预览二维码" width="200" />
  <p align="center" style="color: #B66112;">请用微信扫码预览</p>
</p>

# 1 使用步骤

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

> `yarn server`此步可以跳过，暂时不考虑用本地mock的接口服务

## 2. 进入小程序IDE

小程序项目配置如下

<p align="center">
  <img src="https://tva1.sinaimg.cn/large/0082zybply1gbye3o5chij30l80sc77d.jpg" alt="项目配置" width="400" />
</p>

> 记得**一定**勾选`使用 npm 模块` 和 `不校验合法域名、`

## 3. 构建小程序npm

如果项目目录的`miniprogram_npm`目录不存在，则执行`工具/构建npm` 构建小程序直接依赖的npm包

<p align="center">
  <img src="https://tva1.sinaimg.cn/large/0082zybply1gbye7iguu0j30s40mawuh.jpg" alt="构建npm" width="400" />
</p>

## 4. 添加编译模式

项目中API接口区分了正式站接口和开发环境mock数据，需要添加自定义的编译模式进行环境判断，**启动参数必须为env=dev**方可使用本地mock数据

<p align="center">
  <img src="https://tva1.sinaimg.cn/large/0082zybply1gbyecj3teuj30wy0gmtak.jpg" alt="添加编译模式" width="400" />
</p>

## 5. 项目启动完成

到此项目就已经成功启动，会看到项目首页如下：

<p align="center">
  <img src="https://tva1.sinaimg.cn/large/00831rSTgy1gd0kigpvzhj30r21a0jty.jpg" alt="项目预览" width="400" />
</p>

# 2 功能预览

## 自定义对话框

<p align="center">
  <img src="https://tva1.sinaimg.cn/large/88920041gy1gy0hngdap6j20r21a0gog.jpg" width="400" />
</p>

<p align="center">
  <img src="https://tva1.sinaimg.cn/large/88920041gy1gy0hng8atvj20r21a0gr6.jpg" width="400" />
</p>

## 优酷小程序 tab 页

<p align="center">
  <img src="https://tva1.sinaimg.cn/large/88920041gy1gy0hngqq1pj20r21a0dkx.jpg" width="400" />
</p>

## 小程序开发引导页

<p align="center">
  <img src="https://tva1.sinaimg.cn/large/88920041gy1gy0hnga4bnj20om17ktcp.jpg" width="400" />
</p>


