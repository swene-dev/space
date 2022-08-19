import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

const About: NextPageWithLayout = () => {
  return (
    <section className="w-3/5">
      <p>
        Paul Robinson, Sean Tobin, Andrew Coscoran, Hiko Haso & Coach Feidhlim Kelly
      </p>
      <p>
        Andrew Coscoran
      </p>
      <p>
        Hiko Haso
      </p>
      <p>
        Paul Robinson
      </p>
    </section>
  )
}

export default About

About.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
