import React, { Component } from "react";
import PropTypes from "prop-types";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      isShowFav: false,
    };
  }

  changeFav() {
    let isShowFav = !this.state.isShowFav;
    this.setState({ isShowFav });

    this.props.updateFilter(isShowFav);
  }

  render() {
    const className = `favorites__checkbox ${
      (this.state.isShowFav && "favorites__checkbox_active") || ""
    }`;
    return (
      <div className="favorites">
        <div className="favorites__title">Favorites:</div>
        <div className={className} onClick={this.changeFav.bind(this)}></div>
      </div>
    );
  }
}

Favorites.propTypes = {
  updateFilter: PropTypes.func,
};

export default Favorites;
