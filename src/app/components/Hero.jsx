'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Hero = () => {
  return (
    <Swiper>
      <SwiperSlide>
        <div className="h-[500px] flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
          <div className="text-center">
            <h1 className="text-5xl font-bold">
              Upgrade Your Skills Today 🚀
            </h1>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[500px] flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-500">
          <div className="text-center">
            <h1 className="text-5xl font-bold">
              Learn From Industry Experts
            </h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Hero