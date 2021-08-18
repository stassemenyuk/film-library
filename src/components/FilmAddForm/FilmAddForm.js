import React, { Component } from 'react';

import './FilmAddForm.css';

export default class FilmAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      genre: '',
      src: '',
      descr: '',
    };
  }

  render() {
    const { title, genre, src, descr } = this.state;
    const { onAdd } = this.props;
    return (
      <form
        className="film-add-form"
        onSubmit={(e) => {
          e.preventDefault();
          onAdd(title, genre, src, descr);
        }}>
        <input
          type="text"
          placeholder="Название"
          onChange={(e) => {
            this.setState({ title: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Жанр"
          onChange={(e) => {
            this.setState({ genre: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Ссылка на изображение постера"
          onChange={(e) => {
            this.setState({ src: e.target.value });
          }}
        />
        <textarea
          name=""
          id=""
          rows="4"
          placeholder="Краткое описание"
          onChange={(e) => {
            this.setState({ descr: e.target.value });
          }}></textarea>
        <button>Добавить фильм</button>
      </form>
    );
  }
}
