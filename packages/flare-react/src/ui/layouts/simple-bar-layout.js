import React from "react";
export default class SimpleBarLayout extends React.Component {
  render() {
    return (
      React.createElement("div", { className: `--flare-simple-bar-layout ${this.props.className || ''}`, style: this.props.style },
      React.createElement("div", null, this.props.left),
      React.createElement("div", null, this.props.children),
      React.createElement("div", null, this.props.right))
    )
  }
};