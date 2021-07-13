import React from 'react'

class Input extends React.Component {
  render () {
    return (<div>
      Please enter {this.props.name}:
      <input type="text" name={this.props.name}/>
    </div>)
  }
}

export default Input