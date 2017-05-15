import express from 'express'
import status from 'express-status'
import log from './log'
import ok from './middleware/ok'
import logger from './middleware/logger'
import router from './router'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

export default function app () {
  const app = express()

  app.use(logger)
  status(app)
  app.use(ok)
  app.use(bodyParser.json())
  app.use(router)

  return app
}
