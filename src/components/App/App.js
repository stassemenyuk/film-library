import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import FilmFilter from '../FilmFilter/FilmFilter';
import FilmList from '../FilmList/FilmList';
import FilmAddForm from '../FilmAddForm/FilmAddForm';

import './App.css';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel">
        <SearchPanel />
        <FilmFilter />
      </div>
      <FilmList />
      <FilmAddForm />
    </div>
  );
}

export default App;
