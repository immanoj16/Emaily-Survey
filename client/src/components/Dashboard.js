import React from 'react';
import { Link } from 'react-router-dom'

import SurveyList from './surveys/SurveyList'


const FlavorForm = ({ handleChange }) => {
  return (
    <div style={{ cursor: 'pointer' }}>
      <span onClick={handleChange}>Newest First</span> | <span onClick={handleChange}>Oldest First</span>
    </div>
  );
};

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 'Newest First'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.innerHTML);
    this.setState({
      value: event.target.innerHTML
    });
    console.log(this.state.value);
  }

  render() {
    return (
      <div>
        <FlavorForm handleChange={this.handleChange} />
        <SurveyList list={this.state.value} />
        <div className="fixed-action-btn">
          <Link className="btn-floating btn-large red" to="/surveys/new" >
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard
