import React from 'react'
import Bank from '../components/Bank'
import Customers from './Customers'

class App extends React.Component{
  render(){
    return (
        <div>
          <Bank moneyInBank={"10"}/>
          <Customers/>
        </div>
    )
  }
}

module.exports =App
