import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchSurveys } from "../../actions";


class SurveyList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  componentDidMount() {
    this.props.fetchSurveys();

    this.setState({
      value: this.props.list
    })
  }

  surveyList(survey) {
    return (
      <div className="card blue-grey darken-1" key={survey._id}>
        <div className="card-content white-text">
          <span className="card-title">{survey.title}</span>
          <p>
            {survey.body}
          </p>
          <p className="right">
            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
          </p>
        </div>
        <div className="card-action">
          <a>Yes: {survey.yes}</a>
          <a>No: {survey.no}</a>
          <button className="right red btn-flat white-text">Delete</button>
        </div>
      </div>
    );
  }

  renderSurveys() {
    return (
      this.state.value === 'new'
        ? this.props.surveys.reverse().map(survey => this.surveyList(survey))
        :
        this.props.surveys.map(survey => this.surveyList(survey))
    )
  }

  render () {
    return (
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList)
