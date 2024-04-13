import React, { useState, useEffect } from "react";
import "./Style.css";
// import DataInfo from './TableData'

export default function TableEffect() {
  const [TableData, setTableData] = useState([]);

  // set Data from local File
  // useEffect(()=>{
  //   setTableData(DataInfo)
  //  },[]);

  const URL = "https://jsonplaceholder.typicode.com/users";

  // set Data from API link
  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((Data) => {
        setTableData(Data);
      })
      .catch((error) => {
        new Error("Api is not Working ");
      });
  }, []);

  console.log(TableData);

  return (
    <div className="w-[95%] overflow-x-auto mx-auto my-10">
      <h1 className="text-center text-orange-400 text-2xl underline my-3">
        Display Data Using " useState & useEffect " white API link
      </h1>
      <table className="table-auto m-auto w-full border-collapse text-roboto">
        <caption className="caption-top mb-6 text-blue-900  font-bold text-3xl">
          User Information
        </caption>
        <thead className="text-sm sm:text-xl">
          <tr>
            <th className="border border-orange-500">ID</th>
            <th className="border border-orange-500">Name</th>
            <th className="border border-orange-500">Email</th>
            <th className="border border-orange-500">City</th>
            <th className="border border-orange-500 ">Phone</th>
          </tr>
        </thead>
        <tbody className="text-sm sm:text-xl overflow-hidden">
          {TableData.map((TableInfo, ind) => {
            return (
              <tr key={ind} className=" transition-all">
                <td className="border border-orange-500">#{TableInfo.id}</td>
                <td className="border border-orange-500">{TableInfo.name}</td>
                <td className="border border-orange-500">
                  <a href={"mailto:"+TableInfo.email}>{TableInfo.email}</a>
                </td>
                <td className="border border-orange-500">
                  {TableInfo.address.city}
                </td>
                <td className="border border-orange-500">
                  <a href={"tel:"+TableInfo.phone}>{TableInfo.phone}</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
