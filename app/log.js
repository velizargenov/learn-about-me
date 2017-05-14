import config from 'config'
import winston from 'winston'

const transports = []

if (config.log.console) {
  transports.push(new winston.transports.Console(config.log.console))
}

export default new winston.Logger({
  transports: transports,
  handleExceptions: true,
  humanReadableUnhandledException: true
})
