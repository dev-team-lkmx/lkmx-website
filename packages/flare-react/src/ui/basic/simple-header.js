import * as React from "react";
import Column from "../../structure/column.js";
import Block from "../../structure/block.js";

export default class SimpleHeader extends React.Component {
  render() {
    return (
      React.createElement("header", { className: `--flare-header ${this.props.className || ''}`, style: this.props.style },
      React.createElement(Column, { mode: this.props.mode },
      React.createElement(Block, null, this.props.children)))
    )
  }
};