import React from "react";
import ReviewForm from "./ReviewForm";

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: []

        };
        this.handleCallBack = this.handleCallBack.bind(this);
    }

    handleCallBack = (childBtn, username) => {
        if (childBtn === 'clicked') {
            const text = document.getElementById(`review-${this.props.movieIndex}`).value

            if (text.length !== 0) {
                const newReview = {
                    id: `review-${this.props.movieIndex}`,
                    value: text,
                    username: username,
                    stars: this.props.StarRating
                };

                this.setState((prevState) => ({
                    review: [...prevState.review, newReview]

                }));
                document.getElementById(`review-${this.props.movieIndex}`).value = ""
            } else {
                document.getElementById(`review-${this.props.movieIndex}`).value = "Please provide a comment before submitting."
            }
        }
    }

    render() {
        return (
            <div className="review-container">
                <div className="review-top">
                    <p>
                        Please leave a review below:
                    </p>
                    <textarea
                        id={`review-${this.props.movieIndex}`}
                        name="movie-review"
                        rows={4}
                        cols={50}
                    >

                    </textarea>
                    <ReviewForm
                        id={`review-${this.props.movieIndex}`}
                        callback={this.handleCallBack} />
                </div>
                <div
                    className="review-bottom"
                    id="reviews-section"
                >
                    <p>
                        Reviews:
                    </p>
                    {this.state.review.map((element, index) => (
                        <div
                            key={`${index}-div`}
                            className="review-user-line"
                        >
                            <p
                                key={`${index}-username`}
                            >
                                User: {element.username}
                                {"  |  "}
                                Rating: {element.stars}
                                <i
                                    className="bi-star-fill"
                                    style={{ color: "#fcd34d" }}
                                >
                                </i>
                            </p>
                            <p
                                key={`${index}-comment`}
                                className="comment"
                            >
                                {element.value[0].toUpperCase() + element.value.slice(1)}
                            </p>
                        </div>
                    )
                    )}
                </div>
            </div>
        );
    }
}
