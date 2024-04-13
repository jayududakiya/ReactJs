import { useState, useEffect } from "react";

function Task() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return( () => {
    console.log("--")
     clearTimeout(timer)
  }
)
  },[]);

  return <h1 className="text-center">I've rendered {count} times!</h1>;
}

export default Task;