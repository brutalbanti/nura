import React from 'react'
import './cottages.css'
import SimpleSwiperWithParams from '../slider/SimpleSwiperWithParams';
import afterImage from '../../img/slider/photo/03.png'



const SectionCottages = () => {
    
    return (
        <section className='page__cottages'>
              <div className="image-slider-img__after"><img src={afterImage} alt="" /></div>
            <div className="cottages container">
                <SimpleSwiperWithParams/>
            </div>
        </section>
    )
}

export default SectionCottages