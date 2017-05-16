import knex from '../knex'

export default async function getUsers (req, res, next) {
  try {
    let users = await knex('learn_about_me')
    .select([
      'username',
      'bio',
      'created_at'
    ]).orderBy('created_at', 'desc')
    if (users) {
      res.render('index', { users: users })
    } else {
      res.ok(null)
    }
  } catch (e) {
    return next(e)
  }
}
