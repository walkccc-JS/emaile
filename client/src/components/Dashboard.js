import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title">Dashboard</p>
        <p className="subtitle">A place to create new surveys...</p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span>
            <Link to="/surveys/new">Create a new survey!</Link>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
