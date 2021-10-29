import React, { Component } from "react";
import bookmark_active from "../img/bookmark_active.svg";
import bookmark_disabled from "../img/bookmark_disabled.svg";
import moment from "moment";
import PropTypes from "prop-types";

class EventCardItem extends Component {
  constructor(props) {
    super(props);

    this.state = { id: this.props.id };
    this.bookmark = React.createRef();
    this.currentImage = bookmark_disabled;
  }

  componentDidMount() {
    let bookmarkState = Boolean(
      Number(window.localStorage.getItem(this.state.id))
    );
    this.setBookmark(bookmarkState);
  }

  setBookmark(state) {
    if (state) {
      window.localStorage.setItem(this.state.id, 1);
      this.bookmark.current.src = bookmark_active;
      this.setState({ currentImage: bookmark_active });
    } else {
      window.localStorage.setItem(this.state.id, 0);
      this.bookmark.current.src = bookmark_disabled;
      this.setState({ currentImage: bookmark_disabled });
    }
  }

  addBookmark() {
    console.log(window.localStorage.getItem(this.state.id));
    let bookmarkState = !Boolean(
      Number(window.localStorage.getItem(this.state.id))
    );
    this.setBookmark(bookmarkState);
    // console.log(bookmarkState);
  }

  render() {
    let date = this.props.date;
    date = moment(date, "DD.MM.YYYY");
    date = date.date();

    let image = this.props.image;
    let name = this.props.name;

    return (
      <div className="event-card-item">
        <div className="event-card-item__image">
          <div className="event-card-item__overlay"></div>
          <img src={image} alt="" />
        </div>
        <span className="event-card-item__date">{date}</span>
        <span className="event-card-item__title">{name}</span>
        <span
          className="event-card-item__bookmark"
          onClick={this.addBookmark.bind(this)}
        >
          <img src={this.currentImage} ref={this.bookmark} alt="" />
        </span>
      </div>
    );
  }
}

EventCardItem.propTypes = {
  city: PropTypes.string,
  date: PropTypes.string.isRequired,
  genre: PropTypes.string,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default EventCardItem;
