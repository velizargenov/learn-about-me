import knex from '../knex'
import log from '../log'
import authenticateCallback from './authenticateCallback'
import hashPassword from '../lib/hashPassword'
import passport from '../middleware/passport'

export default async function (req, res, next) {
  const { username, password } = req.body
  const SALT_FACTOR = 10

  try {
    try {
      const hash = await hashPassword(password)
      await knex('learn_about_me').insert({
        username: username,
        password: hash
      })
      authenticateCallback(req, res, next)
    } catch (e) {
      if (e.code === 'ER_DUP_ENTRY') {
        req.flash('error', 'User already exists')
        log.debug(`User ${username} already exists`)
        return res.redirect('/signup')
      }
    }
  } catch (e) {
    log.debug(`Unable to set entry ${username}`)
    return next(e)
  }
}
