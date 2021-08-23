import React, { Component } from 'react';

import './FilmGenreFilter.css';

export default class FilmGenreFilter extends Component {
  render() {
    const { onFilter, chosen } = this.props;

    const defaultClassnames = 'filter-button';

    let filterAll = defaultClassnames,
      filterAction = defaultClassnames,
      filterComedy = defaultClassnames,
      filterFantasy = defaultClassnames,
      filterCriminal = defaultClassnames,
      filterDrama = defaultClassnames,
      filterThriller = defaultClassnames,
      filterDetective = defaultClassnames;

    switch (chosen) {
      case 'Боевик':
        filterAction += ' chosen';
        break;
      case 'Комедия':
        filterComedy += ' chosen';
        break;
      case 'Фантастика':
        filterFantasy += ' chosen';
        break;
      case 'Криминал':
        filterCriminal += ' chosen';
        break;
      case 'Драма':
        filterDrama += ' chosen';
        break;
      case 'Триллер':
        filterThriller += ' chosen';
        break;
      case 'Детектив':
        filterDetective += ' chosen';
        break;
      default:
        filterAll += ' chosen';
        break;
    }

    return (
      <div className="film-genre-filter">
        <button
          className={filterAll}
          onClick={() => {
            onFilter('all');
            // this.setState({ chosen: 'all' });
          }}>
          Все жанры
        </button>
        <button
          className={filterAction}
          onClick={() => {
            onFilter('Боевик');
            // this.setState({ chosen: 'Боевик' });
          }}>
          Боевик
        </button>
        <button
          className={filterComedy}
          onClick={() => {
            onFilter('Комедия');
            // this.setState({ chosen: 'Комедия' });
          }}>
          Комедия
        </button>
        <button
          className={filterFantasy}
          onClick={() => {
            onFilter('Фантастика');
            // this.setState({ chosen: 'Фантастика' });
          }}>
          Фантастика
        </button>
        <button
          className={filterCriminal}
          onClick={() => {
            onFilter('Криминал');
            // this.setState({ chosen: 'Криминал' });
          }}>
          Криминал
        </button>
        <button
          className={filterDrama}
          onClick={() => {
            onFilter('Драма');
            // this.setState({ chosen: 'Драма' });
          }}>
          Драма
        </button>
        <button
          className={filterThriller}
          onClick={() => {
            onFilter('Триллер');
            // this.setState({ chosen: 'Триллер' });
          }}>
          Триллер
        </button>
        <button
          className={filterDetective}
          onClick={() => {
            onFilter('Детектив');
            // this.setState({ chosen: 'Детектив' });
          }}>
          Детектив
        </button>
      </div>
    );
  }
}
