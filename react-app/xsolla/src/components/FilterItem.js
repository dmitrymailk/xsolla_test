import React, { Component } from "react";
import arrow from "../img/arrow.svg";
import ItemSelectorItem from "./EventCardItem";

export default class FilterItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      filterList: props.filterList,
    };
  }

  render() {
    const title = this.state.title;
    const filterList = this.state.filterList;
    const defaultFilter = filterList.length > 0 ? filterList[0] : "Empty";
    return (
      <div className="filter-item">
        <span className="filter-item__title">{title}:</span>
        <div className="item-selector">
          <div className="item-selector__title">{defaultFilter}</div>
          <div className="item-selector__arrow">
            <img src={arrow} alt="" />
          </div>
          <div className="item-selector__list">
            {filterList.map((item, index) => (
              <ItemSelectorItem key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
