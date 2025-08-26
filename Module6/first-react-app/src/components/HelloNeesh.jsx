//import React, { Component } from 'react';

class HelloNeesh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Neesh',
    };
  }

  render() {
    return <h1>Hello, {this.state.name}!</h1>;
  }
}

export default HelloNeesh;