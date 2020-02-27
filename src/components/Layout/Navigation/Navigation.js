import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <section>
          <div className="navbar navbar-expand-lg pt-16px pr-10per pl-10per pb-16px animationName-fadeIn animationDuration-1s">
            {/* logo */}
            <Link className="navbar-brand foSize-32px foWeight-bold" to="/">AL BONDAD</Link>
            <div className="navbar-toggler" type="button" data-toggle="collapse" data-target="#links" aria-controls="links" aria-expanded="false" aria-label="Toggle navigation">
              <div><i className="fas fa-bars fa-fw foSize-32px link"></i></div>
            </div>

            {/* links */}
            <div className="collapse navbar-collapse" id="links">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active pr-32px foSize-32px foWeight-lighter">
                  <Link to="/">PROJECTS</Link>
                </li>
                <li className="nav-item active foSize-32px foWeight-lighter">
                  <Link to="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>

          </div>
      </section>
    )
  }
}

export default Navigation;
