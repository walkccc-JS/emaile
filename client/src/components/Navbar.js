import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import Emailyo from '../img/emailyo.png';

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

  renderContent() {
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
        return [
          <Payments key="1" />,
          <div
            key="3"
            className="button is-info is-disabled"
            style={{ marginLeft: '10px' }}
          >
            Credits: {this.props.auth.credits}
          </div>,
          <a key="2" href="/api/logout" className="button">
            Logout
          </a>
        ];
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to={this.props.auth ? '/surveys' : '/'} className="navbar-item">
            <img
              src={Emailyo}
              alt="Emailyo"
              width="28"
              height="28"
              style={{ marginRight: 5 }}
            />
            <span>
              <strong>Emailyo</strong>
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
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">{this.renderContent()}</div>
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

export default connect(mapStateToProps)(Navbar);
