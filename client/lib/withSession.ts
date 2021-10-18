import { NextApiRequest, NextApiResponse } from 'next'
import { Session, withIronSession } from 'next-iron-session'

export type NextIronRequest = NextApiRequest & { session: Session }
export type NextIronHandler = (req: NextIronRequest, res: NextApiResponse) => any | Promise<any>

// TODO: Use config
const config = {
  password: 'complex_password_at_least_32_characters_long',
  cookieName: 'token',
  // ttl: 3600,
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  }
}

export const withSessionAPI = (handler: NextIronHandler) => withIronSession(handler, config)

export const withSessionSSR = (context: any) => withIronSession(context, config)
