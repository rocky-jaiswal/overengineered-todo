import type { NextPage } from 'next'
import { useState } from 'react'

import { withSessionSSR } from '../lib/withSession'

import PageHead from '../components/PageHead'
import LoginForm from '../components/LoginForm'
import RegistrationForm from '../components/RegistrationForm'

export const getServerSideProps = withSessionSSR(async function handler(context: any) {
  const token = context.req.session.get('token')

  //   if (user === undefined) {
  //     res.setHeader('location', '/login')
  //     res.statusCode = 302
  //     res.end()
  //     return { props: {} }
  //   }

  if (token) {
    return {
      redirect: {
        destination: '/home',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
})

const Root: NextPage = () => {
  const [display, setDisplay] = useState({ showLogin: true })

  return (
    <div className="flex flex-auto min-w-full">
      <PageHead title={'Welcome'} />

      <main className="flex w-full">
        <div className="w-1/2 flex flex-col p-8">
          <div>
            <h1 className="text-4xl">Lorem ipsum dolor sit amet</h1>
          </div>
        </div>
        <div className="w-1/2 flex flex-col bg-blue-200 p-8">
          <div className="mb-8">
            <button
              disabled={display.showLogin}
              onClick={() => setDisplay({ showLogin: true })}
              className="p-4"
              style={display.showLogin ? { color: 'black', opacity: 1 } : { color: 'blue' }}
            >
              Login
            </button>
            <span>|</span>
            <button
              disabled={!display.showLogin}
              className="p-4"
              onClick={() => setDisplay({ showLogin: false })}
              style={display.showLogin ? { color: 'blue' } : { color: 'black', opacity: 1 }}
            >
              Register
            </button>
          </div>
          <LoginForm display={display.showLogin} />
          <RegistrationForm display={!display.showLogin} />
        </div>
      </main>
    </div>
  )
}

export default Root
