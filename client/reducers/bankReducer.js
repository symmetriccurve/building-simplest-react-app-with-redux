const defaultState = {
    moneyInBank: 0,
    allCustomers : [
        { customerName: 'Cliff',money: 0 },
        { customerName: 'Mark',money: 0 },
        { customerName: 'Dave',money: 0 },
    ]
}

function bankReducer(previousState = defaultState,action){
    let newState = JSON.parse(JSON.stringify(previousState))
    switch ( action.type ) {
      case 'addMoney': {

          let newState = JSON.parse(JSON.stringify(previousState))

          if( action.customerName == 'Cliff') {
              newState.allCustomers[0].money = previousState.allCustomers[0].money + 1
          }else if( action.customerName == 'Mark' ){
            newState.allCustomers[1].money = previousState.allCustomers[1].money + 1
          }else if( action.customerName == 'Dave' ){
            newState.allCustomers[2].money = previousState.allCustomers[2].money + 1
          }

          newState.moneyInBank =  previousState.moneyInBank  + 1
          const nextState = Object.assign( {}, previousState, newState )
          console.log(nextState)
          return nextState
      }
        break;

      case 'removeMoney': {

          let newState = JSON.parse(JSON.stringify(previousState))

          if( action.customerName == 'Cliff') {
              newState.allCustomers[0].money = previousState.allCustomers[0].money - 1
          }else if( action.customerName == 'Mark' ){
            newState.allCustomers[1].money = previousState.allCustomers[1].money - 1
          }else if( action.customerName == 'Dave' ){
            newState.allCustomers[2].money = previousState.allCustomers[2].money - 1
          }

          newState.moneyInBank =  previousState.moneyInBank  - 1
          const nextState = Object.assign( {}, previousState, newState )
          console.log(nextState)
          return nextState
      }
        break;

      default:
          return previousState
    }
}

module.exports = bankReducer
