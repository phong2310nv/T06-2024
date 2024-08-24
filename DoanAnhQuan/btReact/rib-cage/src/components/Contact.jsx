import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <div  {...this.props}>
            <div className='contact1'>1</div>
            <div className='contact2'>2</div>
            <div className='contact3'>3</div>
            <div className='contact4'>4</div>
        </div>
    )
  }
}
