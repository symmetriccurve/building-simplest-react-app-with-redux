import React from 'react'
const  Mark = ( {money, addMoney, removeMoney} )=>{
  return(
    <div>
        <h1>Mark</h1>
        <div>
            <button onClick={ ()=>addMoney('Mark') }>+</button>
            <h1> $ { money } </h1>
            <button onClick={ ()=>removeMoney('Mark') }>-</button>
        </div>
    </div>
  )
}
module.exports = Mark
