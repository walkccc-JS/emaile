import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  handleDeleteSurvey(id) {
    this.props.deleteSurvey(id);
    this.props.history.push('/surveys');
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card" key={survey._id} style={{ marginBottom: '1rem' }}>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{survey.title}</p>
                <p className="subtitle is-6">{survey.subject}</p>
              </div>
            </div>

            <div className="content">
              {survey.body}
              <br />
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </div>
          </div>
          <footer className="card-footer">
            <Link to="#" className="card-footer-item has-text-info">
              <i className="fas fa-thumbs-up" style={{ marginRight: '1rem' }} />
              {survey.yes}
            </Link>
            <Link to="#" className="card-footer-item has-text-danger">
              <i className="fas fa-thumbs-down" style={{ marginRight: '1rem' }} />
              {survey.no}
            </Link>
            <Link
              to="#"
              className="card-footer-item has-text-warning"
              onClick={() => {
                this.handleDeleteSurvey(survey._id);
              }}
            >
              <i className="fas fa-trash" />
            </Link>
          </footer>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(
  mapStateToProps,
  { fetchSurveys, deleteSurvey }
)(SurveyList);
