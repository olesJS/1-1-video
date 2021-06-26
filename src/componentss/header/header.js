import React from 'react';
import './header.css';

class Header extends React.Component{
    render(){
        return(
            <div id='header'>
                <img id='headImg' src='https://1plus1.video/competition/apps/images/tild6635-6565-4437-a635-303136643038__1_1video_white_1.png' />
                <button className='headButt' onClick={this.props.main} ><p className='headTxt'>Головна</p></button>
                <button className='headButt' onClick={this.props.actors}><p className='headTxt'>Актори</p></button>
                <button className='headButt' onClick={this.props.video}><p className='headTxt'>Відео</p></button>
            </div>
        );
    };
};

export default Header;