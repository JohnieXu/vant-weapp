Component({
  properties: {
    onSkip: {
      type: Function,
      optionalTypes: [Boolean],
      value: true,
    },
    passwordLimit: {
      type: Object,
      value: {
        min: 6,
        max: 16
      }
    }
  },
  data: {
    phone: '',
    password: '',
    buttonDisabled: true
  },
  lifetimes: {
    created: function() {},
    attached: function() {
      // 页面创建时执行
      console.info("Page loaded!");
    },
    detached: function() {
      // 页面销毁时执行
      console.info("Page unloaded!");
    }
  },
  methods: {
    onSkipClick (e) {
      const skipType = typeof this.properties.onSkip
      skipType === 'function' && this.onSkip()
    },
    onPhoneInput (e) {
      let phone = e.detail.value || ''
      let buttonDisabled = true
      const password = this.data.password
      phone = phone.slice(0, phone.length >=11 ? 11 : phone.length)
      if (phone && phone.length >= 11 && password && password.length >= this.properties.passwordLimit.min) {
        buttonDisabled = false
      }
      this.setData({
        phone,
        buttonDisabled
      })
      return phone
    },
    onPasswordInput (e) {
      let password = e.detail.value || ''
      let buttonDisabled = true
      const phone = this.data.phone
      if (password.length <= this.properties.passwordLimit.min) {
        // TODO: 密码长度至少6位
      }
      if (phone && phone.length >= 11 && password && password.length >= this.properties.passwordLimit.min) {
        buttonDisabled = false
      }
      this.setData({
        password,
        buttonDisabled
      })
      return password
    },
    onLogin (e) {
      console.log(e.detail.value)
    },
    onLoginOther (e) {
      const way = e.currentTarget.dataset.way
      console.log(way)
    }
  },
});
