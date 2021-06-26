import React from 'react';
import './footer.css';
import youtube from'./youtube.png';

class Footer extends React.Component{
    render(){
        return(
            <div id='footer'>
                <center><div id='footLogos'>
                    <a target='_blank' title='Instagram' href='https://www.instagram.com/odnogorazypidpoltavou/'><img className='footImg' alt='instaLogo' height='40px' width='40px' src='https://www.edigitalagency.com.au/wp-content/uploads/new-instagram-logo-white-border-icon-png-large.png' /></a>
                    <a target='_blank' title='YouTube' href='https://www.youtube.com/user/ChannelTET1'><img className='footImg' alt='YouTubeLogo' width='40px' height='40px' src={youtube} /></a>
                    <a target='_blank' title='Facebook' href='https://www.facebook.com/groups/576265763009384'><img className='footImg' alt='FacebookLogo' width='40px' height='40px' src='https://www.nicepng.com/png/full/42-428261_logo-facebook-vector-black.png' /></a>
                </div></center>  
            </div>
        )
    }
}

export default Footer;