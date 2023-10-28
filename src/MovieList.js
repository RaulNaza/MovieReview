import React from 'react';
import $ from 'jquery'
import Movie from './Movie';

let movieList = [
  'The Shawshank Redemption', 
  'The Godfather',
  'The Dark Knight',
  'The Godfather Part II',
  '12 Angry Men',
  `Schindler's List`,
  'The Lord of the Rings: The Return of the King',
  'Pulp Fiction',
  'The Lord of the Rings: The Fellowship of the Ring',
  'The Good, the Bad and the Ugly',
  ]

const url = 'https://www.omdbapi.com/?apikey=30c8433&';

function get (name) {
    return new Promise((resolve) => {
        let movieName = name.toUpperCase().replaceAll(' ', "+")
        $.ajax({
            type: "GET",
            url: `${url}t=${movieName}`,
            success: (data) => {
                // let name = movieName;
                const holder = {
                        Title: data.Title,
                        Poster: data.Poster,
                        Rated : data.Rated,
                        Plot : data.Plot,
                        Director : data.Director,
                        Year : data.Year,
                        Genre : data.Genre,
                        imdbRating : data.imdbRating,
                };
                resolve(holder);
            }
        })

    })
}

export default class MovieList extends React.Component {
    constructor () {
        super();
        this.state = {
            movies: [],
            loading: true,
        }
        
    }

    componentDidMount() {
        const promises = movieList.map((element) => get(element));

        Promise.all(promises)
            .then((data) => {
                this.setState({ movies: data, loading: false });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }
    
    render () {
        const {movies,loading} = this.state;

        return ( 
                <div className='container-fluid text-center m-3 fs-4'>
                        { !loading ? (
                            <Movie listOfMovies={movies}/>
                        ):(
                            <div>Loading...</div>
                        )
                        }
                </div>
        );
    }
}