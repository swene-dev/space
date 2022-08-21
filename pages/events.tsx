import type { NextPageWithLayout } from './_app'
import Image from 'next/image'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

const About: NextPageWithLayout = () => {
  return (
    <section className="w-3/5 ml-[40%] p-10 text-justify text-gray-500 text-sm">
      <p className="mb-10">
        <Image src="/saf_h.jpeg" alt="Group photo" width="1080" height="720" />
        Paul Robinson, Sean Tobin, Andrew Coscoran, Hiko Haso & Coach Feidhlim Kelly
      </p>
      <p className="mb-10">
        <Image src="/saf_v.jpeg" alt="Andrew Coscoran" width="1080" height="1349" />
        Andrew Coscoran
      </p>
      <p className="mb-10">
        <Image src="/image1.jpeg" alt="Hiko Haso" width="1080" height="720" />
        Hiko Haso
      </p>
      <p className="mb-10">
        <Image src="/image2.jpeg" alt="Paul Robinson" width="1080" height="1349" />
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
