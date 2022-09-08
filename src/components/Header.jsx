import React from 'react'
import logo from '../img/header/logo.svg'
import whats from '../img/header/contact/01.svg'
import call from '../img/header/contact/02.svg'
import './header.css'


const Header = () => {
    return (
        <header className='header' id='open'>
            <div className="header__container">
                <a href="/" className="logo"><img src={logo} alt="logo" /></a>
                <nav className="header__menu menu">
                    <ul className="menu-list__contact">
                        <li className="contact-item">
                            <a href="" className="contact__link">
                                <img src={whats} alt="" />
                            </a>
                        </li>
                        <li className="contact-item">
                            <a href="" className="contact__link">
                                <img src={call} alt="" />
                                +7 700 001 18 88
                            </a>
                        </li>
                    </ul>
                    <ul className="menu-list__nav">
                        <li className="nav-item">
                            <a href="#main" className="nav__link">О проекте</a>
                        </li>
                        <li className="nav-item">
                            <a href="#location" className="nav__link">Локация</a>
                        </li>
                        <li className="nav-item">
                            <a href="#benefits" className="nav__link">Преимущества</a>
                        </li>
                        <li className="nav-item">
                            <a href="#recommend" className="nav__link">Почему мы?</a>
                        </li>
                        <li className="nav-item">
                            <a href="#paying" className="nav__link">Способ оплаты</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contacts" className="nav__link">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <div class="header__button">
                    <a href="#open" class="icon__menu"><span></span></a>
                    <a href="#close" class="close-icon__menu"></a>
                </div>
            </div>
            <div className="header-body-content__container">
                <div className="header-body-content__info content-header-info">
                    <div className="content-header-info__title">Элитный коттеджный городок в г. Нур-Султан</div>
                    <div className="content-header-info__button button-info">
                        <a href="" className="button-info__button">Скачать презентацию</a>
                    </div>
                    <div className="content-header-info__sub-title">
                        36 коттеджей
                    </div>
                    <div className="content-header-info__body-descriptions descriptions-content-info">
                        <div className="descriptions-content-info__one info-one-content-descriptions">
                            <div className="info-one-content-descriptions__title">3</div>
                            <div className="info-one-content-descriptions__text text-content-descriptions">
                                <div className="text-content-descriptions__name text-content-descriptions-text">коттеджа</div>
                                <div className="text-content-descriptions__length text-content-descriptions-text">368 м<sup><small>2</small></sup></div>
                                <div className="text-content-descriptions__size text-content-descriptions-text">на 10 сотках</div>
                            </div>
                        </div>
                        <div className="descriptions-content-info__two info-two-content-descriptions">
                            <div className="info-one-content-descriptions__title">33</div>
                            <div className="info-one-content-descriptions__text text-content-descriptions">
                                <div className="text-content-descriptions__name text-content-descriptions-text">коттеджа</div>
                                <div className="text-content-descriptions__length text-content-descriptions-text">379 м<sup><small>2</small></sup></div>
                                <div className="text-content-descriptions__size text-content-descriptions-text">на 5 сотках</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-body-content__text content-header-text">
                    <div className="content-header-text__descriptions"><span>Строительные работы</span> начались в сентября 2021 года. </div>
                    <div className="content-header-text__descriptions"><span>Срок сдачи</span> коттеджей - I квартал 2022 года.</div>
                    <div className="content-header-text__descriptions"><span>Срок сдачи</span> всего коттеджного городка - II квартал 2022 года</div>
                </div>
            </div>
        </header>
    )
}

export default Header