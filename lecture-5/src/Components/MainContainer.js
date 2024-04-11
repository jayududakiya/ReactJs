import React from 'react'

function MainContainer(props) {
  let classN = `bg-red-500 text-center p-5 ${props.className}`;
  return (
    <div className={classN}>
      {props.children}
    </div>
  )
}

export default MainContainer
