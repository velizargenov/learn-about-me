import bcrypt from 'bcrypt'

export default function checkPassword (guess, hashedPassword, done, user) {
  bcrypt.compare(guess, hashedPassword, (err, isMatch) =>  {
    if (err) {
      return done(err)
    }
    if (isMatch) {
      return done(null, user)
    } else {
      return done(null, false, {
        message: 'Invalid password'
      })
    }
  })
}
