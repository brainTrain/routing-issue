import Head from 'next/head'
import { withRouter } from 'next/router'

class Place extends React.Component {
  state = {
  }

  componentDidMount () {
    const { router } = this.props
    const { query: { slug } } = router
    console.log('slug', slug)

    this.setState({ slug })
  }

  render () {
    const { slug } = this.state
    return (
      <div>
        <Head>
          <title>Place Profile</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          we should be seeing a URL slug here:
          {slug}
        </div>
      </div>
    )
  }
}

export default withRouter(Place)
