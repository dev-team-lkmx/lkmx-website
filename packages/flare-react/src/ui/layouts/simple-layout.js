import React from "react";
export default class SimpleLayout extends React.Component {
  render() {
    return (
      React.createElement("div", { className: `--flare-simple-layout ${this.props.className}`, style: this.props.style },
      React.createElement("header", {}, this.props.header),
      React.createElement("div", {}, this.props.main),
      React.createElement("footer", {}, this.props.footer))
    )  
  }
};