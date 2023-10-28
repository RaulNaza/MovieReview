import './App.css';
// import $ from 'jquery'
import MovieList from './MovieList';


function App() {
  return (
    <div className="App">
      <h1 className="text-center">IMDb Top 10 Movies of All Time:</h1>
      <MovieList />
      <footer>
          <div class="container border-top border-dark-subtle ">
              <div class="row mt-2">
                  <img src="images/Professional Photo.jpeg" alt='portrait of Raul Nazario' class="col-2 rounded-circle"></img>
                  <div class="col-10 rounded-pill fs-4 fw-medium fst-italic text-start mt-5">Created by: <br></br> Raul Nazario Gonzales</div>
              </div>
          </div>
      </footer>
    </div>
  );
}

export default App;
