import knex from '../knex'
import log from '../log'
import authenticateCallback from './authenticateCallback'

import passport from '../middleware/passport'

export default async function (req, res, next) {
  const { username, password } = req.body

  try {
    try {
      await knex('learn_about_me').insert({
        username: username,
        password: password
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
