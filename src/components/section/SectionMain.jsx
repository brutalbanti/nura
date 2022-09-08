import React from 'react'
import './main.css'
import groupImage from '../../img/main/01.png'
import afterImage from '../../img/main/02.svg'

const SectionMain = () => {
  return (
    <section className='page__main' id='main'>
      <div className="main__about-title">О проекте</div>
      <div className="main__block-after"><img src={afterImage} alt="" /></div>
      <main className="main__container">
        <div className="main__body body-content">
          
          <div className="body-content__text text-content">
          <div className="main__title">О проекте</div>
        <div className="main__sub-title">Элитный закрытый коттеджный городок в г.Нур-Султан состоящий из: </div>
            <div className="text-content__item item-content">
              <div className="item-content__text-title">36 коттеджей</div>
              <div className="item-content text__main">
                - 368 м2 на 10 сотках <br />
                - 179 м2 на 5 сотках
              </div>
            </div>
            <div className="text-content-item item-content">
              <div className="item-content__text-title">
                О компании
              </div>
              <div className="item-content text__main">
                “MM Group” Группа Строительных Компании – современная и динамично развивающаяся группа компаний, оказывающая широкий спектр услуг в строительном бизнесе от проектирования до сдачи объектов под ключ. Свою деятельность в строительном бизнесе начала осуществлять с 2013 года и прочно зарекомендовала себя надежной Казахстанской строительной компанией не только на территории Республики Казахстан, но и за рубежом. Учредителем и генеральным директором группы строительных компаний «MM Group» является - Мольдир Суюншали.
              </div>
            </div>
            <div className="text-content-item item-content">
              <div className="item-content__text-title">
                Миссия
              </div>
              <div className="item-content text__main">
                Приоритетом группы строительных компаний «MM Group» является профессиональный подход с применением инновационных решении в строительстве воздвигаемых объектов, опытный коллектив, качественные материалы и своевременность сдачи объектов с доступной возможностью приобретения не только жилья, но и других объектов недвижимости.
              </div>
            </div>
          </div>
          <div className="body-content__image image-content">
            <div className="image-content__img">
              <img src={groupImage} alt="" />
            </div>
            <div className="image-content__text">
              <div className="item-content__text-title">
                Цель
              </div>
              <div className="item-content text__main">
                Укрепление статуса компании, которая способна обеспечить потребителя доступной и качественной недвижимостью в срок. Развитие, надежность и качество!
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default SectionMain