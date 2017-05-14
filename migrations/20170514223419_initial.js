
exports.up = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('learn_about_me')
    .createTable('learn_about_me', function (table) {
      table.increments('id').notNullable()
      table.string('username', 250).notNullable().unique()
      table.string('password').notNullable()
      table.string('bio')
    })
    .raw('ALTER TABLE learn_about_me ADD updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW()')
    .raw('ALTER TABLE learn_about_me ADD created_at TIMESTAMP NOT NULL DEFAULT NOW()')
}

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('learn_about_me')
}
