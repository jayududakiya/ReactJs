import React from 'react'
import './Users.css';

const Image = "https://xsgames.co/randomusers/assets/avatars/female/58.jpg"
const DisData ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"

function Users({Img={Image} , Title="Img" ,Name="Jack" , Course="UI-UX" , Dis=`${DisData}` }) {
  return (
    <div className='usersBox my-6 mx-4 w-[19rem] rounded-2xl overflow-hidden'>
        <div className='imgBox flex items-center content-center py-9'>
            <img src={Img} className='m-auto block rounded-full w-36' alt={Title}/>
        </div>
        <div className='cardBody bg-white pb-6'>
            <div className='textData py-4 px-3'>
                <h1 className='text-center font-semibold text-2xl mb-3'>
                    {Name}
                </h1>
                <h3 className='text-center mb-4 font-semibold text-blue-500'>
                    {Course}
                </h3>
                <p className='opacity-75 font-serif text-pretty text-center'>
                    {Dis}
                </p>
            </div>
                <div className='buttonBox'>
                    <button type='button' className='bg-blue-500 text-white font-semibold px-8 py-2 rounded-lg mx-auto block'>
                        View More
                    </button>
                </div>
        </div>
    </div>
  )
}

export default Users
