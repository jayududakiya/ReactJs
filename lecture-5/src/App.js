import Header from "./Components/Header"
import ImageCard from "./Components/ImageCard"
import MainContainer from "./Components/MainContainer"
import CompA from './Nested-Component/CompA'

function App() {

  return(
    <div className="App">
      <MainContainer>
        <CompA/>
        <h1>Hello world</h1>
        <h1>Hello Hii</h1>
      </MainContainer>
    </div>
  )
}

export default App;
