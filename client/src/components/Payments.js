import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <Link to="#" className="navbar-item">
        <StripeCheckout
          name="Emaily"
          description="TEST ONLY!"
          amount={500}
          token={token => this.props.handleToken(token)}
          stripeKey="pk_test_3kvuoJluTJN33ohWyfBQclKJ"
        >
          Add credits by card
        </StripeCheckout>
      </Link>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
