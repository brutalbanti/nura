import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container">
        <nav className="footer__menu menu-footer">
          <ul className="menu-footer__list">
            <li className="menu-footer__item">
              <a href="#benefits" className="menu-footer__link">Преимущества</a>
            </li>
            <li className="menu-footer__item">
              <a href="#recommend" className="menu-footer__link">Почему мы?</a>
            </li>
            <li className="menu-footer__item">
              <a href="#technology" className="menu-footer__link">Технологии</a>
            </li>
            <li className="menu-footer__item">
              <a href="#paying" className="menu-footer__link">Способы оплаты</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer