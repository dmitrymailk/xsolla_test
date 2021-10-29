import React, { Component } from "react";

export default class ItemSelectorItem extends Component {
  render() {
    const title = this.props.title;

    return (
      <li
        className="item-selector__item"
        onClick={() => this.props.onClickEvent(title)}
      >
        <div className="item-selector__item-text">{title}</div>
      </li>
    );
  }
}
