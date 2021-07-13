import React from 'react'
import ReactDOM from 'react-dom'
import Form from './form.js';

class HelloWorld extends React.Component {
	render () {
    return (<div>
      <p><b>Hello world Application</b></p>
      <br/>
      <Form/>

    </div>)
  }
};

ReactDOM.render(<HelloWorld/>, document.getElementById('root'));