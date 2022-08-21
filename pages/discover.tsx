import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

const Contact: NextPageWithLayout = () => {
  return (
    <section className="w-3/5 ml-[40%] p-10 text-justify pt-20 md:pt-0">
      <h2>Layout Example (Contact)</h2>
      <p>k
      </p>
    </section>
  )
}

export default Contact

Contact.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
