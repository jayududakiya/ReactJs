import React from 'react'
import Users from '../Task/Users'
import UserData from '../Task/User_data'

function DynamicUser() {
    console.log(UserData);
    
  return (
    <div  className="flex flex-wrap items-center justify-center py-4 w-[92%] mx-auto">
        {UserData.map((Profile,ind,arr)=>{
            return(
                <Users key={ind} Name={Profile.name} Img={Profile.image} Title={Profile.name + "Img"} Course={Profile.company.catchPhrase} />
            )
        })}
    </div>
  )
}

export default DynamicUser
