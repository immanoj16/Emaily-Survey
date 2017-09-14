import React from 'react';
import { Link } from 'react-router-dom'

import SurveyList from './surveys/SurveyList'


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
    const { value } = this.state;

    return (
      <div>
        <div style={{ cursor: 'pointer' }}>
          <span onClick={this.handleNew}>Newest First</span> |&nbsp;
          <span onClick={this.handleOld}>Oldest First</span>
        </div>
        <SurveyList list={value} />
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
