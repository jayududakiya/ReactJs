import React from "react";
import Card from "./Card";

const User1 = "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" 
const User2 = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MXwwfHx8MA%3D%3D" 
const User3 = "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8MXwwfHx8MA%3D%3D" 
const User4 = "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8MXwwfHx8MA%3D%3D" 
const User5 = "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8MXwwfHx8MA%3D%3D" 
const User6 = "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfDF8MHx8fDA%3D" 

function StaticUser() {
  return (
    <div className="flex flex-wrap items-center justify-center py-4 w-[92%] mx-auto">
      <Card imgLink={User1} name="May" about="FullStack Developer" Dis="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?" />
      <Card imgLink={User2} name="Rocky" about="BackEnd Developer" Dis="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?" />
      <Card imgLink={User3} name="Roy" about="FrontEnd Developer" Dis="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?" />

      <Card imgLink={User4} name="May" about="FullStack Developer" Dis="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?" />
      <Card imgLink={User5} name="Rocky" about="BackEnd Developer" Dis="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?" />
      <Card imgLink={User6} name="Roy" about="FrontEnd Developer" Dis="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?" />
    </div>
  );
}

export default StaticUser;
