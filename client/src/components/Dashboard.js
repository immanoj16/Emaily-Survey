import React from 'react';
import { Link } from 'react-router-dom'

import SurveyList from './surveys/SurveyList'


const FlavorForm = ({ handleNew, handleOld }) => {
  return (
    <div style={{ cursor: 'pointer' }}>
      <span onClick={handleNew}>Newest First</span> | <span onClick={handleOld}>Oldest First</span>
    </div>
  );
};

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 'new'
    };

    this.handleNew = this.handleNew.bind(this);
    this.handleOld = this.handleOld.bind(this);
  }

  handleNew(event) {
    this.setState({
      value: 'new'
    });
  }

  handleOld(event) {
    this.setState({
      value: 'old'
    });
  }

  render() {
    console.log(this.state.value);
    return (
      <div>
        <FlavorForm handleNew={this.handleNew} handleOld={this.handleOld} />
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
