import React, { Component } from "react";

class ButtonRed extends Component {
  dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };
  dragover = (e) => {
    e.stopPropagation();
  };
  render() {
    return (
      <button
        draggable="true"
        onDragStart={this.dragStart}
        onDragOver={this.dragover}
        id={this.props.aid}
        style={{
          color: this.props.color,
          left: this.props.left,
          top: this.props.top,
          borderRadius: this.props.radius,
        }}
      >
        hello
      </button>
    );
  }
}

export default ButtonRed;
