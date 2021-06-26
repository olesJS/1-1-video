import React from 'react';
import './video.css';
import first from './pictures/first.jpg';
import second from './pictures/second.jpg';
import third from './pictures/third.jpg';
import fourth from './pictures/fourth.jpg';
import fifth from './pictures/fifth.jpg';
import sixth from './pictures/sixth.jpg';
import seventh from './pictures/seventh.jpg';
import eighth from './pictures/eighth.jpg';
import ninth from './pictures/ninth.jpg';
import tenth from './pictures/tenth.jpg';
import eleventh from './pictures/eleventh.jpg';
import twelfth from './pictures/twelfth.jpg';

class Video extends React.Component{
    render(){
        return(
            <div id='videoContainer'>
                <div id='videoBlock'>
                    <h1 id='videoHeader'>Всі сезони:</h1>
                    <div id='seasonsContainer'>
                        <a href='https://www.youtube.com/playlist?list=PLprXcH5dhunODYeLxVEsFEl0kkFwQMzgs' target='_blank' title='Перейти на YouTube'><div className='season'>
                            <img className='seasonImg' src={first} />
                            <p className='seasonTxt'>1 сезон</p>
                        </div></a>

                        <a href='https://www.youtube.com/playlist?list=PLprXcH5dhunMKmizYUmXEKn67z_kaya5Q' target='_blank' title='Перейти на YouTube'><div className='season'>
                            <img className='seasonImg' src={second} />
                            <p className='seasonTxt'>2 сезон</p>
                        </div></a>

                        <a href='https://www.youtube.com/playlist?list=PLprXcH5dhunOXUZogI1ohQc4fs7-ePvut' target='_blank' title='Перейти на YouTube'><div className='season'>
                            <img className='seasonImg' src={third} />
                            <p className='seasonTxt'>3 сезон</p>
                        </div></a>
                        
                        <a href='https://www.youtube.com/playlist?list=PLprXcH5dhunNOvBrziCD5qPYOIMuS-mOT' target='_blank' title='Перейти на YouTube'><div className='season'>
                            <img className='seasonImg' src={fourth} />
                            <p className='seasonTxt'>4 сезон</p>
                        </div></a>
                        
                        <a href='https://www.youtube.com/playlist?list=PLprXcH5dhunNUpWMperN8jLP8wdD6RT8M' target='_blank' title='Перейти на YouTube'><div className='season'>
                            <img className='seasonImg' src={fifth} />
                            <p className='seasonTxt'>5 сезон</p>
                        </div></a>
                        
                        <a href='https://www.youtube.com/playlist?list=PLprXcH5dhunNdJrxOrJlOrJz_xB092iIx' target='_blank' title='Перейти на YouTube'><div className='season'>
                            <img className='seasonImg' src={sixth} />
                            <p className='seasonTxt'>6 сезон</p>
                        </div></a>
                        
                        <a href='https://www.youtube.com/playlist?list=PLprXcH5dhunPIZskslVS_vTkFkQ6_v_f7' target='_blank' title='Перейти на YouTube'><div className='season'>
                            <img className='seasonImg' src={seventh} />
                            <p className='seasonTxt'>7 сезон</p>
                        </div></a>
                        
                        <a href='https://www.youtube.com/playlist?list=PLprXcH5dhunOgOU8ct_KAbxf-JuQ0XCMR' target='_blank' title='Перейти на YouTube'><div className='season'>
                            <img className='seasonImg' src={eighth} />
                            <p className='seasonTxt'>8 сезон</p>
                        </div></a>
                        
                        <a href='https://www.youtube.com/playlist?list=PLprXcH5dhunMpAQCNG-ASkusOLYPOdKpo' target='_blank' title='Перейти на YouTube'><div className='season'>
                            <img className='seasonImg' src={ninth} />
                            <p className='seasonTxt'>9 сезон</p>
                        </div></a>
                        
                        <a href='https://www.youtube.com/playlist?list=PLprXcH5dhunPcCqRe-lY7hnj67MI7xd8-' target='_blank' title='Перейти на YouTube'><div className='season'>
                            <img className='seasonImg' src={tenth} />
                            <p className='seasonTxt'>10 сезон</p>
                        </div></a>
                        
                        <a href='https://www.youtube.com/playlist?list=PLprXcH5dhunPjKK1hKkzEAn6SEhRdBEnl' target='_blank' title='Перейти на YouTube'><div className='season'>
                            <img className='seasonImg' src={eleventh} />
                            <p className='seasonTxt'>11 сезон</p>
                        </div></a>
                        
                        <a href='https://www.youtube.com/playlist?list=PLprXcH5dhunMzR-LLvInm7eRW5VMr-1dv' target='_blank' title='Перейти на YouTube'><div className='season'>
                            <img className='seasonImg' src={twelfth} />
                            <p className='seasonTxt'>12 сезон</p>
                        </div></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Video;