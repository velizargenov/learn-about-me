import passport from 'passport'

export default function authenticateCallback (req, res, next) {
  passport.authenticate('login', function (err, user, info) {
    if (err) { return next(err) }
    if (!user) { return res.redirect('/login') }
    req.logIn(user, err => {
      if (err) { return next(err) }
      return res.redirect(`/users/${user.username}`)
    })
  })(req, res, next)
}
