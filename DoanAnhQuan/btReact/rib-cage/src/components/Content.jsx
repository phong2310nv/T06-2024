import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    return (
      <div  {...this.props}>
        <h1 className='header_content'>Trending Product</h1>
        <div className={this.props.className + '_main'}>
            <div className={this.props.className + '1'}>1</div>
            <div className={this.props.className + '2'}>2</div>
            <div className={this.props.className + '3'}>3</div>
            <div className={this.props.className + '4'}>4</div>
        </div>
    </div>  
    )
  }
}
