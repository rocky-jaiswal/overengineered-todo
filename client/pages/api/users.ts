import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { withSessionAPI } from '../../lib/withSession'

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // TODO: Can do basic validation on email & password
    // TODO: Use auth-service url from config
    const response = (await axios.post('http://localhost:3001/v1/users', {
      email: req.body.email,
      password: req.body.password,
      confirmedPassword: req.body.confirmedPassword
    })) as {
      data: Record<string, string>
    }
    const result = response.data

    req.session.token = result.token
    await req.session.save()

    res.status(200).json({ login: 'success' })
  } catch (err) {
    console.error(err)
    res.status(401).json({})
  }
}

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // TODO: Use auth-service url from config
    const response = (await axios.get('http://localhost:3001/v1/users', {
      headers: { token: req.session.token || '' }
    })) as {
      data: Record<string, string>
    }

    const result = response.data

    res.status(200).json(result)
  } catch (err) {
    console.error(err)
    res.status(401).json({})
  }
}

async function sessionHandler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === 'POST') {
    return createUser(req, res)
  }

  if (req.method === 'GET') {
    return getUser(req, res)
  }
}

export default withSessionAPI(sessionHandler)
