import React from 'react'
const  Cliff = ( {money, addMoney, removeMoney} )=>{
  return(
    <div>
        <h1>Cliff</h1>
        <div>
            <button onClick={ ()=>addMoney('Cliff') }>+</button>
            <h1> $ { money } </h1>
            <button onClick={ ()=>removeMoney('Cliff') }>-</button>
        </div>
    </div>
  )
}

module.exports = Cliff
