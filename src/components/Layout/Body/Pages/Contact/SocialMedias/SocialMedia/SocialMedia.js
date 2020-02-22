import React, { Component } from 'react';
import Icon from '../../../../../UI/Icon/Icon';

class SocialMedia extends Component {
  render() {
    return (
      <>
        <a href={this.props.link} target="_blank">
          <div className="text-center d-flex align-items-center justify-content-start pt-16px hover-scale socialMedia-container">
            <Icon
              logo={this.props.logo} />
            <span className="foColor-albondadBlack pl-32px foWeight-bold">{this.props.text}</span>
          </div>
        </a>
      </>
    )
  }
}

export default SocialMedia;
