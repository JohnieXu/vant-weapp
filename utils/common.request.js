import { Request } from './request'
import { handleReponse } from './response'

const env = getApp().globalData.env

const baseUrlMap = {
  dev: 'http://localhost:3000',
  test: 'http://localhost:3000',
  prod: 'https://admintest.api.whbeishu.com/api'
}

const commonRequest = new Request({
  baseUrl: baseUrlMap[env],
  header: {
    token: '123456'
  },
  transformReponse: handleReponse
})

export const request = commonRequest.request.bind(commonRequest)

export default commonRequest
