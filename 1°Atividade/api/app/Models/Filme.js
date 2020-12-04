'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Filme extends Model {
    Genero(){
        return this.belongsTo("App/Models/Genero")
    }
 
    User(){
        return this.belongsTo("App/Models/User")
    }

}

module.exports = Filme
