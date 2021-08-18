import React, { Component } from 'react';

import './AppHeader.css';

export default class AppHeader extends Component {
  render() {
    const { films, likes, important } = this.props;
    return (
      <div className="header">
        <div className="header__title">Сборник фильмов</div>
        <div className="header__counter">
          Фильмов - {films}, понравившихся - {likes}, в избранном - {important}
        </div>
      </div>
    );
  }
}
