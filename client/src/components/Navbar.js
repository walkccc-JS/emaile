import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import * as actions from '../actions';
import Emaile from '../img/emaile.png';

class Navbar extends Component {
  componentDidMount() {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    );

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }

  renderButton() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a href="/auth/google" className="button is-primary">
            <strong>Login with Google</strong>
          </a>
        );
      default:
        return (
          <a href="/api/logout" className="button is-primary">
            <strong>Logout</strong>
          </a>
        );
    }
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        return (
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="#" className="navbar-link">
              My credits
            </Link>
            <div className="navbar-dropdown">
              <Payments />
              <Link to="#" className="navbar-item" onClick={this.props.addFree}>
                Add 5 free credits!
              </Link>
              <div to="#" className="navbar-item">
                Credits: <strong>{this.props.auth.credits}</strong>
              </div>
              <hr className="navbar-divider" />
              <Link to="#" className="navbar-item has-text-danger" onClick={this.props.resetAmount}>
                Reset credits
              </Link>
            </div>
          </div>
        );
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to={this.props.auth ? '/surveys' : '/'} className="navbar-item">
            <img src={Emaile} alt="Emaile" width="28" height="28" style={{ marginRight: 5 }} />
            <span>
              <strong>Emaile</strong>
            </span>
          </Link>

          <Link
            to="#"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </Link>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <div className="navbar-start">{this.renderContent()}</div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">{this.renderButton()}</div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(Navbar);
