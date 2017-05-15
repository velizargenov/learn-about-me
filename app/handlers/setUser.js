import knex from '../knex'

export default async function (req, res, next) {
  const { username, password } = req.body

  try {
    try {
      await knex('learn_about_me').insert({
        username: username,
        password: password
      })
    } catch (e) {
      if (e.code === 'ER_DUP_ENTRY') {
        log.debug(`User ${username} already exists`)
        return res.redirect('/signup')
      }
    }

  } catch (e) {
    log.debug(`Unable to set entry ${username}`)
    return next(e)
  }
  res.ok()
}
