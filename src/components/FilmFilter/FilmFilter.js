import React, { Component } from 'react';

import './FilmFilter.css';

export default class FilmFilter extends Component {
  render() {
    return (
      <div className="filters">
        <button className="filter-button filter-all">Все</button>
        <button className="filter-button filter-important">Избранные</button>
        <button className="filter-button filter-like">Любимые</button>
      </div>
    );
  }
}
