
import React from 'react'
import Customers from './Customers'

class Bank extends React.Component{
render(){
    return (
        <div>
            <h1> Total Money : $ {this.props.moneyInBank} </h1>
        </div>
    )
  }
  componentDidMount(){
      this.setState({
        name: 'Mark'
      })
  }

}

module.exports = Bank
