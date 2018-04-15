import React from 'react'
const  Cliff = ( {money} )=>{
  return(
    <div>
        <h1>Cliff</h1>
        <div>
            <button> + </button>
            <h1> $ { money } </h1>
            <button> - </button>
        </div>
    </div>
  )
}
module.exports = Cliff
