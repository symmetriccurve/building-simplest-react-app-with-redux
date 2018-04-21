import React from 'react'

const Cliff = (props) =>{
  return(
      <div>

        <h1>Cliff </h1>

        <div>
            <button onClick={()=>{ props.addMoney() }}> + </button>

            <h1> $ {props.money} </h1>
          <button onClick={()=>{props.removeMoney()}}> - </button>
        </div>

      </div>
  )
}

module.exports = Cliff
