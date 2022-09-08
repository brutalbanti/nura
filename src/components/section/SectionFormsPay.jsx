import React from 'react'
import './formsPay.css'
import payOne from '../../img/paying/01.svg'
import payTwo from '../../img/paying/02.svg'
import payThree from '../../img/paying/03.svg'
import payFour from '../../img/paying/04.svg'

import iconOne from '../../img/forms/01.svg'
import iconTwo from '../../img/forms/02.svg'




const SectionFormsPay = () => {
    return (
        <section className='page__formsPay'>
            <div className="formsPay__container">
                <div className="formsPay__body formsPay-body-content">
                    <div className="formsPay-body-content_forms forms-content">
                        <div className="forms-content__title">Скачать презентацию</div>
                        <div className="forms-content__sub-title">Оставьте свои контакты и мы вам вышлем</div>
                        <form action="" className="forms-content__form form-content">
                            <div className="form-content__name">
                                <img src={iconOne} alt="" />
                                <input type="text" placeholder='Ваше имя' className='form-content-input' />
                            </div>
                            <div className="form-content__phone">
                                <img src={iconTwo} alt="" />
                                <input type="text" placeholder='Номер телефона' className="form-content-input" />
                            </div>
                            <input type="submit" className='form-content__submit' />
                        </form>
                    </div>
                    <div className="formsPay-body-content__paying paying-content" id='paying'>
                        <div className="paying-content__title">Способы оплаты</div>
                        <div className="paying-title__after">Оплата</div>
                        <div className="paying-content__items items-paying-content">
                            <div className="items-paying-content__item item-paying-content">
                                <div className="item-paying-content__image"><img src={payOne} alt="" /></div>
                                <div className="item-paying-content__text">
                                    Получение займа через АО “ЖилСтройСберБанк”
                                </div>
                            </div>
                            <div className="items-paying-content__item item-paying-content">
                                <div className="item-paying-content__image"><img src={payTwo} alt="" /></div>
                                <div className="item-paying-content__text">
                                    Получение беспроцентной рассрочки от застройщика NURA ELITE                                </div>
                            </div>
                            <div className="items-paying-content__item item-paying-content">
                                <div className="item-paying-content__image"><img src={payThree} alt="" /></div>
                                <div className="item-paying-content__text">
                                    Казахстанская Ипотечная Компания «Орда»                                </div>
                            </div>
                            <div className="items-paying-content__item item-paying-content">
                                <div className="item-paying-content__image"><img src={payFour} alt="" /></div>
                                <div className="item-paying-content__text">
                                    Оплата криптовалютой (Биткоин)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionFormsPay