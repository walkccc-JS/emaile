// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
// import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <section className="section">
        <div className="container grid" style={{ maxWidth: 1024 }}>
          {this.renderContent()}
        </div>
      </section>
    );
  }
}

export default SurveyNew;
// export default reduxForm({
//   form: 'surveyForm'
// })(SurveyNew);
