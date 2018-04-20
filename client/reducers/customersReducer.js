const defaultState = {
    allCustomers : [
  	  { customerName: 'Cliff',money: 1 },
      { customerName: 'Mark',money: 2 },
      { customerName: 'Dave',money: 3 }
  ]
}

function bankReducer(previousState=defaultState,action){
  return defaultState
}

module.exports = bankReducer
