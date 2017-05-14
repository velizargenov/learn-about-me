import express from 'express'
import status from 'express-status'
import log from './log'
import ok from './middleware/ok'
import logger from './middleware/logger'
import router from './router'

export default function app () {
  const app = express()

  app.use(logger)
  app.use(router)
  status(app)

  return app
}
