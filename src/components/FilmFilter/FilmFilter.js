import React, { Component } from 'react';

import './FilmFilter.css';

export default class FilmFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
    };
  }

  render() {
    const { onFilter } = this.props;
    const { filter } = this.state;
    let filterAllClasses = 'filter-button filter-all',
      filterImportantClasses = 'filter-button filter-important',
      filterLikeClasses = 'filter-button filter-like';

    if (filter === 'all') {
      filterAllClasses += ' chosen';
    } else {
      if (filter === 'like') {
        filterLikeClasses += ' chosen';
      } else {
        filterImportantClasses += ' chosen';
      }
    }

    return (
      <div className="filters">
        <button
          className={filterAllClasses}
          onClick={() => {
            this.setState({ filter: 'all' });
            onFilter('all');
          }}>
          Все
        </button>
        <button
          className={filterImportantClasses}
          onClick={() => {
            this.setState({ filter: 'important' });
            onFilter('important');
          }}>
          Избранные
        </button>
        <button
          className={filterLikeClasses}
          onClick={() => {
            this.setState({ filter: 'like' });
            onFilter('like');
          }}>
          Любимые
        </button>
      </div>
    );
  }
}
