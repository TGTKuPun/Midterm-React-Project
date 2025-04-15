import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Box from '@mui/material/Box';
import Slide from '../components/Slide';
import '../assets/css/Home.css';
import slidesJson from '../../data/slides.json';

// Load image from 'images folder'
const images = import.meta.glob('../assets/images/*', {
  eager: true,
  import: 'default',
});

export default function Home() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const parsedSlides = slidesJson.slides.map((item) => ({
      img: images[`../assets/images/${item.img}`],
      titleImage: images[`../assets/images/${item.titleImage}`],
      icon: images[`../assets/images/${item.icon}`],
    }));
    setSlides(parsedSlides);
  }, []);

  return (
    <Box
      sx={{
        paddingTop: '60px',
        paddingX: 2,
        width: '100%',
        margin: 0,
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {slides.length > 0 && (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}" style="background-image: url(${slides[index].icon}); background-size: cover; width: 55px; height: 55px; background-color: rgba(0, 0, 0, 0.5); background-position: center center; margin-bottom: 20px; border-radius: 15px"></span>`;
            },
          }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className="swiper-fade"
          style={{ height: '100%' }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Slide
                backgroundImage={slide.img}
                altText={`Slide ${index + 1}`}
                titleImage={slide.titleImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
}
