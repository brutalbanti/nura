import React from 'react'
import imageLocation from '../../img/location/01.png'
import './location.css'

const SectionLocation = () => {
    return (
        <section className='page__location' id='location'>
            <div className="location__title-after">ЛОКАЦИЯ</div>
            <div className="location__container">
                <div className="location__body location-content">
                    <div className="location-content__text text-location-content">
                        <div className="text-location-content__title">Локация</div>
                        <div className="text-location-content__text">Закрытый коттеджный городок Nura Elite расположен в элитном и перспективном районе столицы, рядом с зелёным поясом по соседству с Vella Village.
                            <br />
                            <br />
                            Nura Elite - это прекрасное пространство для уединения и активной семейной жизни в гармонии с природой, без городского шума с удобной транспортной развязкой.</div>
                    </div>
                    <div className="location-content__image image-location-content">
                        <div className="image-location-content__image">
                            <img src={imageLocation} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionLocation
