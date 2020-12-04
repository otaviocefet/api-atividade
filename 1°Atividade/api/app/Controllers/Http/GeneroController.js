'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Genero = use("App/Models/Genero")

/**
 * Resourceful controller for interacting with generos
 */
class GeneroController {
  /**
   * Show a list of all generos.
   * GET generos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const generos = await Genero.all();
    return generos;
  }

  /**
   * Display a single filme.
   * GET filme/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}
}

module.exports = GeneroController
