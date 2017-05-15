import knex from '../knex'

export default async function getUser (req, res, next) {
  try {
    let rows = await knex('learn_about_me')
    .where({
      username: req.params.username
    }).select([
      'username',
      'bio',
      'created_at'
    ])
    if (rows) {
      res.ok(rows)
    } else {
      res.ok(null)
    }
  } catch (e) {
    return next(e)
  }
}
