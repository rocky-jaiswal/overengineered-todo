import type { NextPage, GetServerSidePropsContext } from 'next'

import { withSessionSsr } from '../lib/withSession'
import PageHead from '../components/PageHead'
import useUser from '../hooks/useUser'

export const getServerSideProps = withSessionSsr(async function handler(
  context: GetServerSidePropsContext
) {
  const token = context.req.session.token

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
})

const Home: NextPage = () => {
  const params = useUser()

  console.log(params)

  return (
    <div className="flex flex-auto min-w-full">
      <PageHead title={'Home'} />

      <main className="flex min-w-full justify-center items-center">
        <h1 className="">You are logged in</h1>
      </main>
    </div>
  )
}

export default Home
