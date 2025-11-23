import React from 'react'


const Child = React.memo(({user}) => {
    console.log("child component rendered");
  return (
    <div>
      <h3>User : {user.name}</h3>
    </div>
  )
})

export default Child
