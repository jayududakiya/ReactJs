import React from 'react'

const FoodImg = "https://source.unsplash.com/user/foodess";
const CarImg = "https://source.unsplash.com/user/karlacar";
const NatureImg = "https://source.unsplash.com/user/natureuninterrupted1";
const Gp3dImg = "https://source.unsplash.com/user/gcp3d";

function ImageCard() {
  return (
    <div className='m-auto my-3 flex flex-wrap items-center justify-between'>
        <div className='w-[18rem] h-[28rem] rounded-md overflow-hidden mx-1'>
            <img src={FoodImg} className='block w-full h-full' alt={FoodImg} /> 
        </div>
        <div className='w-[18rem] h-[28rem] rounded-md overflow-hidden mx-1'>
            <img src={CarImg} className='block w-full h-full' alt={CarImg} /> 
        </div>
        <div className='w-[18rem] h-[28rem] rounded-md overflow-hidden mx-1'>
            <img src={NatureImg} className='block w-full h-full' alt={NatureImg} /> 
        </div>
        <div className='w-[18rem] h-[28rem] rounded-md overflow-hidden mx-1'>
            <img src={Gp3dImg} className='block w-full h-full' alt={Gp3dImg} /> 
        </div>
    </div>
  )
}

export default ImageCard
