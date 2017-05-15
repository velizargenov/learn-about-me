import knex from '../knex'

export default async function getUsers (req, res, next) {
  try {
    let rows = await knex('learn_about_me')
    .select([
      'username',
      'bio',
      'created_at'
    ]).orderBy('created_at', 'desc')
    if (rows) {
      res.ok(rows)
    } else {
      res.ok(null)
    }
  } catch (e) {
    return next(e)
  }
}
