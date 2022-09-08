import React from 'react'

import iconOne from '../../img/benefits/icon/01.svg'
import iconTwo from '../../img/benefits/icon/02.svg'
import iconThree from '../../img/benefits/icon/03.svg'
import iconFour from '../../img/benefits/icon/04.svg'
import iconFive from '../../img/benefits/icon/05.svg'
import iconSix from '../../img/benefits/icon/06.svg'
import iconSeven from '../../img/benefits/icon/07.svg'

import bigImage from '../../img/benefits/01.png'
import afterImage from '../../img/benefits/02.png'


import './benefits.css'


const SectionBenefits = () => {
    return (
        <section className='page__benefits' id='benefits'>
            <div className="benefits-image__after"><img src={afterImage} alt="" /></div>
            <div className="benefits__body benefits-body-content">
                <div className="benefits-body-content__title">Основные преимущества городка</div>
                <div className="benefits-body-content__content benifets-content">
                    <div className="benifets-content__items benifets-items-content">
                        <div className="benifets-items-content__item benifets-item-content">
                            <div className="benifets-item-content__img"><img src={iconOne} alt="icon" /></div>
                            <div className="benifets-item-content__text">
                                Выгодное
                                месторасположение
                            </div>
                        </div>
                        <div className="benifets-items-content__item benifets-item-content">
                            <div className="benifets-item-content__img"><img src={iconTwo} alt="icon" /></div>
                            <div className="benifets-item-content__text">
                                Охраняемая
                                территория
                            </div>
                        </div>
                        <div className="benifets-items-content__item benifets-item-content">
                            <div className="benifets-item-content__img"><img src={iconThree} alt="icon" /></div>
                            <div className="benifets-item-content__text">
                                Городок по периметру ограждён
                                3-метровым забором, оснащён системой видеонаблюдения 24/7
                            </div>
                        </div>
                        <div className="benifets-items-content__item benifets-item-content">
                            <div className="benifets-item-content__img"><img src={iconFour} alt="icon" /></div>
                            <div className="benifets-item-content__text">
                                Здесь вы почувствуете уединенность, безопасность и комфорт
                            </div>
                        </div>
                    </div>
                    <div className="benifest-content__image"><img src={bigImage} alt="" /></div>
                    <div className="benifets-content__items benifets-items-content">
                        <div className="benifets-items-content__item benifets-item-content">
                            <div className="benifets-item-content__img"><img src={iconFive} alt="icon" /></div>
                            <div className="benifets-item-content__text">
                                Индивидуальные участки ограждены 2-метровыми заборами
                            </div>
                        </div>
                        <div className="benifets-items-content__item benifets-item-content">
                            <div className="benifets-item-content__img"><img src={iconSix} alt="icon" /></div>
                            <div className="benifets-item-content__text">
                                Cобственное
                                приложение
                            </div>
                        </div>
                    </div>
                    <div className="benifets-items-content__item benifets-item-content-last">
                            <div className="benifets-item-content__img"><img src={iconSeven} alt="icon" /></div>
                            <div className="benifets-item-content__text">
                            Каждому владельцу коттеджа даётся возможность на своем земельном участке возводить дополнительные застройки: баню, сауну, летнюю кухню и др.
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default SectionBenefits