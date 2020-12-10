'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FilmeSchema extends Schema {
  up () {
    this.create('filmes', (table) => {
      table.increments()
      table.text("Texto")
      table.integer("id_user").unsigned().references("id").inTable("User").onUpdate("cascade").onDelete("cascade")
      .notNullable()
      table.integer("id_genero").unsigned().references("id").inTable("Genero").onUpdate("cascade").onDelete("cascade")
      .notNullable()
      table.string("Imagem")
      table.timestamps()
    })
  }


  down () {
    this.drop('filmes')
  }
}

module.exports = FilmeSchema
