import React, { Component } from "react";

export default class Page extends Component {

  componentDidMount() {
    document.body.classList.remove('--flare-hidden');
  }

  render() {
    return React.createElement("div", { className: `--flare --flare-page ${this.props.className || ''}` }, this.props.children);
  }
};