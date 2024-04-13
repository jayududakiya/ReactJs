import React, {useState } from "react";
import "./Style.css";
import data from "./TableData";

function Table() {
  
  const [TableData, setTableData] = useState(data);

  console.log(TableData);

return (
    <div className="w-[95%] overflow-x-auto mx-auto mt-10">
      <h1 className="text-center text-red-600 text-2xl underline my-3">Display Data Using " useState " Only white JSON File </h1>
      <table className="table-auto m-auto w-full border-collapse text-roboto">
        <caption className="caption-top mb-6 text-blue-900  font-bold text-3xl">
          User Information
        </caption>
        <thead className="text-sm sm:text-xl">
          <tr>
            <th className="border border-blue-900">ID</th>
            <th className="border border-blue-900">Name</th>
            <th className="border border-blue-900">Email</th>
            <th className="border border-blue-900">City</th>
            <th className="border border-blue-900 ">Phone</th>
          </tr>
        </thead>
        <tbody className="text-sm sm:text-xl overflow-hidden">
          {TableData.map((TableInfo,ind) => {
            return (
              <tr key={ind} className="hover:border-[0rem] transition-all">
                <td className="border border-blue-900">#{TableInfo.id}</td>
                <td className="border border-blue-900">{TableInfo.name}</td>
                <td className="border border-blue-900">
                  <a href={"mailto:"+TableInfo.email}>{TableInfo.email}</a>
                </td>
                <td className="border border-blue-900">
                  {TableInfo.address.city}
                </td>
                <td className="border border-blue-900">
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

export default Table;
