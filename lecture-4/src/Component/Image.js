import React from 'react'
import '../Style/Style.css'

// From Import Method
import Image1 from '../Images/wallpaperflare.com_wallpaper (2).jpg'
let imageName = require('../Images/peakpx-1.jpg')
// variable 
const ImgURL = "https://source.unsplash.com/random" 

function Image() {
  return (
    <div>
        <img src={Image1} alt="Images-1"/>  
        <img src={ImgURL} className="hero-img" alt="Images-1"/>
        <h1 className='text-center my-4 text-4xl font-mono font-bold text-orange-600'>This Image set With Url</h1>   
        <img src={ImgURL} alt="Images-1"/>
        <h1>New Image</h1>
        <img src={imageName} alt="Images-1"/>
    </div>
  )
}

export default Image
