import React from "react";

export default class Column extends React.Component {
  render() {
    let modes = getModes(this.props);
    let numbers = getNumbers(this.props);
    let weights = getWeights(this.props);
  
    let classes = getColumnClass(modes, numbers, weights).join(" ");
    let style = getColumnStyle(numbers);
  
    const ColumnChildren = () => getColumnChildren(this.props.children, numbers);
  
    return (
      React.createElement("div", { style: style, className: `${this.props.className || ""} ${classes}`},
      React.createElement(ColumnChildren, null))
    )
  }
};

Column.defaultProps = {
  mode: "normal",
  modeXxs: null,
  modeXs: null,
  modeS: null,
  modeM: null,
  modeL: null,
  modeXl: null,
  modeXxl: null,
  modeXxxl: null,

  number: "1",
  numberXxs: null,
  numberXs: null,
  numberS: null,
  numberM: null,
  numberL: null,
  numberXl: null,
  numberXxl: null,
  numberXxxl: null,

  // Weights
  weight: "normal",
  weightXxs: null,
  weightXs: null,
  weightS: null,
  weightM: null,
  weightL: null,
  weightXl: null,
  weightXxl: null,
  weightXxxl: null
}

function getModes(props) {
  return {
    "xxs": props.modeXxs || props.modeXs || props.modeS || props.mode,
    "xs": props.modeXs || props.modeS || props.mode,
    "s": props.modeS || props.mode,
    "m": props.modeM || props.mode,
    "l": props.modeL || props.mode,
    "xl": props.modeXl || props.modeL || props.mode,
    "xxl": props.modeXxl || props.modeXl || props.modeL || props.mode,
    "xxxl": props.modeXxxl || props.modeXxl || props.modeXl || props.modeL || props.mode,
  }
}

function getNumbers(props) {
  return {
    "xxs": props.numberXxs || props.numberXs || props.numberS || props.number,
    "xs": props.numberXs || props.numberS || props.number,
    "s": props.numberS || props.number,
    "m": props.numberM || props.number,
    "l": props.numberL || props.number,
    "xl": props.numberXl || props.numberL || props.number,
    "xxl": props.numberXxl || props.numberXl || props.numberL || props.number,
    "xxxl": props.numberXxxl || props.numberXxl || props.numberXl || props.numberL || props.number,
  }
}

function getWeights(props) {
  return {
    "xxs": props.weightXxs || props.weightXs || props.weightS || props.weight,
    "xs": props.weightXs || props.weightS || props.weight,
    "s": props.weightS || props.weight,
    "m": props.weightM || props.weight,
    "l": props.weightL || props.weight,
    "xl": props.weightXl || props.weightL || props.weight,
    "xxl": props.weightXxl || props.weightXl || props.weightL || props.weight,
    "xxxl": props.weightXxxl || props.weightXxl || props.weightXl || props.weightL || props.weight,
  }
}

function getColumnClass(modes, numbers, weights) {
  return [
    // This could be done itearating the array but
    // explicit mode here is preferred 
    "--flare","--flare-frame","--flare-columns",
    "--flare-columns--xxs-mode-" + modes["xxs"],
    "--flare-columns--xs-mode-" + modes["xs"],
    "--flare-columns--s-mode-" + modes["s"],
    "--flare-columns--m-mode-" + modes["m"],
    "--flare-columns--l-mode-" + modes["l"],
    "--flare-columns--xl-mode-" + modes["xl"],
    "--flare-columns--xxl-mode-" + modes["xxl"],
    "--flare-columns--xxxl-mode-" + modes["xxxl"],

    "--flare-columns--xxs-" + numbers["xxs"],
    "--flare-columns--xs-" + numbers["xs"],
    "--flare-columns--s-" + numbers["s"],
    "--flare-columns--m-" + numbers["m"],
    "--flare-columns--l-" + numbers["l"],
    "--flare-columns--xl-" + numbers["xl"],
    "--flare-columns--xxl-" + numbers["xxl"],
    "--flare-columns--xxxl-" + numbers["xxxl"],

    "--flare-weight--xxs-" + weights["xxs"],
    "--flare-weight--xs-" + weights["xs"],
    "--flare-weight--s-" + weights["s"],
    "--flare-weight--m-" + weights["m"],
    "--flare-weight--l-" + weights["l"],
    "--flare-weight--xl-" + weights["xl"],
    "--flare-weight--xxl-" + weights["xxl"],
    "--flare-weight--xxxl-" + weights["xxxl"],
  ]
}

function getColumnStyle(numbers) {
  return {
    "--f-columns-number-xxs": numbers["xxs"],
    "--f-columns-number-xs": numbers["xs"],
    "--f-columns-number-s": numbers["s"],
    "--f-columns-number-m": numbers["m"],
    "--f-columns-number-l": numbers["l"],
    "--f-columns-number-xl": numbers["xl"],
    "--f-columns-number-xxl": numbers["xxl"],
    "--f-columns-number-xxxl": numbers["xxxl"],
  };
}

function getColumnChildren(children, numbers) {
  if (React.Children.count(children) == 0)
    return React.createElement(React.Fragment, null);

  return React.Children.map(children, (child, index) => {
    let childClasses = "";

    for (let breakpoint in numbers) {
      const colNumber = numbers[breakpoint];

      if ((index % colNumber) < colNumber / 2) {
        childClasses += ` --flare-block--${breakpoint}-left`;
      }

      if ((index % colNumber) >= colNumber / 2) {
        childClasses += ` --flare-block--${breakpoint}-right`;
      }

      if (isMiddleColumn(index, colNumber)) {
        childClasses = childClasses.replace(` --flare-block--${breakpoint}-left`, '');
        childClasses = childClasses.replace(` --flare-block--${breakpoint}-right`, '');
        childClasses += ` --flare-block--${breakpoint}-middle`;
      }

      if (colNumber == 1) {
        childClasses = childClasses.replace(` --flare-block--${breakpoint}-left`, '');
        childClasses = childClasses.replace(` --flare-block--${breakpoint}-right`, '');
        childClasses = childClasses.replace(` --flare-block--${breakpoint}-middle`, '');
        childClasses += ` --flare-block--${breakpoint}-single`;
      } else {
        childClasses = childClasses.replace(` --flare-block--${breakpoint}-single`, '');
      }
    }
    let currentClass = child.props && child.props.className || "";

    return React.cloneElement(child, { className: `${currentClass} ${childClasses}` });
  });
}

function isMiddleColumn(indexColumn, totalColumns) {
  if (totalColumns % 2 < 1)
    return false
  let rowNumber = Math.floor(indexColumn / totalColumns);
  let reduceNumber = rowNumber * totalColumns;
  let indexByRow = indexColumn - reduceNumber;
  return indexByRow == Math.floor(totalColumns / 2);
}