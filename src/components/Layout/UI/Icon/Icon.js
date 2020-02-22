import React, { Component } from 'react';

class Icon extends Component {
  getIconText = () => {
    let result = null;
    if (this.props.iconText) {
      result = (
        <div className="foSize-12px text-center icon-text">
          {this.props.iconText}
        </div>
      )
    return result;
    }
  }

  render() {
    return (
      <div className="w-64px d-inline-block ml-8px mr-8px icon-container">
        <div className="h-64px d-flex justify-content-center align-items-center icon-logo box-shadow">
          {this.props.logo}
        </div>
        {this.getIconText()}
      </div>
    )
  }
}

export default Icon;
