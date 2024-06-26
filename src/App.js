import './App.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <h1 className="heading">IMDb Top 10 Movies of All Time:</h1>
      <MovieList />
      <footer>
        <div className="footer-container">
          <img
            src="https://avatars.githubusercontent.com/u/65374408?v=4"
            alt='portrait of Raul Nazario'
            className="footer-icon">
          </img>
          <div>Created by: Raul Nazario Gonzales</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
