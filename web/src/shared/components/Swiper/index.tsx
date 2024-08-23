import React from 'react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type SwiperProps = {
  items: any[];
  children: (item: any) => React.ReactNode;
  swiperId: string;
};

const CustomSwiper: React.FC<SwiperProps> = ({ items, children, swiperId }) => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={16}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: `.swiper-button-next-${swiperId}`,
          prevEl: `.swiper-button-prev-${swiperId}`,
        }}
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
          },
          1199: {
            slidesPerView: 5,
          },
        }}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            {children(item)}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper__arrows">
        <div className={`swiper-button-prev swiper-button-prev-${swiperId}`}></div>
        <div className={`swiper-button-next swiper-button-next-${swiperId}`}></div>
      </div>
    </>
  );
};

export default CustomSwiper;
