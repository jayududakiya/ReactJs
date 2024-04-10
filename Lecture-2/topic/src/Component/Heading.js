import React from "react";
import Custom from "../Style/Custom.module.css";

function Heading (){
    return <h1 className="text-center">i ma Heading Component</h1>
}

function HOrderList() {
    return (
      <ol className={Custom.olList}>
        <h1>This is cam from heading File</h1>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ol>
    );
  }


export default Heading;
export {HOrderList}