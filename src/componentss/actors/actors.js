import React from 'react';
import './actors.css';
import yuraimg from './images/yura.jpg';
import yarinkaimg from './images/yarinka.jpg';
import kumimg from './images/viktor.jpg';
import viraimg from './images/vira.jpg';
import sanyaimg from './images/sanya.jpg';
import didimg from './images/did.jpg';
import wikipediaLogo from './wikipedia.png';
import instaLogo from './instagram.png';

class Actors extends React.Component{
    render(){
        return(
            <div id='actorsContainer'>
                <div id='actorsBlock'>
                    <h1 id='actorsHeader'>Актори серіалу:</h1>
                    <div id='actorsList'>
                        {/*Юрій Ткач*/}
                        <div id='yuraBorder'>
                            <div className='actorName'>
                                <img className='actorImg' src={yuraimg} />
                                <div className='actorTxt'>
                                    <p className='actorTexts'><strong>Справжнє ім'я</strong>: Юрій Костянтинович Ткач</p>
                                    <p className='actorTexts'><strong>Роль у серіалі</strong>: Юрчик</p>
                                </div>
                                <div className='actorButtons'>
                                    <a title='Instagram' target='_blank' href='https://www.instagram.com/yuriy_tkach/'><img className='actorsLogos' src={instaLogo} /></a>
                                    <a title='Wikipedia' target='_blank' href='https://uk.wikipedia.org/wiki/%D0%A2%D0%BA%D0%B0%D1%87_%D0%AE%D1%80%D1%96%D0%B9_%D0%9A%D0%BE%D1%81%D1%82%D1%8F%D0%BD%D1%82%D0%B8%D0%BD%D0%BE%D0%B2%D0%B8%D1%87'><img className='actorsLogos' src={wikipediaLogo} /></a>
                                </div>
                            </div>
                        </div>
                        {/*Ірина Сопонару */}
                        <div id='yarinkaBorder'>
                            <div className='actorName'>
                                <img className='actorImg' src={yarinkaimg} />
                                <div className='actorTxt'>
                                    <p className='actorTexts'><strong>Справжнє ім'я</strong>: Ірина Георгіївна Сопонару</p>
                                    <p className='actorTexts'><strong>Роль у серіалі</strong>: Яринка</p>
                                </div>
                                <div className='actorButtons'>
                                    <a title='Instagram' target='_blank' href='https://www.instagram.com/irinasoponaru/?hl=uk'><img className='actorsLogos' src={instaLogo} /></a>
                                    <a title='Wikipedia' target='_blank' href='https://uk.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BF%D0%BE%D0%BD%D0%B0%D1%80%D1%83_%D0%86%D1%80%D0%B8%D0%BD%D0%B0_%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D1%96%D1%97%D0%B2%D0%BD%D0%B0'><img className='actorsLogos' src={wikipediaLogo} /></a>
                                </div>
                            </div>
                        </div>
                        {/*Віктор Гевко*/}
                        <div id='kumBorder'>
                            <div className='actorName'>
                                <img className='actorImg' src={kumimg} />
                                <div className='actorTxt'>
                                    <p className='actorTexts'><strong>Справжнє ім'я</strong>: Віктор Леонідович Гевко</p>
                                    <p className='actorTexts'><strong>Роль у серіалі</strong>: Кум</p>
                                </div>
                                <div className='actorButtons'>
                                    <a title='Instagram' target='_blank' href='https://www.instagram.com/gevko_v/?hl=uk'><img className='actorsLogos' src={instaLogo} /></a>
                                    <a title='Wikipedia' target='_blank' href='https://uk.wikipedia.org/wiki/%D0%93%D0%B5%D0%B2%D0%BA%D0%BE_%D0%92%D1%96%D0%BA%D1%82%D0%BE%D1%80_%D0%9B%D0%B5%D0%BE%D0%BD%D1%96%D0%B4%D0%BE%D0%B2%D0%B8%D1%87'><img className='actorsLogos' src={wikipediaLogo} /></a>
                                </div>
                            </div>
                        </div>
                        {/*Віра*/}
                        <div id='viraBorder'>
                            <div className='actorName'>
                                <img className='actorImg' src={viraimg} />
                                <div className='actorTxt'>
                                    <p className='actorTexts'><strong>Справжнє ім'я</strong>: Ганна Валеріївна Саліванчук</p>
                                    <p className='actorTexts'><strong>Роль у серіалі</strong>: Продавчиня Вєра</p>
                                </div>
                                <div className='actorButtons'>
                                    <a title='Instagram' target='_blank' href='https://www.instagram.com/salivanchuk.anna_life/'><img className='actorsLogos' src={instaLogo} /></a>
                                    <a title='Wikipedia' target='_blank' href='https://uk.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BB%D1%96%D0%B2%D0%B0%D0%BD%D1%87%D1%83%D0%BA_%D0%93%D0%B0%D0%BD%D0%BD%D0%B0_%D0%92%D0%B0%D0%BB%D0%B5%D1%80%D1%96%D1%97%D0%B2%D0%BD%D0%B0'><img className='actorsLogos' src={wikipediaLogo} /></a>
                                </div>
                            </div>
                        </div>
                        {/*Саша*/}
                        <div id='sanyaBorder'>
                            <div className='actorName'>
                                <img className='actorImg' src={sanyaimg} />
                                <div className='actorTxt'>
                                    <p className='actorTexts'><strong>Справжнє ім'я</strong>: Олександ Теренчук</p>
                                    <p className='actorTexts'><strong>Роль у серіалі</strong>: Поліцейський Сашко</p>
                                </div>
                                <div className='actorButtons'>
                                    <a title='Instagram' target='_blank' href='https://www.instagram.com/a_terenchuk/?hl=uk'><img className='actorsLogos' src={instaLogo} /></a>
                                </div>
                            </div>
                        </div>
                        {/*Дід Петро*/}
                        <div id='didBorder'>
                            <div className='actorName'>
                                <img className='actorImg' src={didimg} />
                                <div className='actorTxt'>
                                    <p className='actorTexts'><strong>Справжнє ім'я</strong>: Олександ Данильченко</p>
                                    <p className='actorTexts'><strong>Роль у серіалі</strong>: Дід Петро</p>
                                </div>
                                <div className='actorButtons'>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}

export default Actors;