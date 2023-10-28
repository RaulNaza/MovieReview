import React from "react";

export default class ReviewForm extends React.Component {

    submitHandler = (event) => {
        event.preventDefault();
        const userName = document.getElementById('username').value
        if(userName !== ""){
            this.props.callback('clicked', userName)
        }else{
            this.props.callback('clicked', 'Anonymous')
        }
        document.getElementById('username').value = ""
    }

    render () {
        return (
            <div className="form" id={this.props.id} style={{margin: 'auto', width: "70%", padding: "1rem"}}>
                <form>
                    <div className="row mt-2">
                        <label className="form-label col" htmlFor="username">Username: </label>
                        <input className="form-control col me-5" id="username" placeholder="Please input a username"></input>
                    </div>
                    <div>
                        <button className="btn btn-primary me-5 mt-2 mb-2" type="button" onClick={this.submitHandler}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
