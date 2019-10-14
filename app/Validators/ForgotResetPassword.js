'use strict'

const Antl = use('Antl')

class ForgotResetPassword {
  get validateAll() {
    return true
  }

  get rules () {
    return {
      token: 'required',
      password: 'required|confirmed'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = ForgotResetPassword
