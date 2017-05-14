import config from 'config'
import createApp from './createApp'
import log from './log'

const app = createApp()

app.listen(config.port, () => {
  log.info(`Listening to port ${config.port}`)
})
