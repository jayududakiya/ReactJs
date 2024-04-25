import React,{useState,useEffect} from 'react'
import USER from '../MOCK_DATA.json'
import Card from '../Page Components/Card';

function Home() {
  
  const [Parsons,setParsons] = useState([])

  useEffect(()=>{
    setParsons(USER)
  },[])
  console.log(Parsons);
  
  //  useEffect(() => {
  //   fetch(Parsons)
  //     .then((res) => {
  //       // console.log(res);
  //       return res.json();
  //     })
  //     .then((Data) => {
  //       console.log(Data);
  //       setParson(Data);
  //     })
  //     .catch((error) => {
  //       new Error("Api is not Working ");
  //     });
  // }, []);


  return (
    <div className="container mx-auto">
      <div className="Card-container my-8 container mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center content-center justify-center">
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
