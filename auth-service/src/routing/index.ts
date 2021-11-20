import { FastifyInstance, FastifyPluginOptions } from 'fastify'

import ping from '../handlers/health'
import createSession from '../handlers/sessions/create'
import createUser from '../handlers/users/create'
import getUser from '../handlers/users/get'

const routing = (server: FastifyInstance, _opts: FastifyPluginOptions, done: Function) => {
  server.get('/ping', ping)
  server.post('/sessions', createSession)
  server.post('/users', createUser)
  server.get('/users', getUser)

  done()
}

export default routing
