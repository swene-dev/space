import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

const Index: NextPageWithLayout = () => {
  return (
    <section>

    </section>
  )
}

export default Index

Index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
