/**
 * 处理普通接口response
 * @param {Object} res API接口返回response
 */
export const handleReponse = (res = {}) => {
  const { data, errMsg } = res
  if (!data) {
    return {
      success: false,
      message: errMsg || '网络异常',
      detail: res
    }
  }
  if (data.code !== 200) {
    return {
      success: false,
      message: (data.data || {}).message || '未知异常',
      detail: res
    }
  }
  return {
    success: true,
    data: data.data,
    detail: res
  }
}

/**
 * 处理文件上传接口response
 * @param {Object} res API接口返回response
 */
export const handleUploadReponse = (res = {}) => {
  const { data, errMsg } = res
  if (!data) {
    return {
      success: false,
      message: errMsg || '网络异常',
      detail: res
    }
  }
  if (data.code !== 200) {
    return {
      success: false,
      message: (data.data || {}).message || '未知异常',
      detail: res
    }
  }
  return {
    success: true,
    data: data.data,
    detail: res
  }
}

