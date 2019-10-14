'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
  user () {
    return this.belongsTo('App/Models/User') // belongs apenas um projeto relacionado
  }

  tasks () {
    return this.hasMany('App/Models/Task') // Pode ter vários tasks
  }
}

module.exports = Project
