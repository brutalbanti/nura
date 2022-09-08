// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './slider.css'

import imageHome from '../../img/slider/photo/01.png'
import structureImage from '../../img/slider/photo/02.png'


export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="slider__container">
          <div className="slider__title">Коттеджи</div>
          <div className="slider__body body-slider-content">
            <div className="body-slider-content__image image-slider-content">
              <div className="image-slider-content__img"><img src={imageHome} alt="" /></div>
            </div>
            <div className="body-slider-content__structure structure-slider-content">
              <div className="structure-slider-content__title">179 м<sup><small>2</small></sup></div>
              <div className="structure-slider-content__img">
                <img src={structureImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider__container">
          <div className="slider__title">Коттеджи</div>
          <div className="slider__body body-slider-content">
            <div className="body-slider-content__image image-slider-content">
              <div className="image-slider-content__img"><img src={imageHome} alt="" /></div>
            </div>
            <div className="body-slider-content__structure structure-slider-content">
              <div className="structure-slider-content__title">179 м<sup><small>2</small></sup></div>
              <div className="structure-slider-content__img">
                <img src={structureImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider__container">
          <div className="slider__title">Коттеджи</div>
          <div className="slider__body body-slider-content">
            <div className="body-slider-content__image image-slider-content">
              <div className="image-slider-content__img"><img src={imageHome} alt="" /></div>
            </div>
            <div className="body-slider-content__structure structure-slider-content">
              <div className="structure-slider-content__title">179 м<sup><small>2</small></sup></div>
              <div className="structure-slider-content__img">
                <img src={structureImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};