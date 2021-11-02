"use strict";

const FindCustomer = require("../app/Middleware/FindCustomer");

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});
Route.get("customers", "CustomerController.index");
Route.get("customers/:id", "CustomerController.show").middleware([
  "findCustomer",
]);
Route.post("customers", "CustomerController.store");
Route.patch("customers/:id", "CustomerController.update").middleware([
  "findCustomer",
]);
Route.delete("customers/:id", "CustomerController.delete").middleware([
  "findCustomer",
]);
