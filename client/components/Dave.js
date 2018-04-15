import React from 'react'
const  Dave = ( {money, addMoney, removeMoney} )=>{
  return(
    <div>
        <h1>Dave</h1>
        <div>
            <button onClick={ ()=>addMoney('Dave') }>+</button>
            <h1> $ { money } </h1>
            <button onClick={ ()=>removeMoney('Dave') }>-</button>
        </div>
    </div>
  )
}
module.exports = Dave
