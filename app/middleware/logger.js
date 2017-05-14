import expressWinston from 'express-winston'
import log from '../log'

export default expressWinston.logger({
  winstonInstance: log,
  meta: false,
  expressFormat: true,
  ignoreRoute: (req) => req.path === '/status'
})
