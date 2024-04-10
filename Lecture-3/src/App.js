import React from 'react'

import Heading,{List} from './Component/Heading'
import { PTags , OrderList } from './Component/Pera'

function App() {
  return (
    <div className="App">
      <Heading/>
      <List/>
      <PTags/>
      <OrderList/>
    </div>
  );
}

export default App;
