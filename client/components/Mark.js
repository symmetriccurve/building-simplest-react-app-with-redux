import React from 'react'

const Mark = (props) =>{
  return(
      <div>

        <h1>Mark</h1>

        <div>
            <button> + </button>
            <h1> $ {props.money} </h1>
            <button> - </button>
        </div>

      </div>
  )
}

module.exports = Mark
