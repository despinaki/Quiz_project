import React, { Component } from 'react';
import { connect } from "react-redux"
import Questions from "../components/Questions"
import { withRouter } from 'react-router-dom';

class Quiz extends Component {
    renderQuestions = (results) => {
        return results.map((item, index) => (
            <div key={index}>
                <Questions question={item} />
            </div>
        ))
    }

    goToResults =()=>{
        this.props.history.push("./results")
    }

    render(){
        return (
            <div>
                {this.props.results ? this.renderQuestions(this.props.results) : "there are not results"}
                <input type="submit" onClick= {this.goToResults}/>
            </div>
        )
    }
}

const mSTP = state => ({
        results: state.quizQuestions.results
})

export default withRouter(connect(mSTP)(Quiz));