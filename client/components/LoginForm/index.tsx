import { useEffect, useState } from 'react'
import Router from 'next/router'

import { createSession } from '../../lib/api/session'
import useAsync from '../../hooks/useAsync'

interface Props {
  display: boolean
}

function LoginForm(props: Props) {
  const { execute, status } = useAsync<Record<string, string>>(createSession)

  useEffect(() => {
    if (status === 'success') {
      Router.replace('/home')
    }
  }, [status])

  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)

  return (
    <div className="flex p-4" style={props.display ? { display: 'flex' } : { display: 'none' }}>
      <form method="post">
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center">Email:</div>
          <input type="email" name="email" onChange={(e) => setEmail(e.currentTarget.value)} />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-8">
          <div className="flex items-center">Password:</div>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={(e) => {
            e.preventDefault()
            execute({ email, password })
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default LoginForm
