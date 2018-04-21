import React from 'react'
import Bank from '../components/Bank'
import Customers from './Customers'
import { connect } from 'react-redux'

class App extends React.Component{
  render(){
    console.log("This are the Properties passed into App",this.props)
    return (
        <div>
          <Bank moneyInBank={this.props.moneyInBank}/>
          <Customers/>
        </div>
    )
  }
}

function mapStateToProps(state){
  return {
    moneyInBank: state.bankReducer.moneyInBank
  }
}

export default connect( mapStateToProps )( App )
