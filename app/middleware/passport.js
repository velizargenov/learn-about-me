import knex from '../knex'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

passport.use('login', new LocalStrategy((username, password, done) => {
  knex('learn_about_me').where({ username }).first()
  .then((user) => {
    if (!user) {
      return done(null, false)
    } else {
      return done(null, user)
    }
  })
  .catch((err) => { return done(err) })
}))

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((obj, done) => {
  done(null, obj)
})

export default passport
