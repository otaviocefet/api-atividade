'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Filme = use("App/Models/Filme")
/**
 * Resourceful controller for interacting with filmes
 */
class FilmeController {
  /**
   * Show a list of all filmes.
   * GET filmes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const filmes = await Filme.all();
    return filmes;
  }

  /**
   * Render a form to be used for creating a new filme.
   * GET filmes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new filme.
   * POST filmes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
      const data = request.only(['Texto', 'id user', 'id genero', 'Imagem' ])
      const filme = await Filme.create(data);
      return filme;
  }

  /**
   * Display a single filme.
   * GET filmes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const filme = await Filme.findOrFail(params.id)
    return filme;
  }

  /**
   * Update filme details.
   * PUT or PATCH filmes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const filme = await Filme.findOrFail(params.id)
    const { Texto, id_user, id_genero, Imagem} = request.only([
      "Texto",
      "id_user",
      "id_genero",
      "Imagem",
    ]);
    filme.Texto = Texto;
    filme.id_user = id_user;
    filme.id_genero = id_genero;
    filme.Imagem = Imagem;
    filme.save()
    return filme;
  }

  /**
   * Delete a filme with id.
   * DELETE filmes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
   
  }
}

module.exports = FilmeController
