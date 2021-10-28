import React, { Component } from "react";
import bookmark_active from "../img/bookmark_active.svg";
import moment from "moment";
import PropTypes from "prop-types";

class EventCardItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // console.log(this.props);
    // let city = this.props;
    let date = this.props.date;
    date = moment(date, "DD.MM.YYYY");
    let day = date.date();
    // let genre = this.props;
    // let id = this.props;
    let image = this.props.image;
    let name = this.props.name;
    console.log(day, this.props.date);
    return (
      <div className="event-card-item">
        <div className="event-card-item__image">
          <div className="event-card-item__overlay"></div>
          <img src={image} alt="" />
        </div>
        <span className="event-card-item__date">{day}</span>
        <span className="event-card-item__title">{name}</span>
        <span className="event-card-item__bookmark">
          <img src={bookmark_active} alt="" />
        </span>
      </div>
    );
  }
}

EventCardItem.propTypes = {
  city: PropTypes.string,
  date: PropTypes.string,
  genre: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
};

export default EventCardItem;
