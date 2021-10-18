import axios from 'axios'
import { NextApiResponse } from 'next'
import { NextIronRequest, withSessionAPI } from '../../lib/withSession'

const createSessionFromAuthService = async ({ email, password }: Record<string, string>) => {
  // TODO: Use auth-service url from config
  const res = (await axios.post('http://auth-service:3001/v1/session', { email, password })) as {
    data: Record<string, string>
  }
  return res.data
}

async function sessionHandler(req: NextIronRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.status(404).json({})
  }

  try {
    // TODO: Can do basic validation on email & password
    const result = await createSessionFromAuthService({
      email: req.body.email,
      password: req.body.password
    })

    req.session.set('token', result.token)

    await req.session.save()
    res.status(200).json({ login: 'success' })
  } catch (err) {
    console.error(err)
    res.status(401).json({})
  }
}

export default withSessionAPI(sessionHandler)
