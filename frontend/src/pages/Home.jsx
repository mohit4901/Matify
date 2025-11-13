
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Scroll from '../components/Scroll'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <Scroll/>
      <LatestCollection/>

      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home

