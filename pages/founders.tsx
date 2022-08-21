import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

const Contact: NextPageWithLayout = () => {
  return (
    <section className="md:w-3/5 md:ml-[40%] p-10 text-justify pt-20 md:pt-0">
      <div className="mb-10">
        <p className="uppercase text-orange text-6xl font-bold">
          Raphael Roettgen
        </p>
        <p className="pt-5">
          Raphael Roettgen is founder and managing partner of E2MC Ventures, a fund that invests in space companies globally.
        </p>
        <p className="pt-5">
          He is a recognized thought leader on Space and lectures on space entrepreneurship and finance at several universities, including the Swiss Institute of Technology and the International Space University. Raphael has also published an acclaimed introductory book on space business and hosts the popular Space Business Podcast.
        </p>
        <p className="pt-5">
          With previous senior roles in investment management firms and banks, Raphael is an advisor on space to both institutional investors and governments.
        </p>
        <p>
          A lecturer and alumnus of the International Space University, he holds degrees in Finance from the Wharton School, Artificial Intelligence from PUC-Rio and Space Studies from the International Space University.
        </p>
      </div>
      <div className="mb-10">
        <p className="uppercase text-orange text-6xl font-bold">
          Richard Donovan
        </p>
        <p className="pt-5">
          Richard Donovan is founder and race director of Earth’s most extreme endurance races, including the North Pole Marathon, Antarctic Ice Marathon, Volcano Marathon and World Marathon Challenge (7 Marathons 7 Continents 7 Days).
        </p>
        <p className="pt-5">
          He is the first person in history to run marathons at both the North and South Poles, set a world record for completing marathons on all 7 continents in 4 days 22 hours 3 minutes, and has run across the continents of North America, South America and Europe.
        </p>
        <p className="pt-5">
          A former director of the global governing body for ultramarathon running, Richard has been race director at several World and Commonwealth Championships. He has also been a keynote speaker at numerous events, including at the US State Department and the Association of International Marathons & Distance Races.
        </p>
        <p className="pt-5">
          Richard holds a primary degree in Economics and Classical Civilization, two postgraduate degrees in Economics and a professional doctorate in Project Management.
        </p>
      </div>
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
