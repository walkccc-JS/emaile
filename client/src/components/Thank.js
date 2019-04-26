import React from 'react';

const Thank = () => {
  return (
    <section className="section">
      <div
        className="container"
        style={{ maxWidth: 1024, textAlign: 'center' }}
      >
        <div className="notification is-info">
          <h1 style={{ fontSize: '3rem' }}>
            <strong>Thank you</strong>
          </h1>
          Thanks for voting! <i className="fas fa-smile" />
        </div>
      </div>
    </section>
  );
};

export default Thank;
