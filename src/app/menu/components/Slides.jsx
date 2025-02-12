"use client";

import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";

// import required modules
import { EffectCube, Navigation } from "swiper/modules";

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { MoonLoader } from "react-spinners";

const Slides = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return !isClient ? (
    <div className="w-full h-[60vh] lg:h-screen flex justify-center items-center">
      <MoonLoader size={60} color="#ffd28d" loading />
    </div>
  ) : (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        modules={[EffectCube, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-ex1",
          prevEl: ".swiper-button-prev-ex1",
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/menu/menu-001.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/menu/menu-002.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/menu/menu-003.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/menu/menu-004.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/menu/menu-005.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/menu/menu-006.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/menu/menu-007.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/menu/menu-008.jpg" />
        </SwiperSlide>

        <button className="swiper-button-prev-ex1 grid place-content-center left-[41%] lg:-left-16 px-0.5 py-0.5 lg:px-4 lg:py-4 transition text-primary_2 lg:text-heading_color hover:text-primary_2 border border-primary_2 lg:border-heading_color hover:bg-heading_color rounded-full absolute z-[999] top-[95%] lg:top-1/2 -translate-y-1/2">
          <RiArrowLeftSLine size={25} />
        </button>
        <button className="swiper-button-next-ex1 grid place-content-center right-[41%] lg:-right-16 px-0.5 py-0.5 lg:px-4 lg:py-4 transition text-primary_2 lg:text-heading_color hover:text-primary_2 border border-primary_2 lg:border-heading_color hover:bg-heading_color rounded-full absolute z-[999] top-[95%] lg:top-1/2 -translate-y-1/2">
          <RiArrowRightSLine size={25} />
        </button>
      </Swiper>
    </>
  );
};

export default Slides;
