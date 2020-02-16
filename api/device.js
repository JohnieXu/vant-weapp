import { request } from '../utils/common.request'

/**
 * 获取设备类型列表
 */
export const getDeviceTypeList = () => {
  return request({
    url: 'device_type_list',
    method: 'get'
  })
}

/**
 * 获取我的设备列表
 */
export const getMyDeviceList = () => {
  return request({
    url: 'device_mine',
    method: 'get'
  })
}
