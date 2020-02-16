import { request } from '../utils/common.request'

export const login = (username, password) => {
  return request({
    url: 'ag/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}
