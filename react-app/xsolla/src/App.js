import React, { Component } from "react";

import EventCardItem from "./components/EventCardItem";
import FilterItem from "./components/FilterItem";
import moment from "moment";

import "./index.sass";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      filterListCity: [],
      filterListMonth: [],
      musicEvents: [],
    };
  }

  async fetchEvents() {
    let res = await fetch(
      "https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json"
    );
    const data = await res.json();
    console.log(data);
    return data;
  }

  async getEvents() {
    const fetchedEvents = await this.fetchEvents();
    this.setState({ musicEvents: fetchedEvents });
  }

  async componentDidMount() {
    await this.getEvents();
    this.processEvents();
  }

  processEvents() {
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
    console.log(mounths, cities);

    let monthsNames = Object.keys(mounths);
    let citiesNames = Object.keys(cities);
    this.setState({
      filterListCity: citiesNames,
      filterListMonth: monthsNames,
    });
  }

  render() {
    const filterListCity = this.state.filterListCity;
    const filterListMonth = this.state.filterListMonth;
    const musicEvents = this.state.musicEvents;

    return (
      <>
        <div className="container">
          <header className="header">
            <h1 className="header__title">Event Listing</h1>
          </header>
          <div className="filter-list">
            <FilterItem title="City" filterList={filterListCity} />
            <FilterItem title="Month" filterList={filterListMonth} />
          </div>
          <div className="event-card-list">
            {musicEvents.map((item, i) => (
              <EventCardItem
                key={i}
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
