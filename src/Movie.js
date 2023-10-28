import React from "react";
import ReviewList from "./ReviewList";


export default class Movie extends React.Component {
    constructor (props){
        super(props);
        this.movieListArray = props.listOfMovies;
    }

    render () {

        return (
                <div className="container-fluid row row-cols-2" id="moviesDiv">
                    {this.movieListArray.map((movie, index) => (
                        <div key={index} className="col">
                            <div className="card mb-5 mt-5" style={{ margin: "auto", width: "40rem", height: "38rem"}}>
                                <img className="card-img-top mt-2" style={{ width: "35%", margin: "auto" }} src={movie.Poster} alt={`Poster of the ${movie.Title} Movie`} />
                                <div className="card-body">
                                    <h4>{movie.Title}</h4>
                                    <h5>Directed by {movie.Director}. Released in {movie.Year}.<br></br>
                                        Genre: {movie.Genre} | IMDb Rating: {movie.imdbRating}</h5>
                                    <p className="text-start text-wrap">{movie.Plot}</p>
                                </div>
                            </div>
                            <div id="reviewListComponent">
                                <ReviewList index={index} />
                            </div>
                        </div>
                    ))}
                </div>
        );
    }
}
