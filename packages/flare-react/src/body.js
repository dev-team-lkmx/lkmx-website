import React, { Component } from "react";

export default class Body extends Component {
  render() {
    return React.createElement("body", { className: `--flare-hidden ${this.props.className || ''}` }, this.props.children);
  }
};