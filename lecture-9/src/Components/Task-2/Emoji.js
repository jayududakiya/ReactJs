import React from 'react'
import '../Style/Style.css';

const Emoji = ({Emo1 , Emo2 , Emo3}) => {
  let Emoji = [Emo1,Emo2,Emo3];
  let [Emoji1,Emoji2,Emoji3] = Emoji;

  let text = "";

  (Emoji1 === Emoji2 && Emoji2 === Emoji3 && Emoji1 === Emoji3) ? text = "Emoji All are is same " : text = "Emoji is NOT same";
    

  return (
    <div className='md:container main-container m-auto w-full min-h-[inherit] flex flex-col flex-wrap items-center justify-center'>
        <div className='emoji-wrapper flex flex-wrap items-center justify-center'>
          <div className='emoji-box p-0 m-3 overflow-hidden'>{Emoji1}</div>
          <div className='emoji-box p-0 m-3 overflow-hidden'>{Emoji2}</div>
          <div className='emoji-box p-0 m-3 overflow-hidden'>{Emoji3}</div>
        </div>
        <div className='result-box w-full p-4'>
          <p className='text-2xl font-semibold text-red-500 text-center capitalize'>{text}</p>
        </div>
    </div>
  )
}

export default Emoji
