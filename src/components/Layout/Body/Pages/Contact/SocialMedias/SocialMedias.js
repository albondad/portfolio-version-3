import React, { Component } from 'react';
import Icon from '../../../../UI/Icon/Icon';
import SocialMedia from './SocialMedia/SocialMedia';

import resume from '../../../../../../resume.pdf'
class SocialMedias extends Component {
  render() {
    return (
      <>
        <div className="text-center d-flex align-items-center justify-content-center">
          <div className="d-inline-block">

            {/* Resume */}
            <SocialMedia
              link={resume}
              logo={<i className="fas fa-file-alt fa-fw foSize-32px"></i>}
              text="Resume"
            />

            {/* LinkedIn */}
            <SocialMedia
              link="https://www.linkedin.com/in/albondad/"
              logo={<i className="fab fa-linkedin fa-fw foSize-32px"></i>}
              text="LinkedIn "
            />

            {/* GitHub */}
            <SocialMedia
              link="https://github.com/albondad/"
              logo={<i className="fab fa-github fa-fw foSize-32px"></i>}
              text="GitHub "
            />

            {/* Upwork */}
            <SocialMedia
              link="https://www.upwork.com/o/profiles/users/~014416684418a82ffe/#specializedPortfolios"
              logo={<span className="foSize-32px">Up</span>}
              text="Upwork"
            />

            {/* Dribble */}
            <SocialMedia
              link="https://dribbble.com/albondad"
              logo={<i className="fas fa-basketball-ball fa-fw foSize-32px"></i>}
              text="Dribble"
            />

          </div>
        </div>
      </>
    )
  }
}

export default SocialMedias;
