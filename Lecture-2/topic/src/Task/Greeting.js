import React from 'react';

import Bg_Morning from '../Images/peakpx-1.jpg';
import Bg_Night from '../Images/peakpx-3.jpg';
import Bg_AfterNoon from '../Images/peakpx-4.jpg';

const TimeDate = new Date(2024,12,21,12);

let Background = '';
let Time  = TimeDate.getHours();

let GreetingsText = "";

if(Time < 12){
    GreetingsText = "Good Morning"
    Background = Bg_Morning;
}
else if(Time >= 12 && Time < 19){
    GreetingsText = "Good AfterNoon"
    Background = Bg_AfterNoon;

}else{
    GreetingsText = "Good Night"
    Background = Bg_Night;
}

function Greeting () {
    return <div className="min-h-[100vh] flex flex-col items-center content-center relative">
            <img src={Background} className='w-full h-full' alt='bg-img'/>
            <h2  className="text-3xl font-bold text-gray-50 m-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                Hello Sir , {GreetingsText}
            </h2>
        </div>
}

export default Greeting;