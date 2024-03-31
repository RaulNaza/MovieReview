import React from "react";

export default class ReviewForm extends React.Component {

    submitHandler = (event) => {
        event.preventDefault();
        const userName = document.getElementById('username').value
        if (userName !== "") {
            this.props.callback('clicked', userName)
        } else {
            this.props.callback('clicked', 'Anonymous')
        }
        document.getElementById('username').value = ""
    }

    render() {
        return (
            <div
                className="review-form"
                id={this.props.id}
            >
                <form>
                    <div className="form-data">
                        <label
                            className="form-label"
                            htmlFor="username">
                            Username:
                        </label>
                        <input
                            className="form-control"
                            id="username"
                            placeholder="Please input a username"
                        >
                        </input>
                    </div>

                    <button
                        className="form-button"
                        type="button"
                        onClick={this.submitHandler}
                    >
                        Submit
                    </button>

                </form>
            </div>
        );
    }
}
