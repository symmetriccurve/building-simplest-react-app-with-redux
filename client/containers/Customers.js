
import React from 'react'
import Cliff from '../components/Cliff'
import Mark from '../components/Mark'
import Dave from '../components/Dave'

class Customers extends React.Component{
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
    console.log('This is App, Im Rendering')
    return (
        <div>
            <Cliff money={this.props.allCustomers[0].money}/>
            <Mark money={this.props.allCustomers[1].money}/>
            <Dave money={this.props.allCustomers[2].money}/>
        </div>
    )
  }
  componentDidMount(){
      this.setState({
        name: 'Mark'
      })
  }

}

module.exports = Customers
