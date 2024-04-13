import { useState } from "react";
import Emoji from "./Components/Emoji";
import  {emoji1,emoji2,emoji3} from './RandomEmoji/RandomEmoji'

function App() {
  const [show,setShow]=useState(true);
  return (
    <div className="App">
      {(show)?<Emoji Emo1={emoji1} Emo2={emoji2} Emo3={emoji3}/>:<Emoji Emo1={emoji1} Emo2={emoji1} Emo3={emoji1}/>}
      <button onClick={()=>setShow(!show)} className="mx-auto block bg-black text-white px-6 py-2 rounded-3xl text-2xl">Set All Emoji Same</button>
    </div>
  );
}

export default App;
