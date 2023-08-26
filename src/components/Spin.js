import React, { Component } from 'react'
import loading from './loading.gif'

export class Spin extends Component {
  render() {
    return (
      <div className='text-center my-6 '>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spin
