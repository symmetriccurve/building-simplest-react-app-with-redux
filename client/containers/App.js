
import React from 'react'
import Bank from './Bank'
import Customers from './Customers'
import { connect } from 'react-redux'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
    }
  }

    componentWillMount(){
        this.setState({
          name: 'Mark'
        })
    }

  render(){
    return (
        <div>
            <Bank moneyInBank={this.props.fullBankDetails.moneyInBank}/>
            <Customers allCustomers={this.props.fullBankDetails.allCustomers}/>
        </div>
    )
  }
  componentDidMount(){
      this.setState({
        name: 'Mark'
      })
  }

}

function mapStateToProps(state){
    return {
       fullBankDetails:state.bankReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
