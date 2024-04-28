import React,{useState,useEffect} from 'react'
import USER from '../MOCK_DATA.json';

import Par from '../MOCK_DATA.json';


import Card from '../Page Components/Card';

function Home() {
  
  const [Parsons,setParsons] = useState([])

  useEffect(()=>{
    setParsons(USER)
  },[])
  // console.log(Parsons);
  


  // const fetchInfo = () => {
  //   return fetch(Par)
  //     .then((res) => {
  //       res.json()
  //       console.log(res,"h");
  //     })
  // }
  const fetchInfo = () => {
    // return fetch("https://jsonplaceholder.typicode.com/users")
    return fetch("../MOCK_DATA.json")
      .then((res) => {
        // const data = res.json()
        return res.json()
      }).then((data)=>{
        console.log(
          data
        );
      })
  }
  


  useEffect(() => {
    fetchInfo();
  }, []);



  //  useEffect(() => {
  //   fetch(Par)
  //     .then((res) => {
  //       console.log(res,"data");
  //       return res.json();
  //     })
  //     .catch((error) => {
  //       new Error("Api is not Working ");
  //     });
  // }, []);


  return (
    <div className="container mx-auto py-8">
      <div className="Card-container container mx-auto grid gap-x-3 md:gap-x-1 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center content-center justify-center">
        {Parsons.map((Parson,ind)=>{
            return(
                <Card key={ind} img={Parson.img} name={Parson.first_name} age={Parson.age} />
            )
        })}
      </div>
    </div>
  );
}

export default Home
