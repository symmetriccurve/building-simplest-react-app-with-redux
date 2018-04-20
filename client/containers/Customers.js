import React from 'react'
import Cliff from '../components/Cliff'
import Mark from '../components/Mark'
import Dave from '../components/Dave'
import { connect } from 'react-redux'

class Customers extends React.Component {
  render(){
      return(
          <div>
              <Cliff money = {this.props.customers[0].money}/>
              <Mark money = {this.props.customers[1].money}/>
              <Dave money = {this.props.customers[2].money}/>
          </div>
      )
  }
}
function mapStateToProps(state){
  debugger
  return {
    customers : state.customersReducer.allCustomers
  }
}

export default connect( mapStateToProps )( Customers )
