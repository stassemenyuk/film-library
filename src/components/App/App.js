import React, { Component } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import FilmFilter from '../FilmFilter/FilmFilter';
import FilmList from '../FilmList/FilmList';
import FilmAddForm from '../FilmAddForm/FilmAddForm';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [
        {
          title: 'Captain America 2',
          src: 'https://upload.wikimedia.org/wikipedia/ru/e/e8/Captain_America_The_Winter_Soldier.jpg',
          alt: 'Captain America',
          descr: `«Первый мститель: Другая война» (англ. Captain America: The Winter Soldier)
           — художественный фильм режиссёров братьев Руссо, основанный на комиксах Marvel о приключениях
            супергероя Капитана Америка. Продолжение фильма «Первый мститель» и 9-я по счёту картина в
             кинематографической вселенной Marvel (КВM). Главные роли сыграли Крис Эванс, Скарлетт Йоханссон,
              Роберт Редфорд и Сэмюэл Л. Джексон. После событий фильма «Мстители» Стив Роджерс ведёт жизнь в
               современном обществе в Вашингтоне. Однако после нападения на директора Щ.И.Т.а Ника Фьюри Роджерс
                оказывается втянутым в тайну, которая угрожает всему миру. Капитан Америка и Наташа Романофф разоблачают заговор
                 и обращаются за помощью к новому союзнику Соколу. Вскоре они сталкиваются с грозным врагом — Зимним солдатом.`,
          like: false,
          important: false,
          id: 1,
        },
        {
          title: 'Пираты Карибского моря: Проклятие Чёрной жемчужины',
          src: `https://upload.wikimedia.org/wikipedia/ru/thumb/7/79/Pirates-of-the-Caribbean-The-Curse-of-the-Black-Pearl-.jpg/201px-Pirates-of-the-Caribbean-The-Curse-of-the-Black-Pearl-.jpg`,
          alt: 'Пираты Карибского моря',
          descr: `«Пираты Карибского моря: Проклятие Чёрной жемчужины»
           (англ. Pirates of the Caribbean: The Curse of The Black Pearl)
           — приключенческий фильм о пиратах, действие которого разворачивается на Карибах
            в первой половине XVIII века. Фильм был поставлен режиссёром Гором Вербински и спродюсирован
             Джерри Брукхаймером. Идея картины пришла к создателям под впечатлением от одноимённого тематического водного
              аттракциона в Диснейленде.`,
          like: false,
          important: false,
          id: 2,
        },
        {
          title: 'Остров проклятых',
          src: `https://upload.wikimedia.org/wikipedia/ru/thumb/2/22/Kinopoisk.ru-Shutter-Island-1094940.jpg/203px-Kinopoisk.ru-Shutter-Island-1094940.jpg`,
          alt: 'Остров проклятых',
          descr: `«Остров проклятых» (англ. Shutter Island) — американский детективный 
            триллер режиссёра Мартина Скорсезе по одноимённому роману Денниса Лихэйна, вышедший 19
             февраля 2010 года в США. Сценарная адаптация романа была произведена Лаэтой
              Калогридис. Это четвёртая совместная работа режиссёра Мартина Скорсезе и актёра Леонардо Ди Каприо.`,
          like: false,
          important: false,
          id: 3,
        },
      ],
    };
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLike = this.onToggleLike.bind(this);
  }

  onToggleImportant(id) {
    this.setState(({ films }) => {
      const index = films.findIndex((elem) => elem.id === id);
      const { important } = films[index];
      const newElem = JSON.parse(JSON.stringify(films[index]));
      newElem.important = !important;
      const newArr = [...films.slice(0, index), newElem, ...films.slice(index + 1)];
      return {
        films: newArr,
      };
    });
  }

  onToggleLike(id) {
    this.setState(({ films }) => {
      const index = films.findIndex((elem) => elem.id === id);
      const { like } = films[index];
      const newElem = JSON.parse(JSON.stringify(films[index]));
      newElem.like = !like;
      const newArr = [...films.slice(0, index), newElem, ...films.slice(index + 1)];
      return {
        films: newArr,
      };
    });
  }

  render() {
    const { films } = this.state;
    const filmsNumber = this.state.films.length;

    return (
      <div className="app">
        <AppHeader films={filmsNumber} />
        <div className="search-panel">
          <SearchPanel />
          <FilmFilter />
        </div>
        <FilmList films={films} onImportant={this.onToggleImportant} onLike={this.onToggleLike} />
        <FilmAddForm />
      </div>
    );
  }
}
