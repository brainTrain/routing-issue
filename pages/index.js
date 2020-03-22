import Head from 'next/head'
import Link from 'next/link'

const Home = () => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Link href="/place/[slug]" as="/place/oh-hai-slug">
        <a>Go To a Profile</a>
      </Link>
    </main>
  </div>
)

export default Home
