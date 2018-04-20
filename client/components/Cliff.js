import React from 'react'

const Cliff = (props) =>{
  return(
      <div>

        <h1>Cliff </h1>

        <div>
            <button> + </button>
            <h1> $ {props.money} </h1>
            <button> - </button>
        </div>

      </div>
  )
}

module.exports = Cliff
