import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'

import formFields from './formFields'

const SurveyFormReview = ({ onCancel, formValues }) => {

  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <div style={{ margin: '20px 0' }}>
        <button
          className="yellow darken-3 white-text btn-flat"
          onClick={onCancel}
          style={{ padding: '0 1rem' }}
        >
          <i className="material-icons left">navigate_before</i>
          Back
        </button>
        <button className="green btn-flat right white-text">
          Send Survey
          <i className="material-icons right">email</i>
        </button>
      </div>
    </div>
  )
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview)
