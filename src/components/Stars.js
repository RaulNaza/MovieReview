import React from "react";

export default class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            StarsCounter: 0,
        }
    }

    handleClick = (id, className) => {
        const starNum = parseInt(id[id.length - 1])
        let i = 1;
        while (i <= (starNum)) {
            const iconElement = document.getElementById(`star-${this.props.movieIndex}-${i}`);
            if (className === "bi-star-fill") {
                //in this portion I am trying to make it so that the stars that follow it will clear out if you are "un-filling the star"
                let j = starNum;
                while (j <= 5) {
                    const remainingElements = document.getElementById(`star-${this.props.movieIndex}-${j}`)
                    remainingElements.classList.remove('bi-star-fill');
                    remainingElements.classList.add('bi-star');

                    this.setState(() => ({
                        StarsCounter: starNum - 1,
                    }), () => (
                        this.handleCallback()
                    ))

                    j++;
                }
                i++;
            } else if (className === "bi-star") {
                iconElement.classList.remove('bi-star');
                iconElement.classList.add('bi-star-fill');

                this.setState(() => ({
                    StarsCounter: starNum,
                }), () => (
                    this.handleCallback()
                ));

                i++;
            }

        }
    }

    handleCallback = () => {
        this.props.callback(this.state.StarsCounter)
    }

    render() {
        return (
            <div className="star-container">
                <p>How would you rate this movie?</p>
                <div
                    className="star-line"
                >
                    <div className="star">
                        <i
                            className="bi-star"
                            id={`star-${this.props.movieIndex}-1`}
                            onClick={(e) => this.handleClick(e.target.id, e.target.className)}>
                        </i>
                    </div>
                    <div className="star">
                        <i
                            className="bi-star"
                            id={`star-${this.props.movieIndex}-2`}
                            onClick={(e) => this.handleClick(e.target.id, e.target.className)}>
                        </i>
                    </div>
                    <div className="star">
                        <i
                            className="bi-star"
                            id={`star-${this.props.movieIndex}-3`}
                            onClick={(e) => this.handleClick(e.target.id, e.target.className)}>
                        </i>
                    </div>
                    <div className="star">
                        <i
                            className="bi-star"
                            id={`star-${this.props.movieIndex}-4`}
                            onClick={(e) => this.handleClick(e.target.id, e.target.className)}>
                        </i>
                    </div>
                    <div className="star">
                        <i
                            className="bi-star"
                            id={`star-${this.props.movieIndex}-5`}
                            onClick={(e) => this.handleClick(e.target.id, e.target.className)}>
                        </i>
                    </div>
                </div>
            </div>
        );
    }
}



