import knex from 'knex'
import log from './log'
import knexfile from '../knexfile'

const env = process.env.NODE_ENV || 'development'
const config = knexfile[env]

if (!config) {
  log.error('Could not find database config in ./knexfile.js for env ' + env)
}

export default knex(config)
