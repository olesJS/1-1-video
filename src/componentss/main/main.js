import React from 'react';
import './main.css';

class Main extends React.Component{
    render(){
        return(
            <div id='mainContainer'>
                <div id='mainBlock'>
                    <div id='mainFirst'>
                        <div id='mainFirstTxt'>
                            <h1 id='mainHeader'>Одного разу під Полтавою</h1>
                            <p id='mainFirstP'>Юрчик романтик-ледащо, кум-аферист, красива Яринка, дід Петро і харизматична продавщиця Віра. Разом вони завжди знайдуть нові пригоди і візьмуть в них участь. Однак, чи вдасться їм знайти вихід із складних ситуацій? Чи зможуть такі різні герої знайти спільну мову? - Дізнавайтеся після перегляду проекту «Одного разу під Полтавою» і заряджайтесь позитивною енергією на весь день.</p>
                        </div>
                        <img id='mainFirstImg' src='http://wish-storage.1plus1.ua/source/1/OEZag-dJnXY4qKiuQKeUahwMrhWPHUhM.jpg' />
                    </div>
                    <hr className='mainHR' />
                        <center><img id='mainPoltavaImg' src='https://toloka.to/photos/180521090326398767_f0_0.png' /></center>
                    <hr className='mainHR' />
                    <div id='mainSecond'>
                        <h1 id='mainSecondHeader'>Інформація про проект</h1>
                        <div id='mainSecondInfo'>
                            <img id='mainSecondImg' src='https://images.1plus1.video/playlist-1/3467/370c2b73c5a49b7670bbcbdc1171051f.220x330.jpg' />
                            <div id='mainSecondInfoTxt'>
                                <div id='mainSecondDetails'>
                                    <details>
                                        <summary className='mainSecondSummary'>Іноді одні проекти стають настільки популярними, що на їх основі виникають і інші не менш неймовірні програми. Так сталося зі скетчкомом «Країна У», який переріс в ситком «Одного разу під Полтавою». А все тому, що глядачам полюбилися герої серіалу, кожен з яких має свою унікальну історію та харизму. Юрчик романтик-ледащо, кум-аферист, красива Яринка, дід Петро і харизматична продавщиця Віра. Разом вони завжди знайдуть нові пригоди і візьмуть в них участь. Однак, чи вдасться їм знайти вихід</summary>
                                        <p className='mainSecondSummary'>із складних ситуацій? Чи зможуть такі різні герої знайти спільну мову? - Дізнавайтеся після перегляду проекту «Одного разу під Полтавою» і заряджайтесь позитивною енергією на весь день. Дивіться гумористичний проект онлайн. Важливо! Перегляд шоу доступний лише на території України.</p>
                                        <p id='detailsP' className='mainSecondSummary'><strong>Рік</strong>: 2014</p>
                                        <p id='detailsP' className='mainSecondSummary'><strong>Країна</strong>: Україна</p>    
                                        <p id='detailsP' className='mainSecondSummary'><strong>Жанр</strong>: Ситком</p>
                                        <p id='detailsP' className='mainSecondSummary'><strong>Актори</strong>: Юрій Ткач, Ірина Сопонару, Віктор Гевко, Олександр Теренчук, Анна Саліванчук, Олександр Данильченко та інші.</p>
                                    </details>
                                </div>
                                <div id='mainSecondButtons'>
                                    <button id='mainFirstButton' className='mainSecondButton'>Гумор</button>
                                    <button id='mainSecondButton' className='mainSecondButton'>Проекти студії "Квартал 95"</button>
                                    <button id='mainThirdButton' className='mainSecondButton'>ТЕТ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;