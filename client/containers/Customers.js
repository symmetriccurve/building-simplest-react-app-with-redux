import React from 'react'
import Cliff from '../components/Cliff'
import Mark from '../components/Mark'
import Dave from '../components/Dave'
import { connect } from 'react-redux'
import store from '../store'

class Customers extends React.Component {
  render(){
      return(
          <div>
              <Cliff money = {this.props.customers[0].money} addMoney={()=>{  store.dispatch( {type:'addMoney', customerName:'Cliff'} )  }} removeMoney={()=>{ store.dispatch({ type: 'removeMoney', customerName: 'Cliff' })  }}/>
              <Mark money = {this.props.customers[1].money} addMoney={()=>{  store.dispatch( {type:'addMoney', customerName:'Mark'} )  }} removeMoney={()=>{ store.dispatch({ type: 'removeMoney', customerName: 'Mark' })  }}/>
              <Dave money = {this.props.customers[2].money} addMoney={()=>{  store.dispatch( {type:'addMoney', customerName:'Dave'} )  }} removeMoney={()=>{ store.dispatch({ type: 'removeMoney', customerName: 'Dave' })  }}/>
          </div>
      )
  }
}
function mapStateToProps(state){
  return {
    customers : state.bankReducer.allCustomers
  }
}

export default connect( mapStateToProps )( Customers )
