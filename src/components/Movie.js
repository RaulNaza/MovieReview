import React from "react";
import ReviewList from "./ReviewList";


export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.movieListArray = props.listOfMovies;
    }

    render() {

        return (
            <div
                className="movie-grid"
            >
                {this.movieListArray.map((movie, index) => (
                    <div
                        key={index}
                        className="outer-card-container"
                    >
                        <div
                            className="inner-card-container"
                        >
                            <img
                                className="card-image"
                                src={movie.Poster}
                                alt={`Poster of the ${movie.Title} Movie`} />
                            <div className="card-body">
                                <span
                                    className="title">
                                    {movie.Title}
                                </span>
                                <span
                                    className="subtitle">
                                    Directed by {movie.Director} | Released in {movie.Year} | Genre: {movie.Genre} | IMDb Rating: {movie.imdbRating}
                                </span>
                                <span
                                    className="description">
                                    {movie.Plot}
                                </span>
                            </div>
                        </div>
                        <div className="review-list">
                            <ReviewList index={index} />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
