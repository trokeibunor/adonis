"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class FindCustomer {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, response, params: { id } }, next) {
    const Customer = use("App/Models/Customer");

    const customer = await Customer.find(id);
    // call next to advance the request

    if (!customer) {
      return response.status(404).json({
        message: "customer not found",
        id,
      });
    }
    request.body.customer = customer;
    await next();
  }
}

module.exports = FindCustomer;
