import React from 'react';
import { Link } from 'react-router-dom'

import SurveyList from './surveys/SurveyList'


class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.innerHTML
    });
    console.log(this.state.value);
  }

  render() {
    return (
      <div style={{ cursor: 'pointer'}}>
        <span onClick={this.handleChange}>Newest First</span> |
        <span onClick={this.handleChange}>Oldest First</span>
      </div>
    );
  }
}

const Dashboard = () => {
  return (
    <div>
      <FlavorForm />
      <SurveyList />
      <div className="fixed-action-btn">
        <Link className="btn-floating btn-large red" to="/surveys/new" >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard
