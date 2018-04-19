import React from 'react'
import Cliff from '../components/Cliff'
import Mark from '../components/Mark'
import Dave from '../components/Dave'

class Customers extends React.Component {
  render(){
      return(
          <div>
              <Cliff/>
              <Mark/>
              <Dave/>
          </div>
      )
  }
}

module.exports = Customers
