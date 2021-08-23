import React, { Component } from 'react';

import FilmListItem from '../FilmListItem/FilmListItem';

import './FilmList.css';

export default class FilmList extends Component {
  render() {
    const { films, onFilter } = this.props;
    const elements = films.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <div key={id} className="film-list__item">
          <FilmListItem
            onFilter={onFilter}
            {...itemProps}
            onImportant={() => this.props.onImportant(id)}
            onLike={() => this.props.onLike(id)}
          />
        </div>
      );
    });
    return <div className="film-list">{elements}</div>;
  }
}
