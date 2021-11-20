import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { signInUser, signOutUser } from '../api/auth';

export default function Navigation({ user }) {
  console.warn(user);
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="nav-link active" to="/">
              Home
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/projects">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/tech">
                    Technologies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/contact">
                    Contact
                  </Link>
                </li>
                {user?.isAdmin && (
                  <li className="nav-item">
                    {' '}
                    <Link className="nav-link active" to="/create">
                      Add new project
                    </Link>{' '}
                  </li>
                )}
                {user ? (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={signOutUser}
                  >
                    Sign Out
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={signInUser}
                  >
                    Sign In
                  </button>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

Navigation.propTypes = {
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
  }),
};

Navigation.defaultProps = {
  user: {},
};
