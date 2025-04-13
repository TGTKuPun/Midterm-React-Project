// Swiper core
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

// Import Slide Component
import Slide from '../components/Slide';

// Style
import '../assets/css/Home.css';

// Images
import slide1 from '../assets/images/azurlane-banner-31fa6075.jpg';
import slide2 from '../assets/images/arknights-banner-f282a3df.jpg';
import slide3 from '../assets/images/mahjongsoul-banner-9576a239.jpg';
import slide4 from '../assets/images/bluearchive-banner-5a55c939.jpg';
import slide5 from '../assets/images/aethergazer-banner-f91f2697.jpg';

// Images for title
import title1 from '../assets/images/title-azurlane.png';
import title2 from '../assets/images/title-arknights.png';
import title3 from '../assets/images/title-mahjongsoul.png';
import title4 from '../assets/images/title-bluearchive.png';
import title5 from '../assets/images/title-aethergazer.png';

// Image for pagination
import icon1 from '../assets/images/azurlane-icon.jpg';
import icon2 from '../assets/images/arknight-icon.png';
import icon3 from '../assets/images/mahjongsoul-icon.jpg';
import icon4 from '../assets/images/bluearchive-icon.png';
import icon5 from '../assets/images/aether-icon.png';

export default function Home() {
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
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            const images = [icon1, icon2, icon3, icon4, icon5];
            return `<span class="${className}" style="background-image: url(${images[index]}); background-size: cover; width: 55px; height: 55px; background-color: rgba(0, 0, 0, 0.5); background-position: center center; margin-bottom: 20px; border-radius: 15px"></span>`;
          },
        }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="swiper-fade"
        style={{
          height: '100%',
        }}
      >
        {[
          { img: slide1, titleImage: title1 },
          { img: slide2, titleImage: title2 },
          { img: slide3, titleImage: title3 },
          { img: slide4, titleImage: title4 },
          { img: slide5, titleImage: title5 },
        ].map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide
              backgroundImage={slide.img}
              altText={`Slide ${index + 1}`}
              titleImage={slide.titleImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
