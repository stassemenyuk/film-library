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
          title: 'Первый Мститель 2',
          genre: 'Боевик',
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
          genre: 'Боевик',
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
          genre: 'Триллер / Детектив',
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
        {
          title: 'Побег из Шоушенка',
          genre: 'Драма',
          src: `https://upload.wikimedia.org/wikipedia/ru/thumb/d/de/Movie_poster_the_shawshank_redemption.jpg/212px-Movie_poster_the_shawshank_redemption.jpg`,
          alt: 'Побег из Шоушенка',
          descr: `«Побе́г из Шоуше́нка» (англ. The Shawshank Redemption) — американский художественный фильм-драма 1994 года, снятый режиссёром Фрэнком
           Дарабонтом по его же сценарию, и рассказывающий историю Энди Дюфрейна, незаслуженно приговорённого
            к пожизненному заключению и пробывшего в заключении почти 20 лет. Основой сюжета 
            послужила повесть Стивена Кинга «Рита Хейуорт и спасение из Шоушенка». Главные роли сыграли Тим Роббинс и Морган Фримен.`,
          like: false,
          important: false,
          id: 4,
        },
        {
          title: 'Крёстный отец ',
          genre: 'Драма / Криминал',
          src: `https://upload.wikimedia.org/wikipedia/ru/thumb/c/c4/Godfather_vhs.jpg/220px-Godfather_vhs.jpg`,
          alt: 'Крёстный отец ',
          descr: `«Крёстный оте́ц» (англ. The Godfather) — эпическая
           гангстерская драма режиссёра Фрэнсиса Форда Копполы. Экранизация
            одноимённого романа Марио Пьюзо, изданного в 1969 году. Слоган: «Предложение,
             от которого невозможно отказаться». Главные роли Вито и Майкла Корлеоне исполняют
              Марлон Брандо и Аль Пачино соответственно. Во второстепенных ролях снялись Джеймс
               Каан и Роберт Дюваль. Считается величайшим гангстерским фильмом по мнению Американского
                института киноискусства и одним из лучших фильмов в истории кинематографа[3]. Стабильно входит
                 в первую пятёрку 250 лучших фильмов по версии веб-сайта IMDb.`,
          like: false,
          important: false,
          id: 5,
        },
        {
          title: 'Бойцовский клуб',
          genre: 'Триллер / Драма',
          src: `https://upload.wikimedia.org/wikipedia/ru/8/8a/Fight_club.jpg`,
          alt: 'Бойцовский клуб',
          descr: `«Бойцо́вский клуб» (англ. Fight Club) — американский
           кинофильм 1999 года режиссёра Дэвида Финчера по мотивам
            одноимённого романа Чака Паланика, вышедшего тремя годами ранее.
             Главные роли исполняют Эдвард Нортон, Брэд Питт и Хелена Бонэм Картер.
              Нортон исполняет роль безымянного рассказчика — обезличенного обывателя,
               который недоволен своей жизнью в постиндустриальном потребительском обществе
                «белых воротничков». Он создаёт подпольную организацию «Бойцовский клуб» вместе
                 с Тайлером Дёрденом — продавцом мыла, роль которого исполнил Брэд Питт.`,
          like: false,
          important: false,
          id: 6,
        },
        {
          title: 'Криминальное чтиво',
          genre: 'Криминал / Драма',
          src: `https://upload.wikimedia.org/wikipedia/ru/thumb/9/93/Pulp_Fiction.jpg/211px-Pulp_Fiction.jpg`,
          alt: 'Криминальное чтиво',
          descr: `«Кримина́льное чти́во» (англ. Pulp Fiction) — кинофильм режиссёра Квентина Тарантино[2]. Сюжет
           фильма нелинеен, как и почти во всех остальных работах Тарантино. Этот приём стал чрезвычайно популярен,
            породив множество подражаний во второй половине 1990-х[3]. В фильме рассказывается несколько историй,
             в которых показаны ограбление кафе, философские дискуссии двух гангстеров, спасение девушки от передозировки
              героином и боксёр, которого задели за живое. Название является отсылкой к популярным в середине
               XX века в США pulp-журналам. Именно в стиле таких журналов были оформлены афиши, а позднее саундтрек
               , видеокассеты и DVD с фильмом.`,
          like: false,
          important: false,
          id: 7,
        },
        {
          title: 'Интерстеллар',
          genre: 'Фантастика',
          src: `https://upload.wikimedia.org/wikipedia/ru/thumb/c/c3/Interstellar_2014.jpg/215px-Interstellar_2014.jpg`,
          alt: 'Интерстеллар',
          descr: `«Интерстéллар» (англ. Interstellar [ˌɪntəˈstelə]), «Межзвёздный»
           — научно-фантастический фильм, снятый Кристофером Ноланом по сценарию,
            написанному в соавторстве с Джонатаном Ноланом. Фильм повествует о путешествиях
             группы исследователей, которые используют недавно обнаруженный пространственно-временной
              тоннель, чтобы обойти ограничения полёта человека в космосе и покорить огромные расстояния на межзвёздном корабле.
               Сценаристом проекта выступил брат Кристофера — Джонатан Нолан, который работал над сценариями к двум фильмам трилогии
                «Бэтмен», а также картинам «Помни» и «Престиж». Сценарий основан на научных работах Кипа Торна.`,
          like: false,
          important: false,
          id: 8,
        },
      ],
      filter: 'all',
      search: '',
    };
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLike = this.onToggleLike.bind(this);
    this.filterFilms = this.filterFilms.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.changeSearch = this.changeSearch.bind(this);
    this.searchResults = this.searchResults.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.maxId = this.state.films.length + 1;
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

  changeFilter(filter) {
    this.setState({
      filter,
    });
  }

  changeSearch(search) {
    this.setState({
      search,
    });
  }

  filterFilms(filter, items) {
    if (filter === 'all') {
      return items;
    } else {
      if (filter === 'like') {
        const newArr = items.filter((item) => {
          return item.like;
        });
        return newArr;
      } else {
        const newArr = items.filter((item) => {
          return item.important;
        });
        return newArr;
      }
    }
  }

  searchResults(search, items) {
    if (search === '') {
      return items;
    }
    const newArr = items.filter((item) => {
      return item.title.indexOf(search) >= 0;
    });
    return newArr;
  }

  addNewItem(title, genre, src, descr) {
    const newItem = {
      title,
      genre,
      src,
      alt: title,
      descr,
      id: this.maxId,
    };
    this.maxId++;
    this.setState(({ films }) => {
      const newArr = [...films, newItem];
      return {
        films: newArr,
      };
    });
  }

  render() {
    const { films, filter, search } = this.state;
    const filmsNumber = films.length,
      likesNumber = films.filter((item) => item.like).length,
      importantNumber = films.filter((item) => item.important).length;
    const visibleFilms = this.filterFilms(filter, this.searchResults(search, films));

    return (
      <div className="app">
        <AppHeader films={filmsNumber} likes={likesNumber} important={importantNumber} />
        <div className="search-panel">
          <SearchPanel onChange={this.changeSearch} />
          <FilmFilter onFilter={this.changeFilter} />
        </div>
        <FilmList
          films={visibleFilms}
          onImportant={this.onToggleImportant}
          onLike={this.onToggleLike}
        />
        <FilmAddForm onAdd={this.addNewItem} />
      </div>
    );
  }
}
