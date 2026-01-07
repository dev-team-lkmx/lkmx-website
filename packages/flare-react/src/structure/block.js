import React, { Component } from "react";

export default class Block extends Component {
  render() {
    return (
      React.createElement("div", { className: `--flare --flare-block ${this.props.className || ''}`},
      React.createElement("div", { className: "content" },
      React.createElement("div", { className: "box" }, this.props.children)))
    )
  }
};