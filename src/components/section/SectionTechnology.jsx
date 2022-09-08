import React from 'react'
import './technology.css'
import imageOne from '../../img/technology/01.png'
import imageTwo from '../../img/technology/02.png'
import imageThree from '../../img/technology/03.png'
import imageFour from '../../img/technology/04.png'
import imageFive from '../../img/technology/05.png'
import imageSix from '../../img/technology/06.png'


const SectionTechnology = () => (
    <section className='page__technology' id='technology'>
        <div className="technology__container">
            <div className="technology__title-after">Технология</div>
            <div className="technology__title">Технология строения</div>
            <div className="technology__body technology-body-content">
                <div className="technology-body-content__items technology-items-content">
                    <div className="technology-items-content__item technology-item-content">
                        <div className="technology-item-content__image"><img src={imageOne} alt="" /></div>
                        <div className="technology-item-content__title">Конструкция стены</div>
                        <div className="technology-item-content__text">
                            Двойная кладка из жжённого красного кирпича - 38/40 см, утепление минеральной плитой - 10 см., и облицовка HPL и ФБЦ панелью
                        </div>
                    </div>
                    <div className="technology-items-content__item technology-item-content">
                        <div className="technology-item-content__image"><img src={imageTwo} alt="" /></div>
                        <div className="technology-item-content__title">Конструкция двери</div>
                        <div className="technology-item-content__text">
                            Технология IZO TERMO.
                            Двери не соприкасаются с наружными. Между ними расположен изолятор - щит из португальского пробкового дуба толщиной в 8 мм. IZO TERMO устраняет “мостик холода” и не дает теплу уходить из дома. С этой технологией вам не нужен тамбур и вторая дверь.
                        </div>
                    </div>
                    <div className="technology-items-content__item technology-item-content">
                        <div className="technology-item-content__image"><img src={imageThree} alt="" /></div>
                        <div className="technology-item-content__title">Конструкция Фасада</div>
                        <div className="technology-item-content__text">
                            HPL панель - это высококачественная строительная продукция для долговечной облицовки фасада.
                            Стойкость на погодные воздействия +180 с/ -180с с высоким эффектом защиты от атмосферных воздействий.
                            Данная защита обеспечивается за счет применения акрилополиуретановых смол с двойным отверждением.
                            Относится к экологичным материалам.
                        </div>
                    </div>
                </div>
                <div className="technology-body-content__items technology-items-content items-second">
                    <div className="technology-items-content__item technology-item-content">
                        <div className="technology-item-content__image"><img src={imageFour} alt="" /></div>
                        <div className="technology-item-content__title">Конструкция окна</div>
                        <div className="technology-item-content__text">
                            Высокая экологичность, безопасность, надёжность и долговечность, усиленная теплоизолирующая способность, которая обеспечивается пятикамерным строением профиля с тройным остеклением и шумоизоляцией (система Helios рассчитана на стеклопакеты толщиной 44 мм с воздушной прослойкой в 16 мм, проходя через которые низкочастотные шумы теряют свою интенсивность, что очень ценят жители) по технологии FUNKE                        </div>
                    </div>
                    <div className="technology-items-content__item technology-item-content">
                        <div className="technology-item-content__image"><img src={imageFive} alt="" /></div>
                        <div className="technology-item-content__title">Конструкция кровли</div>
                        <div className="technology-item-content__text">
                            Гибкая черепица ТЕХНОНИКОЛЬ SHINGLAS - это гарантия комфорта и безопасности вашего дома. Дома с кровлей из гибкой черепицы ТЕХНОНИКОЛЬ SHINGLAS очаровывают своей гармонией, изяществом. Коллекции отличаются разнообразием форм и расцветок.                        </div>
                    </div>
                    <div className="technology-items-content__item technology-item-content">
                        <div className="technology-item-content__image"><img src={imageSix} alt="" /></div>
                        <div className="technology-item-content__title">ФБЦ</div>
                        <div className="technology-item-content__text">
                            ФБЦ - это уникальный и высококачественный строительный материал для долговечной облицовки фасада.
                            Высокая морозостойкость, пожаробезопасность, хорошая звуко- и теплоизоляция, герметичность, повышенная прочность, погодоустойчивость.
                            Безопасна как для человека, так и для окружающей среды. Они не содержат асбест, состоят из экологически чистых натуральных компонентов: 82-85% цемента, древесное волокно, добавки для снижения веса, кремнийорганические соединения                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section >
)

export default SectionTechnology