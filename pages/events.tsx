import type { NextPageWithLayout } from './_app'
import Image from 'next/image'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

const About: NextPageWithLayout = () => {
  return (
    <section className="md:w-3/5 md:ml-[40%] text-justify text-white text-xl font-bold bg-amber-500">
      <p className="mb-10">
        <Image src="/saf_h.jpeg" alt="Group photo" width="1080" height="720" />
        <p className="p-10">
          Paul Robinson, Sean Tobin, Andrew Coscoran, Hiko Haso & Coach Feidhlim Kelly
        </p>
      </p>
      <p className="mb-10 pl-20 pr-10">
        <Image src="/saf_v.jpeg" alt="Andrew Coscoran" width="1080" height="1349" />
        <p className="pt-10 pb-10">
          Andrew Coscoran
        </p>
      </p>
      <p className="mb-10">
        <Image src="/image1.jpeg" alt="Hiko Haso" width="1080" height="720" />
        <p className="p-10">
          Hiko Haso
        </p>
      </p>
      <p className="mb-10 pl-20 pr-10">
        <Image src="/image2.jpeg" alt="Paul Robinson" width="1080" height="1349" />
        <p className="pt-10 pb-10">
          Paul Robinson
        </p>
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
