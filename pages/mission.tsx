import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

const Contact: NextPageWithLayout = () => {
  return (
    <section className="w-3/5 ml-[40%] p-10 text-justify">
      <p className="uppercase text-yellow-500">
        The Space Athletics Federation’s primary mission is to educate, motivate and activate.
      </p>
      <p>
        For over 50 years, ever since the first rocket powered a crew into orbit, space activities have been the preserve of government-sponsored specialists. That era of pioneers is in a transition. Soon more people from all walks of life will become involved in this great adventure.
      </p>
      <p>
        Our first polar explorers experienced vast expanses on the surface of our planet; for them, it was like “space” on Earth. Those journeys into the unknown revealed the human desire for new ideas & destinations. Media reports detailing their progress inspired the public’s imagination.
      </p>
      <p>
        Today, Space is the final frontier. Our telescopes peer back in time at supernovas from long before the first dinosaurs. Soon, the first humans will depart for Mars.
      </p>
      <p>
        But first, Space will become the location for increased activity by a wider population, of whom the fittest — our athletes — will be among them.
      </p>
      <p>
        The Space Athletics Federation exists to make that dream a reality.
      </p>
      <h1>Our Mission</h1>
      <ul>
        <li>Organizing connected sporting events on and off Earth</li>
        <li>Motivating people via SAF™ products, clothing & fitness apps</li>
        <li>Educating members about Space and Sport via published articles and related content</li>
        <li>Facilitating research on athletics in Space</li>
        <li>Collaborating with other space sports organisations</li>
        <li>Creating a Space Athletics Federation™ category for Children</li>
        <li>Building a Metaverse presence and creating digital goods</li>
      </ul>
      <p>Being the fastest and the strongest links the realms of Sport & Space. Both require a mindset that desires a healthy body, testing individual limits, setting new records, and creating firsts.</p>
      <p>The global athletics community is one of the largest, most diverse communities on the planet. Membership of the Space Athletics Federation is open to AstroAthletes from all backgrounds.</p>
      <p>We will strive for the stars together.</p>
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
