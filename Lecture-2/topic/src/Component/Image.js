import React from 'react';
import '../Style/Style.css'

import Images from '../Images/wallpaperflare.com_wallpaper (2).jpg'

function Image (){
    return <>
    <img style={{width:"100%",hight:"100%"}} src={Images} alt="image" title="Inline Style add"/>
    <img  className='hero-img' src={Images} alt="image" title="Style add from Css file"/>
    </>
}


export default Image;