"use strict";

const Customer = use("App/Models/Customer");
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with customers
 */
class CustomerController {
  /**
   * Show a list of all customers.
   * GET customers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const customers = await Customer.all();
    response.json({
      message: "here are your customers from index",
      data: customers,
    });
  }

  /**
   * Render a form to be used for creating a new customer.
   * GET customers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new customer.
   * POST customers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, params: { id } }) {
    const { name, description } = request.post();

    const customer = await Customer.create({ name, description });

    response.json({
      message: "Customer has been save",
      data: customer,
    });
  }

  /**
   * Display a single customer.
   * GET customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ request, response, params: { id }, view }) {
    const customer = request.post().customer;
    debugger;

    response.json({
      message: "Here is your customer",
      data: customer,
    });
  }

  /**
   * Render a form to update an existing customer.
   * GET customers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update customer details.
   * PUT or PATCH customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ request, response, params: { id } }) {
    const { name, description, customer } = request.post;
    (customer.name = name), (customer.description = description);

    await customer.save();

    response.status(200).json({
      message: "Your Customer has been updated please take a look",
      data: customer,
    });
  }

  /**
   * Delete a customer with id.
   * DELETE customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async delete({ request, response, params: { id } }) {
    const customer = request.post().customer;
    await customer.delete();

    response.status(200).json({
      message: "Your Customer has been deleted please take a look",
      id,
    });
  }
}

module.exports = CustomerController;
