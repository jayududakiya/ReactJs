
import Heading,{HOrderList} from './Component/Heading'
import Image from './Component/Image';
import { OrderList, Paras } from './Component/Pera';

import Greeting from './Task/Greeting'

// task 


function App() {
  return (
    <div className="App">
      <Heading/>
      <HOrderList/>
      <Image/>
      <Paras/>
      <OrderList/>
      <h1 className='text-center text-3xl font-semibold my-5 text-blue-500 '>
        This Greeting Task 
      </h1>
      <Greeting/>
    </div>
  );
}

export default App;
