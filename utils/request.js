import { promisify } from './util.js'

const request = promisify(wx.request)

const TOKEN_HEADER = 'token'

const isInvalidToken = () => { return true }

export class Request {
  constructor({ header, baseUrl, dataType = 'json', responseType = 'application/json', checkToken = true, onError, transformReponse } = {}) {
    this.header = header
    this.baseUrl = baseUrl
    this.dataType = dataType
    this.responseType = responseType
    this.checkToken = checkToken
    this.onError = onError || function onError(err) {
      console.error(err)
      wx.showToast({
        title: '请求失败',
        icon: 'none'
      })
    }
    this.transformReponse = transformReponse || (res => res)
  }
  request(options = {}) {
    console.log(this)
    const _options = {
      url: this.baseUrl ? `${this.baseUrl}/${options.url}` : options.url,
      data: options.data,
      header: {
        ...this.header,
        ...options.header
      },
      method: (options.method || 'GET').toUpperCase(),
      dataType: options.dataType || this.dataType,
      responseType: options.responseType || this.responseType
    }
    return promisify(wx.request)(_options).then(res => {
      if (!this.checkToken || (this.checkToken && !isInvalidToken(res))) {
        return this.transformReponse(res)
      }
      // TODO: 处理token过期
      return this.transformReponse(res)
    }).catch(err => {
      this.onError(err)
    })
  }
  setToken(token) {
    (this.header = this.header || {})[TOKEN_HEADER] = token
  }
}

export default request
