import knex from '../knex'
import passport from 'passport'
import checkPassword from '../lib/checkPassword'
import { Strategy as LocalStrategy } from 'passport-local'

passport.use('login', new LocalStrategy(
  async function(username, password, done) {
    let user = await knex('learn_about_me')
    .where({
      username: username
    }).first().select([
      'username',
      'bio',
      'password',
      'created_at'
    ])
    if (user) {
      checkPassword(password, user.password, done, user)
    } else {
      return done(null, false, { message: 'User does not exist!'})
    }
  }
))

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((obj, done) => {
  done(null, obj)
})

export default passport
