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

    const renderStyle = {
      color: '#39a503',
      textDecoration: 'underline'
    };

    return (
      <div>
        <div style={{ cursor: 'pointer' }}>
          <span onClick={this.handleNew} style={value === 'new' ? renderStyle : null}>Newest First</span> |&nbsp;
          <span onClick={this.handleOld} style={value === 'new' ? null : renderStyle}>Oldest First</span>
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
