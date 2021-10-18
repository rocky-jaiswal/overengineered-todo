import Head from 'next/head'

interface Props {
  title: string
}

const PageHead = (props: Props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default PageHead