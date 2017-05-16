import knex from '../knex'

export default async function getUser (req, res, next) {
  try {
    let user = await knex('learn_about_me')
    .where({
      username: req.params.username
    }).first().select([
      'username',
      'bio',
      'created_at'
    ])
    if (user) {
      res.render('profile', { user: user })
    } else {
      res.ok(null)
    }
  } catch (e) {
    return next(e)
  }
}
