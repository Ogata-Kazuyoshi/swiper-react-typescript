import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import './swiperTest.css';

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';
import image9 from '../assets/image9.png';
import { Pagination } from 'swiper/modules';

export const SlidePage = () => {
  return (
    <>
      <h1>test</h1>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        slidesPerView={2} // 自動でスライドの幅を調整
        centeredSlides={true} // アクティブなスライドを中央に配置
        spaceBetween={50} // スライド間のスペース
        className="mySwiper" // カスタムスタイルを適用するためのクラス名
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img style={{ width: '300px' }} src={image1} alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: '300px' }} src={image2} alt="image2" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: '300px' }} src={image3} alt="image3" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: '300px' }} src={image4} alt="image4" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: '300px' }} src={image5} alt="image5" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: '300px' }} src={image6} alt="image6" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: '300px' }} src={image7} alt="image7" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: '300px' }} src={image8} alt="image8" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: '300px' }} src={image9} alt="image9" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
