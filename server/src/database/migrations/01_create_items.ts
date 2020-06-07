import Knex from 'knex' // Knex = type knex

// CREATE TABLE
export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('image').notNullable();
    });
}

// DELETE TABLE
export async function down(knex: Knex) {
    return knex.schema.dropTable('items');
}