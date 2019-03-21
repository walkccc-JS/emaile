import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 1024 }}>
        <SurveyList />
        <div className="notification is-link" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem' }}>
            <strong>Dashboard</strong>
          </h1>
          <p className="title" />
          <p className="subtitle">A place to create new surveys...</p>
          <Link to="/surveys/new">Create a new survey!</Link>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
