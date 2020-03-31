import React, { Component } from "react";

class Ticker extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count % 3 === 0) return true;
    else return false;
  }

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  // componentWillUnmount(){
  //   this.setState({
  //     count: 0,
  //   })
  // }

  render() {
    return (
      <div>
        <div>The ticker is: {this.state.count}</div>
        <button type="button" onClick={this.reset}>
          Pause the Ticker
        </button>
        <button type="button" onClick={this.reset}>
          Reset Ticker
        </button>
      </div>
    );
  }
}

export default Ticker;
