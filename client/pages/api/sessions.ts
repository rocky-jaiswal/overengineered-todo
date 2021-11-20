import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { withSessionAPI } from '../../lib/withSession'

const createSessionFromAuthService = async ({ email, password }: Record<string, string>) => {
  // TODO: Use auth-service url from config
  const res = (await axios.post('http://localhost:3001/v1/sessions', { email, password })) as {
    data: Record<string, string>
  }
  return res.data
}

async function sessionHandler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.status(404).json({})
  }

  try {
    // TODO: Can do basic validation on email & password
    const result = await createSessionFromAuthService({
      email: req.body.email,
      password: req.body.password
    })

    req.session.token = result.token
    await req.session.save()

    res.status(200).json({ login: 'success' })
  } catch (err) {
    console.error(err)
    res.status(401).json({})
  }
}

export default withSessionAPI(sessionHandler)
