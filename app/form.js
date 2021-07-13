import React from 'react'
import Input from './input'
import Button from './button';

class Form extends React.Component {
  render () {
    return (<div>
      Please fill the form for signup
      <br/>
      <br/>
      <Input name="name"/>
      <Input name="password"/>
      <br/>
      <Button/>
    </div>)
  }
}
export default Form
