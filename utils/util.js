const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const promisify = (fn) => {
  return function promisedFn({ success, fail, complete, ...restOptions } = {}) {
    return new Promise((resolve, reject) => {
      fn({
        success: (res) => {
          typeof success === 'function' && success(res)
          resolve(res)
        },
        fail: (err) => {
          typeof fail === 'function' && fail(err)
          eject(err)
        },
        complete: () => {
          // TODO:
          typeof complete === 'function' && complete()
        },
        ...restOptions
      })
    })
  }
}

module.exports = {
  formatTime: formatTime,
  promisify: promisify,
}
