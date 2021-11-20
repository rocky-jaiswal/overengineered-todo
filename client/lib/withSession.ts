import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next'
import { GetServerSidePropsContext, GetServerSidePropsResult, NextApiHandler } from 'next'

// TODO: Use config
const config = {
  password: 'J7aVfVo7UiMijzu4ZqkerygEuWAemrhe',
  cookieName: 'token'
  // ttl: 3600,
}

export const withSessionAPI = (handler: NextApiHandler<any>) =>
  withIronSessionApiRoute(handler, config)

export const withSessionSsr = <P extends { [key: string]: unknown } = { [key: string]: unknown }>(
  handler: (
    context: GetServerSidePropsContext
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
) => {
  return withIronSessionSsr(handler, config)
}

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  export interface IronSessionData {
    token?: string
  }
}
