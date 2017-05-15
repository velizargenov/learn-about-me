import passport from 'passport'

export default passport.authenticate('login', {
  successRedirect: '/',
  failureRedirect: '/login'
})
