import React, { useEffect, useState } from "react";
import Card from "./Components/Card";
import ThemeButton from "./Components/ThemeButton";
import {ThemeContextProvider} from "./Context/ThemeContext";

function App() {
  
  const [themeMode,setThemeMode] = useState('light')
  
  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(()=>{
    const rootElement = document.querySelector('html')
    rootElement.classList.remove("dark","light",'bg-black')
    rootElement.classList.contains('bg-black') && themeMode === 'dark' ? rootElement.classList.add(themeMode,'bg-black') :  rootElement.classList.add(themeMode) 
    console.log(rootElement.classList.contains('bg-black'));
  },[themeMode])

  return (
    <div className="container mx-auto">
      <ThemeContextProvider value={{themeMode,lightTheme,darkTheme}}>
        <h1 className="text-center">Context Api</h1>
        <ThemeButton/>
        <Card />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
