import React from 'react'
const  Dave = ( {money} )=>{
  return(
    <div>
        <h1>Dave</h1>
        <div>
            <button>+</button>
            <h1> $ { money } </h1>
            <button> - </button>
        </div>
    </div>
  )
}
module.exports = Dave