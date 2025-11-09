
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.p_img2_2} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <b className='text-gray-800 text-2xl'>MATIFY- THE CARPET EDITION</b>
              <p>🏁 About The Carpet Edition

Welcome to The Carpet Edition — where craftsmanship meets comfort.
We’re not just another car mat brand. We’re car lovers who got tired of boring rubber mats and decided to build something better — mats designed by real carpet experts, built for people who love their rides as much as we do.

Each mat we create blends luxury, protection, and precision fit, giving your car a new level of comfort and class. From the soft texture to the perfect finish, every detail is hand-checked to make sure your car interior feels premium and personal.

We believe that your car’s floor deserves the same attention as its paint or alloys — because luxury begins under your feet.

Driven by passion. Crafted with care.
The Carpet Edition — For those who love every inch of their car.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b className='text-gray-800 text-2xl'>Quality Assurance:</b>
            <p className=' text-gray-600'>✅ Handcrafted Luxury: Designed by expert carpet makers for a premium, high-end finish.<br/>
✅ Custom Fit: Tailored for every car model — no loose edges or awkward gaps.
</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b className='text-gray-800 text-2xl'>Convenience:</b>
            <p className=' text-gray-600'>✅ Durable & Stylish: Multi-layer build with rich texture and long-lasting quality.<br/>
✅ Easy to Clean: Dust-trapping fibers that clean in seconds — just tap or vacuum.
</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b className='text-gray-800 text-2xl'>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>✅ Non-Slip & Safe: Anti-skid bottom ensures a steady, secure hold.<br/>
            ✅ Made with Passion: Built by car lovers, for car lovers — The Carpet Edition way.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
