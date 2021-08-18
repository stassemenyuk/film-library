import React, { Component } from 'react';

import './SearchPanel.css';

export default class SearchPanel extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <input
        className="search-input"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        type="text"
        placeholder="Поиск по названию"
      />
    );
  }
}
