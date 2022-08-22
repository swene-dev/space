import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Link from 'next/link'

const links = [
  {
    title: 'TerraWatch Space with Raphael Roettgen',
    description: 'Demystifying Earth observation and space technologies - for everyoneoutside the \'space bubble\'.',
    href: 'https://anchor.fm/terrawatch-space/episodes/11---Demystifying-Investing-in-SpaceTech-with-Raphael-Roettgen-e118ql0'
  },
  {
    title: 'Space, the final frontier of sustainable investment',
    description: 'In a recently published book, former banker Raphael Röttgen argues space is the new frontier for investors — as long as they are passionate, have the right connections, and sufficiently deep pockets.',
    href: 'https://www.swissinfo.ch/eng/space--the-final-frontier-of-sustainable-investment-/46213876'
  },
  {
    title: 'The Times',
    description: 'Sky is truly the limit for Richard Donovan, an ultra-runner from Mervue.',
    href: 'https://www.thetimes.co.uk/article/the-race-for-space-sky-is-truly-the-limit-for-richard-donovan-an-ultra-runner-from-mervue-bj3fnwsvn'
  },
  {
    title: 'The42',
    description: 'Nicholas Griggs finished narrowly behind Andrew Coscoran of SAF™ as he eclipsed the European U20 record. Coscoran took the win in a time of 3:56.27.',
    href: 'https://www.the42.ie/nicholas-griggs-breaks-european-u20-indoor-mile-record-5707677-Mar2022'
  },
  {
    title: 'The Irish Times',
    description: 'Richard Donovan: Zen and the art of running across America ... again! Ultra-marathon runner to set off on a 5,260-odd kilometre trek across country.',
    href: 'https://www.irishtimes.com/sport/other-sports/richard-donovan-zen-and-the-art-of-running-across-america-again-1.4854833'
  },
  {
    title: 'Irish Examiner',
    description: 'Forty miles a day, every day, for three straight months. Why does Richard Donovan choose this life?',
    href: 'https://www.irishexaminer.com/sport/othersport/arid-40847828.html'
  },
  {
    title: 'Swiss University Launches "New Space" Course',
    description: 'The course is available for free on a public platform, aiming to make this information more widely accessible to anyone with an interest in the space industry.',
    href: 'https://payloadspace.com/swiss-university-launches-open-new-space-course'
  },
  {
    title: 'E2MC to roll out 2nd investment fund',
    description: 'In the third quarter, there was $8.7 billion invested in space companies around the world.',
    href: 'https://www.bizjournals.com/orlando/inno/stories/fundings/2021/12/06/orlando-aerospace-venture-capital-firm-e2mc-to-rol.html'
  },
  {
    title: 'Space vacations become more accessible',
    description: 'Raphael Roettgen spoke about the different space segments that are ripe for investment in a very exciting time in humanity’s history.',
    href: 'https://www.kratosdefense.com/constellations-podcast/articles/space-vacations-become-more-accessible'
  },
  {
    title: 'From Rockets to Satellite-imaging Analysis',
    description: 'The Growing Investment Case For Space: decreasing costs, technological advancement and business diversity drive projected growth of the next trillion-dollar industry.',
    href: 'https://www.media.quidroom.com/blog/from-rockets-to-satellite-imaging-analysis-the-growing-investment-case-for-space'
  },
  {
    title: 'VC Lab interview',
    description: 'Watch about the seed-stage venture capital firm investing in space startups and the future of space technologies.',
    href: 'https://www.youtube.com/watch?v=47sQMIpsRNo'
  },
  {
    title: 'Space Café WebTalk',
    description: 'Watch Ian Grosner and Raphael Roettgen talked about the space economy sector.',
    href: 'https://www.youtube.com/watch?v=xbCT7h7xFSM'
  },
  {
    title: 'MIT Sloan New Space Age Conference',
    description: 'Watch interview with Raphael Roettgen. With Jeff Crusey by Jae-Yong Lee of NSAC.',
    href: 'https://www.youtube.com/watch?v=FZ4CNNRrFCU'
  },
  {
    title: 'On Orbit Podcast by Via Satellite with Raphael',
    description: 'Pack Your Bags! We’re Going on a Space Vacation! We discuss the economics of the space tourism market.',
    href: 'https://www.satellitetoday.com/podcast/2021/03/15/pack-your-bags-were-going-on-a-space-vacation'
  },
]

const Discover: NextPageWithLayout = () => {
  return (
    <section className="md:w-3/5 md:ml-[40%] p-10 text-justify bg-black pt-20 md:p-10">
      {links.map((item) => (
        <Link href={item.href} key={item.title}>
          <a target="_blank">
            <p className="text-orange font-bold">
              {item.title}
            </p>
            <p className="pt-2 text-white pb-10">
              {item.description}
            </p>
          </a>
        </Link>
      ))}
    </section>
  )
}

export default Discover

Discover.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
