
import React from 'react'
import Cliff from '../components/Cliff'
import Mark from '../components/Mark'
import Dave from '../components/Dave'
import { connect } from 'react-redux'
import { addMoney, removeMoney } from '../actions/trasactionActions'

class Customers extends React.Component{
  render(){
    return (
        <div>
            <Cliff money={this.props.allCustomers[0].money} addMoney={this.props.addMoney} removeMoney={this.props.removeMoney}/>
            <Mark money={this.props.allCustomers[1].money} addMoney={this.props.addMoney} removeMoney={this.props.removeMoney}/>
            <Dave money={this.props.allCustomers[2].money} addMoney={this.props.addMoney} removeMoney={this.props.removeMoney}/>
        </div>
    )
  }

}

function mapStateToProps(state){
    return {
       allCustomers: state.bankReducer.allCustomers
    }
}

function mapDispatchToProps(dispatch){
    return {
        addMoney : (customer) => dispatch(addMoney(customer)),
        removeMoney : (customer) => dispatch(removeMoney(customer)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Customers)
