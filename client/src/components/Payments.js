import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="TEST ONLY!"
        amount={499}
        token={token => this.props.handleToken(token)}
        stripeKey="pk_test_3kvuoJluTJN33ohWyfBQclKJ"
      >
        <button className="button is-success">Add credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
