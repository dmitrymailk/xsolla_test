import React, { Component } from "react";

import EventCardItem from "./components/EventCardItem";
import FilterItem from "./components/FilterItem";
import moment from "moment";
import Favorites from "./components/Favorites";
import "./index.sass";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      filterListCity: ["All"],
      filterListMonth: ["All"],
      musicEvents: [],
      filteredMusicEvents: [],
      filterParams: { city: "All", month: "All" },
    };
  }

  async fetchEvents() {
    let res = await fetch(
      "https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json"
    );
    const data = await res.json();
    return data;
  }

  async getEvents() {
    const fetchedEvents = await this.fetchEvents();
    this.setState({
      musicEvents: fetchedEvents,
      filteredMusicEvents: fetchedEvents,
    });
  }

  async componentDidMount() {
    await this.getEvents();
    await this.processEvents();
  }

  async processEvents() {
    let mounths = {};
    let cities = {};
    moment.locale("en");
    for (const item of this.state.musicEvents) {
      if (cities[`${item.city}`]) cities[`${item.city}`].push(item.id);
      else cities[`${item.city}`] = [item.id];

      let date = moment(item.date, "DD.MM.YYYY").format("MMMM");
      if (mounths[`${date}`]) mounths[`${date}`].push(item.id);
      else mounths[`${date}`] = [item.id];
    }

    let monthsNames = Object.keys(mounths);
    let citiesNames = Object.keys(cities);

    this.setState({
      filterListCity: ["All", ...citiesNames],
      filterListMonth: ["All", ...monthsNames],
    });
  }

  // first filter state
  updateCityFilter(selectedCity) {
    let filterParams = this.state.filterParams;
    this.setState({ filterParams: { ...filterParams, city: selectedCity } });
  }
  // second filter state
  updateMonthFilter(selectedDate) {
    let filterParams = this.state.filterParams;
    this.setState({ filterParams: { ...filterParams, month: selectedDate } });
  }
  // 3 filter state
  updateFavFilter(state) {
    let filterParams = this.state.filterParams;
    this.setState({ filterParams: { ...filterParams, favorites: state } });
  }

  filterEvents(item) {
    moment.locale("en");
    let result = 1;
    let filterParams = this.state.filterParams;

    result &= Math.max(
      item.city === filterParams.city,
      filterParams.city === "All"
    );

    let date = moment(item.date, "DD.MM.YYYY").format("MMMM");
    result &= Math.max(
      date === filterParams.month,
      filterParams.month === "All"
    );

    if (filterParams.favorites)
      result &= Boolean(Number(window.localStorage.getItem(item.id)));

    return Boolean(result);
  }

  getFilteredEvents() {
    let res = this.state.musicEvents.filter((item) => this.filterEvents(item));
    return res;
  }

  render() {
    const filterListCity = this.state.filterListCity;
    const filterListMonth = this.state.filterListMonth;
    const filteredMusicEvents = this.getFilteredEvents();

    return (
      <>
        <div className="container">
          <div className="header">
            <h1 className="header__title">Event Listing</h1>
          </div>
          <div className="filter-list">
            <FilterItem
              title="City"
              filterList={filterListCity}
              updateFilter={this.updateCityFilter.bind(this)}
            />
            <FilterItem
              title="Month"
              filterList={filterListMonth}
              updateFilter={this.updateMonthFilter.bind(this)}
            />
            <Favorites updateFilter={this.updateFavFilter.bind(this)} />
          </div>

          <div className="event-card-list">
            {filteredMusicEvents.map((item, i) => (
              <EventCardItem
                key={item.id}
                city={item.city}
                date={item.date}
                genre={item.genre}
                id={item.id}
                image={item.image}
                name={item.name}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}
