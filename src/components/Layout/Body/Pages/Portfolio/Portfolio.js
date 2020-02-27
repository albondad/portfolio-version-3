import React, { Component } from 'react';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';

import transitionBlackToWhite from '../../../../../imgs/img-transitionBlackToWhite.png';

class Portfolio extends Component {
  render() {
    return (
      <>
        {/* SKILLS */}
        <div className="bg-albondadBlack pt-128px pb-128px">
          <div className="body-contentPadding skills-container">
            <div className="heading-1 foColor-albondadWhite foWeight-lighter pl-8px mb-16px skills-title animationName-fadeIn animationDuration-1s">SKILLS</div>
            <div>
              <Skills />
            </div>
          </div>
        </div>

        {/* TRANSITION IMAGE */}
        <img className="w-100" src={transitionBlackToWhite} alt="test"/>

        {/* PROJECTS */}
        <div className="bg-albondadGray pt-128px pb-128px">
          <div className="body-contentPadding">
            <div className="heading-1 foColor-albondadBlack foWeight-lighter pl-8px mb-16px projects-title animationName-fadeIn animationDuration-1s">PROJECTS</div>
            <Projects
              functions={this.props.functions}
            />
          </div>
        </div>
      </>
    )
  }
}

export default Portfolio;
