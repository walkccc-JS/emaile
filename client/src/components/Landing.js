import React from 'react';

const Landing = () => {
  return (
    <section className="section">
      <div
        className="container"
        style={{ maxWidth: 1024, textAlign: 'center' }}
      >
        <div className="notification is-primary">
          <h1 style={{ fontSize: '3rem' }}>
            <strong>Emaile?</strong>
          </h1>
          Collect feedback from your users <i className="fas fa-smile" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
