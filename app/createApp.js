import express from 'express'
import status from 'express-status'
import log from './log'
import ok from './middleware/ok'
import logger from './middleware/logger'
import router from './router'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from './middleware/session'
import passport from './middleware/passport'
import path from 'path'
import flash from 'connect-flash'

export default function app () {
  const app = express()

  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')

  app.use(logger)
  status(app)
  app.use(ok)
  app.use(bodyParser())
  app.use(cookieParser())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(session)
  app.use(flash())
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(router)

  return app
}
