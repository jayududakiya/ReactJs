import React, {useState } from 'react'

function ShowID({generateID}) {
    // const [showID,setShowID]=useState(null)
    
    console.log('this Show Id component');
    
    // React.useEffect(()=>{
    //     setShowID(generateID(20))
    // },[generateID])

    const showID = React.useMemo(()=>generateID(20),[generateID])
  return (
    <div>
      <p>{showID}</p>
    </div>
  )
}

export default React.memo(ShowID)
