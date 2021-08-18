import React, { Component } from 'react';

import './SearchPanel.css';

export default class SearchPanel extends Component {
  render() {
    return <input className="search-input" type="text" placeholder="Поиск по названию" />;
  }
}
