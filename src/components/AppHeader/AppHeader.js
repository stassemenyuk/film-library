import React, { Component } from 'react';

import './AppHeader.css';

export default class AppHeader extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__title">Сборник фильмов</div>
        <div className="header__counter">Фильмов - , понравившихся - </div>
      </div>
    );
  }
}
