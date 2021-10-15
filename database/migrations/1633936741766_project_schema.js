"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProjectSchema extends Schema {
  up() {
    this.create("projects", (table) => {
      table.increments();
      table.timestamps();
      table.string("name");
      table.text("description");
      table.integer("customer_id").unsigned();
      table
        .foreign("customer_id")
        .references("customers.id")
        .onDelete("cascade");
      // .deferrable("deferred");
    });
  }

  down() {
    this.drop("projects");
  }
}

module.exports = ProjectSchema;
