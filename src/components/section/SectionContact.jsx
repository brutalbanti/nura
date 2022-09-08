import React from 'react'
import './contact.css'

import iconOne from '../../img/contact/01.svg'
import iconTwo from '../../img/contact/02.svg'
import iconThree from '../../img/contact/03.svg'
import qrCode from '../../img/contact/qr.svg'


const SectionContact = () => {
    return (
        <section className='page__contact' id='contacts'>
            <div className="contact__container">
                <div className="contact__body body-contact-content">
                    <div className="body-contact-content__maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.4028413973706!2d71.42330153312109!3d51.12929995626759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42458713a6ad47d5%3A0x51b4bb921db67e09!2z0JHQpiBFbWVyYWxkIFRvd2Vy!5e0!3m2!1sru!2sua!4v1662621278880!5m2!1sru!2sua" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='contact-maps'></iframe>
                    </div>
                    <div className="body-contact-content__contacts contacts-content">
                        <div className="contacts-content__title">Контакты</div>
                        <div className="contacts-content__sub-title">ул. Кунаева 10, БЦ “Изумрудный”, блок - А, этаж 1</div>
                        <div className="contacts-content__social social-contacts-content">
                            <div className="social-contacts-content__social social-content">
                                <a href="" className="social-content__item">
                                    <img src={iconOne} alt="" />
                                    +7 (700) 001-18-88
                                </a>
                                <a href="" className="social-content__item">
                                    <img src={iconTwo} alt="" />
                                    info@nuramm.kz
                                </a>
                                <a href="" className="social-content__item">
                                    <img src={iconThree} alt="" />
                                    @nura.premier
                                </a>
                            </div>
                            <div className="social-contacts-content__qr">
                                <img src={qrCode} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionContact