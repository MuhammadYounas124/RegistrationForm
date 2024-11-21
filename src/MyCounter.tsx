import { Component } from 'react'

export class MyCounter extends Component {

  constructor(props:{}){

    super(props);

  }

  state = {
    color:'brown'
  };

  changetogreen = () => {
    this.setState({color:'green'})
  };

  changetobrown = () => {
    this.setState({color:'brown'})
  };

  render() {
    return (
      <div>
        <div
        style={{
          backgroundColor: this.state.color,
          width:'400px',
          height:'400px',
          border:'red',
        }}
        ></div>
        <button onClick={this.changetogreen}>Green</button>
        <button onClick={this.changetobrown}>Brown</button>
      </div>
    )
  }
}

export default MyCounter








