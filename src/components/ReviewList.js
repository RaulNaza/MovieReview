import React from "react";
import Review from "./Review";
import Stars from "./Stars";

export default class ReviewList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            StarRating: 0
        };
        this.handlecallback = this.handlecallback.bind(this);
    }

    handlecallback = (starRating) => {
        this.setState(() => ({
            StarRating: starRating
        }));
    }

    render () {
        return (
            <div className="review-list-inner-container">
                    <Stars movieIndex={this.props.index} callback={this.handlecallback}/>
                    <Review movieIndex={this.props.index} StarRating={this.state.StarRating}/>
            </div>
        );
    }
}
