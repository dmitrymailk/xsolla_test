import React, { Component } from "react";
import arrow from "../img/arrow.svg";
import ItemSelectorItem from "./ItemSelectorItem";

export default class FilterItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      filterList: this.props.filterList,
      isShowItems: false,
      selectedItem: this.props.filterList[0],
    };
  }

  showItems() {
    this.setState({ isShowItems: !this.state.isShowItems });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filterList.length !== this.props.filterList.length) {
      this.setState({
        title: this.props.title,
        filterList: this.props.filterList,
        selectedItem: this.props.filterList[0],
      });
    }
  }

  selectFilterItem(item) {
    this.setState({
      selectedItem: item,
      isShowItems: false,
    });

    this.props.updateFilter(item);
    console.log(item, this);
  }
  render() {
    const { title, filterList, selectedItem } = this.state;

    const selectorListClassName = `item-selector__list ${
      (this.state.isShowItems && "item-selector__list_active") || ""
    }`;

    return (
      <div className="filter-item">
        <span className="filter-item__title">{title}:</span>
        <div className="item-selector">
          <div className="item-selector__title">{selectedItem}</div>
          <div
            className="item-selector__arrow"
            onClick={() => this.showItems()}
          >
            <img src={arrow} alt="" />
          </div>
          <div className={selectorListClassName}>
            {filterList.map((item, index) => (
              <ItemSelectorItem
                key={index}
                title={item}
                onClickEvent={this.selectFilterItem.bind(this)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
