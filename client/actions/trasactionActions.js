

export function removeMoney(moneyToRemove,customerName) {
  return {
    type: 'remove_money',
    moneyToRemove: moneyToRemove
    customerName: customerName
   }
}

export function addMoney(moneyToAdd,customerName) {
  return {
    type: 'remove_money',
    moneyToAdd: moneyToAdd
    customerName: customerName
   }
}
