import type { NextPage, GetServerSidePropsContext } from 'next'

import { NextIronRequest, withSessionSSR } from '../lib/withSession'
import PageHead from '../components/PageHead'

export const getServerSideProps = withSessionSSR(async function handler(
  context: GetServerSidePropsContext & { req: NextIronRequest }
) {
  const token = context.req.session.get('token')

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
