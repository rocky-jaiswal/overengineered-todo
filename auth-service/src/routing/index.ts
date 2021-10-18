import { FastifyInstance, FastifyPluginOptions } from 'fastify'

import ping from '../controllers/healthController'
import login from '../controllers/loginController'

const routing = (server: FastifyInstance, _opts: FastifyPluginOptions, done: Function) => {
  server.get('/ping', ping)
  server.post('/session', login)

  done()
}

export default routing
