import React, { Component } from 'react';

import FilmModal from '../FilmModal/FilmModal';

import './FilmListItem.css';

export default class FilmListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.getMoreInfo = this.getMoreInfo.bind(this);
  }

  getMoreInfo() {
    this.setState(({ show }) => {
      return {
        show: !show,
      };
    });
  }

  render() {
    const { title, src, alt, important, like, onImportant, onLike, genre, descr, onFilter } =
      this.props;
    let genre1, genre2, symbol;
    if (genre.indexOf('/') >= 0) {
      genre1 = genre.slice(0, genre.indexOf('/'));
      genre2 = genre.slice(genre.indexOf('/') + 1);
      symbol = ' / ';
      console.log(`Жанры фильма: ${title}. Первый жанр: "${genre1}", второй "${genre2}"`);
    } else {
      genre1 = genre;
      genre2 = '';
      symbol = '';
    }

    let classNames = '';
    if (like) {
      classNames += ' like';
    }
    if (important) {
      classNames += ' important';
    }

    let modalClassNames = 'film-modal ';
    if (!this.state.show) {
      modalClassNames += ' hide ';
    }

    return (
      <div className={classNames}>
        <div className="film__title">{title}</div>
        <div className="film__genre">
          Жанр:{' '}
          <span className="genre-btn" onClick={() => onFilter(genre1)}>
            {genre1}
          </span>
          {symbol}
          <span className="genre-btn" onClick={() => onFilter(genre2)}>
            {genre2}
          </span>
        </div>
        <div className="film__poster">
          <img className="film__poster__img" onDoubleClick={onLike} src={src} alt={alt} />
        </div>
        <div className="film__description">
          <div className={modalClassNames}>
            <FilmModal
              title={title}
              src={src}
              alt={alt}
              genre={genre}
              descr={descr}
              onClose={this.getMoreInfo}
              onLike={onLike}
              onImportant={onImportant}
            />
          </div>
          <button className="more-info" onClick={this.getMoreInfo}>
            Подробнее
          </button>
        </div>
        <div className="user__tools">
          <button className="like-btn" onClick={onLike}>
            <svg
              className="like-icon"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 217.243 217.243"
              width="20px"
              height="20px">
              <path
                d="M217.144,69.331c-0.804-15.973-7.174-30.984-17.936-42.272C188.221,15.535,173.856,9.19,158.758,9.19
	c-21.959,0-37.959,12.409-46.554,19.076c-1.142,0.886-2.466,1.912-3.448,2.607c-0.778-0.593-1.758-1.386-2.613-2.079
	C98.284,22.431,81.932,9.19,58.489,9.19c-15.097,0-29.462,6.346-40.449,17.869C7.277,38.347,0.906,53.36,0.103,69.331
	c-0.798,15.912,3.023,29.753,12.393,44.878c7.257,11.717,26.627,34.521,47.104,55.453c10.459,10.691,20.121,19.773,27.939,26.264
	c12.949,10.749,18.12,12.127,21.179,12.127c7.798,0,24.318-12.893,49.104-38.321c20.298-20.824,39.597-43.657,46.932-55.526
	C211.059,104.002,218.166,89.68,217.144,69.331z"
              />
            </svg>
          </button>
          <button className="important-btn" onClick={onImportant}>
            <svg
              className="important-icon"
              height="20px"
              viewBox="0 -10 511.99143 511"
              width="20px"
              xmlns="http://www.w3.org/2000/svg">
              <path d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}
