import React, { Component } from 'react';

import './FilmFilter.css';

export default class FilmFilter extends Component {
  render() {
    const { onFilter } = this.props;
    return (
      <div className="filters">
        <button className="filter-button filter-all" onClick={() => onFilter('all')}>
          Все
        </button>
        <button className="filter-button filter-important" onClick={() => onFilter('important')}>
          Избранные
        </button>
        <button className="filter-button filter-like" onClick={() => onFilter('like')}>
          Любимые
        </button>
      </div>
    );
  }
}
