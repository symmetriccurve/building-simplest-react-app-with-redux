import React from 'react'

const Mark = (props) =>{
  return(
      <div>

        <h1>Mark</h1>

        <div>
        <button onClick={()=>{props.addMoney()}}> + </button>
        <h1> $ {props.money} </h1>
        <button onClick={()=>{props.removeMoney()}}> - </button>
        </div>

      </div>
  )
}

module.exports = Mark
