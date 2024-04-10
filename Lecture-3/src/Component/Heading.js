import React from "react";

import Custom from "../Style/Custom.module.css";
import '../Style/Style.css'

function Heading (){
    return <h1 className="text-center">i ma Heading Component</h1>
}

const List = () => {
    return (
      <ul className={Custom.List}>
        <h1>This is cam from heading File</h1>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
    );
  }


export default Heading;
export {List}