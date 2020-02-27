import React, { Component } from 'react';
import Icon from '../../../UI/Icon/Icon';
import SocialMedias from './SocialMedias/SocialMedias';

import transitionBlackToWhite from '../../../../../imgs/img-transitionBlackToWhite.png';

class Portfolio extends Component {
  sendEmail = (e) => {
    e.preventDefault();
    window.location.href="/"
  }
  render() {
    return (
      <>
        {/* CONTACT FORM */}
        <div className="bg-albondadBlack pt-128px pb-128px">
          <div className="body-contentPadding">
            <div className="heading-1 foColor-albondadWhite foWeight-lighter pl-8px mb-16px text-center animationName-fadeIn animationDuration-1s">Leave a Message</div>
            <div className="text-right">
              <form className="contactForm contactForm-container m-auto animationName-slideRight animationDuration-1s">
                <input className="box-shadow" placeholder="email"/>
                <input className="box-shadow" placeholder="subject"/>
                <textarea className="box-shadow" placeholder="message"/>
                <button onClick={this.sendEmail} className="foSize-16px foWeight-bold box-shadow hover-scale">Send</button>
              </form>
            </div>
          </div>
        </div>

        {/* TRANSITION IMAGE */}
        <img className="w-100" src={transitionBlackToWhite} alt="test"/>

        {/* SOCIAL MEDIA LINKS */}
        <div className="bg-albondadGray pt-128px pb-128px">
          <div className="body-contentPadding">
            <div className="heading-1 foColor-albondadBlack foWeight-lighter pl-8px mb-16px text-center animationName-fadeIn animationDuration-1s">Social Media</div>
            <div>
              <SocialMedias />
            <div>
          </div>
        </div>
      </div>
    </div>
  </>
    )
  }
}

export default Portfolio;
