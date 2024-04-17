import React, { useReducer,useEffect } from "react";
import Data from "../json Data/CAR_MOCK_DATA";

let initialArg = null;

const reducer = (state, action) => {
  state = Data;
  let year = [];

  if (action.type === "1965 To 1999") {
    state.filter((car) => {
      if (car.year > 1967 && car.year < 2000) {
        year.push(car);
      }
      return year
    });
    console.log("year 1", year);
    return year.map((car, ind) => {
      return (
        <tr key={ind}>
          <td>{car.id}</td>
          <td>{car.company}</td>
          <td>{car.name}</td>
          <td>{car.number}</td>
          <td>{car.year}</td>
        </tr>
      );
    });
  }

  if (action.type === "2000 To 2010") {
    state.filter((car) => {
      if (car.year >= 2000 && car.year < 2010) {
        year.push(car);
      }
      return year
    });
    console.log("year 2", year);
    return year.map((car, ind) => {
      return (
        <tr key={ind}>
          <td>{car.id}</td>
          <td>{car.company}</td>
          <td>{car.name}</td>
          <td>{car.number}</td>
          <td>{car.year}</td>
        </tr>
      );
    });
  }

  if (action.type === "2011 to 2020") {
    state.filter((car) => {
      if (car.year >= 2011 && car.year < 2020) {
        year.push(car);
      }
      return year
    });
    console.log("year 3", year);
    return year.map((car, ind) => {
      return (
        <tr key={ind}>
          <td>{car.id}</td>
          <td>{car.company}</td>
          <td>{car.name}</td>
          <td>{car.number}</td>
          <td>{car.year}</td>
        </tr>
      );
    });
  }
  if (action.type === "All Cars") {
    return state.map((car, ind) => {
      return (
        <tr key={ind}>
          <td>{car.id}</td>
          <td>{car.company}</td>
          <td>{car.name}</td>
          <td>{car.number}</td>
          <td>{car.year}</td>
        </tr>
      );
    });
  }
  return state;
};

function Table() {
  const [state, dispatch] = useReducer(reducer, initialArg);
  useEffect(()=>{
    dispatch({ type: "All Cars" });
  },[])

  return (
    <div className="w-[90%] m-auto pt-5">
      <div className="flex flex-wrap items-center justify-around w-full">
      <button
          className="text-slate-100 bg-slate-400 font-sans py-1 px-2 rounded-lg my-2 "
          onClick={() => {
            dispatch({ type: "All Cars" });
          }}
        >
          All Cars
        </button>

        <button
          className="text-slate-100 bg-slate-400 font-sans py-1 px-2 rounded-lg my-2 "
          onClick={() => {
            dispatch({ type: "1965 To 1999" });
          }}
        >
          1965 To 1999
        </button>

        <button
          className="text-slate-100 bg-slate-400 font-sans py-1 px-2  rounded-lg my-2 "
          onClick={() => {
            dispatch({ type: "2000 To 2010" });
          }}
        >
          2000 To 2010
        </button>

        <button
          className="text-slate-100 bg-slate-400 font-sans py-1 px-2 rounded-lg my-2 "
          onClick={() => {
            dispatch({ type: "2011 to 2020" });
          }}
        >
          2011 to 2020
        </button>

      </div>
      <table className="table-auto sm:overflow-auto border-separate border-spacing-2 w-full text-left ">
        <caption className="caption-top text-center text-2xl font-sans font-bold my-4 bg-violet-400 text-white p-2 mx-2"> Show Cars Data By Yare </caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>Name</th>
            <th>Number</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>{state}</tbody>
      </table>
    </div>
  );
}

export default Table;
