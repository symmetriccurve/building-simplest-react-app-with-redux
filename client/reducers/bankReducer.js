const defaultState = {
    moneyInBank: 0,
    allCustomers : [
        { customerName: 'Cliff',money: 10 },
        { customerName: 'Mark',money: 20 },
        { customerName: 'Dave',money: 30 },
    ]
}

function bankReducer(newState = defaultState,action){
    return newState
}

module.exports = bankReducer
