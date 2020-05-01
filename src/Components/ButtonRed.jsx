import React, { Component } from "react";

class ButtonRed extends Component {
  render() {
    return (
      <button
        style={{
          color: this.props.color,
          left: this.props.left,
          top: this.props.top,
          borderRadius:this.props.radius
        }}
      >
        hello
      </button>
    );
  }
}

export default ButtonRed;
