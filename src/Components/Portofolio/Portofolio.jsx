import React from 'react'
import "./Portofolio.css"
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import "swiper/css";

// import required modules

import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
function Portofolio() {
  return (
    <div className="portofolio">
        <span>
            Recent Projects
        </span>
        <span>
            Portofolio
        </span>
        <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        >
          <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portofolio