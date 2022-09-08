import React from 'react'
import './recommend.css'
import iconOne from '../../img/recommend/icon/01.svg'
import iconTwo from '../../img/recommend/icon/02.svg'
import iconThree from '../../img/recommend/icon/03.svg'
import iconFour from '../../img/recommend/icon/04.svg'

import bigImage from '../../img/recommend/01.png'
import afterImage from '../../img/recommend/02.png'



const SectionRecommend = () => {
    return (
        <section className='page__recommend' id='recommend'>
            <div className="recommend__after-title">
                ПОЧЕМУ NURA
            </div>
            <div className="recommend__container">
                <div className="recommend__title">Почему NURA ELITE?</div>
            </div>
            <div className="recommend__body body-recommend-content">
                <div className="body-recommend-content__image"><img src={bigImage} alt="" /></div>
                <div className="body-recommend-content__items items-recommend-content">
                    <div className="items-recommend-content__item item-reccomend-content">
                        <div className="item-reccomend-content__icon"><img src={iconOne} alt="icon" /></div>
                        <div className="item-reccomend-content__text">
                            <div className="item-reccomend-content__title">Энергоэффектиность</div>
                            <div className="item-reccomend-content__descriptions">Дома сохраняют тепло зимой и прохладу летом</div>
                        </div>
                    </div>
                    <div className="items-recommend-content__item item-reccomend-content">
                        <div className="item-reccomend-content__icon"><img src={iconTwo} alt="icon" /></div>
                        <div className="item-reccomend-content__text">
                            <div className="item-reccomend-content__title">Экологически чистый район</div>
                            <div className="item-reccomend-content__descriptions">Городок расположен рядом с лесополосой и к. Нура-Есиль</div>
                        </div>
                    </div>
                    <div className="items-recommend-content__item item-reccomend-content">
                        <div className="item-reccomend-content__icon"><img src={iconThree} alt="icon" /></div>
                        <div className="item-reccomend-content__text">
                            <div className="item-reccomend-content__title">Безопасность</div>
                            <div className="item-reccomend-content__descriptions">Закрытый городок с круглосуточным видеонаблюдением</div>
                        </div>
                    </div>
                    <div className="items-recommend-content__item item-reccomend-content">
                        <div className="item-reccomend-content__icon"><img src={iconFour} alt="icon" /></div>
                        <div className="item-reccomend-content__text">
                            <div className="item-reccomend-content__title">Коммуникации</div>
                            <div className="item-reccomend-content__descriptions">
                                Централизованное водоснабжение, энергоснабжение и канализация.
                                <br />
                                <br />
                                Отопительная система и горячая вода - это один общий газгольдер на весь городок, функционирующий за счет газа.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionRecommend