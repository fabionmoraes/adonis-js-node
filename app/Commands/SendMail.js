'use strict'

const { Command } = require('@adonisjs/ace')

class SendMail extends Command {
  static get signature () {
    return 'send:mail'
  }

  static get description () {
    return 'Tell something helpful about this command'
  }

  async handle (args, options) {
    this.info('Dummy implementation for send:mail command')
  }
}

module.exports = SendMail
