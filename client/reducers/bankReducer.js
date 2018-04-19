const defaultState = {
    moneyInBank: 0;
    allCustomers : [
  	  { customerName: 'Cliff',money: 0 },
      { customerName: 'Mark',money: 0 },
      { customerName: 'Dave',money: 0 }
  ]
}

function bankReducer(previousState=defaultState,action){
  return defaultState
}

module.exports = bankReducer
