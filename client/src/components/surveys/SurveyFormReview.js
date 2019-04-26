// SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ label, name, icon }) => {
    return (
      <div className="field" key={name}>
        <label className="label">{label}</label>
        <div className="control has-icons-left">
          <input
            disabled
            type="text"
            className="input"
            placeholder={formValues[name]}
          />
          <span className="icon is-small is-left">
            <i className={icon} />
          </span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="title">Please confirm your entries</div>
      {reviewFields}
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" onClick={onCancel}>
            <p style={{ marginRight: '5px' }}>Back</p>
            <i className="fas fa-arrow-circle-left" />
          </button>
        </div>
        <div className="control">
          <button
            className="button is-success"
            onClick={() => submitSurvey(formValues, history)}
          >
            <p style={{ marginRight: '5px' }}>Send surveys</p>
            <i className="fas fa-arrow-circle-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { formValues: state.form.surveyForm.values };
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
