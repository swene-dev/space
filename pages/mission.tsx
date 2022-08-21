import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

const Contact: NextPageWithLayout = () => {
  return (
    <section className="md:w-3/5 md:ml-[40%] text-justify pt-20 md:pt-0">
      <div className="p-10">
        <p className="uppercase text-orange text-3xl">
          The Space Athletics Federation’s primary mission is to educate, motivate and activate.
        </p>
        <p className="pt-10">
          For over 50 years, ever since the first rocket powered a crew into orbit, space activities have been the preserve of government-sponsored specialists. That era of pioneers is in a transition. Soon more people from all walks of life will become involved in this great adventure.
        </p>
        <p className="pt-10">
          Our first polar explorers experienced vast expanses on the surface of our planet; for them, it was like “space” on Earth. Those journeys into the unknown revealed the human desire for new ideas & destinations. Media reports detailing their progress inspired the public’s imagination.
        </p>
        <p className="pt-10 text-3xl font-bold">
          Today, Space is the final frontier. Our telescopes peer back in time at supernovas from long before the first dinosaurs. Soon, the first humans will depart for Mars.
        </p>
        <p className="pt-10 text-orange">
          But first, Space will become the location for increased activity by a wider population, of whom the fittest — our athletes — will be among them.
        </p>
        <p className="pt-10 text-3xl text-center">
          The Space Athletics Federation exists to make that dream a reality.
        </p>
      </div>
      <div className="bg-orange p-10">
        <h1 className="uppercase text-white text-4xl text-center font-semibold">Our Mission</h1>
        <ul className="list-disc font-medium p-20">
          <li className="px-10">Organizing connected sporting events on and off Earth</li>
          <li className="pt-10 px-10">Motivating people via SAF™ products, clothing & fitness apps</li>
          <li className="pt-10 px-10">Educating members about Space and Sport via published articles and related content</li>
          <li className="pt-10 px-10">Facilitating research on athletics in Space</li>
          <li className="pt-10 px-10">Collaborating with other space sports organisations</li>
          <li className="pt-10 px-10">Creating a Space Athletics Federation™ category for Children</li>
          <li className="pt-10 px-10">Building a Metaverse presence and creating digital goods</li>
        </ul>
      </div>
      <div className="p-10">
        <p className="text-3xl font-semibold">Being the fastest and the strongest links the realms of Sport & Space. Both require a mindset that desires a healthy body, testing individual limits, setting new records, and creating firsts.</p>
        <p className="pt-10">The global athletics community is one of the largest, most diverse communities on the planet. Membership of the Space Athletics Federation is open to AstroAthletes from all backgrounds.</p>
        <p className="pt-10 uppercase text-orange text-2xl text-center">We will strive for the stars together.</p>
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
