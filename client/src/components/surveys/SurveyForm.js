// Survey Form shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return formFields.map(({ label, name, icon, placeholder }) => {
      return (
        <Field
          component={SurveyField}
          type="text"
          label={label}
          name={name}
          icon={icon}
          placeholder={placeholder}
          key={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <div className="title">Create a new survey</div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit">
                <p style={{ marginRight: '5px' }}>Next</p>
                <i className="fas fa-arrow-circle-right" />
              </button>
            </div>
            <div className="control">
              <Link to="/surveys" className="button is-text">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `No ${name}!`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
