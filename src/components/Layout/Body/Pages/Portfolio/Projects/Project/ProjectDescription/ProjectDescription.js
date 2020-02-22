import React, { Component } from 'react';

let imageSourceContext = require.context('../../../../../../../../imgs', true);

class ProjectDescription extends Component {
  state = {
    currentImageIndex: 0,
    images: this.props.projectData.slideshowImages
  }

  nextImage = () => {
    let newCurrentImageIndex = this.state.currentImageIndex + 1;
    if (newCurrentImageIndex > this.state.images.length - 1) {
      newCurrentImageIndex = 0;
    }
    this.setState({currentImageIndex: newCurrentImageIndex});
  }
  backImage = () => {
    let newCurrentImageIndex = this.state.currentImageIndex - 1;
    if (newCurrentImageIndex < 0) {
      newCurrentImageIndex = this.state.images.length - 1;
    }
    this.setState({currentImageIndex: newCurrentImageIndex});
  }

  render() {
    let thumbnailSource = imageSourceContext('./' + this.state.images[this.state.currentImageIndex])
    return (
      <>
        <div className="box-shadow bg-albondadWhite">

          {/* Header */}
          <div className="projectDescription-headerContainer">
            <div className="projectDescription-headerTitle">{this.props.projectData.title}</div>
            <div className="projectDescription-headerViewOn">View On GitHub</div>
          </div>

          {/* Slideshow Images */}
          <div>
            <img className="w-100" src={thumbnailSource} />
          </div>

          {/* Slideshow Buttons */}
          <div className="pt-16px">
            {/* back button */}
            <div onClick={this.backImage} className="w-50 pl-16px d-inline-block foSize-12px text-left foWeight-bold"><i className="fas fa-arrow-left fa-fw"></i> Back</div>
            {/* next button */}
            <div onClick={this.nextImage} className="w-50 pr-16px d-inline-block foSize-12px text-right foWeight-bold">Next <i className="fas fa-arrow-right fa-fw"></i></div>
          </div>

          {/* Description */}
          <div className="projectDescription-descriptionContainer text-right">
            <div className="projectDescription-descriptionContent text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="projectDescription-descriptionTools text-left">{this.props.projectData.tools}</div>
            <button onClick={this.props.functions.hideModal}>Back</button>
          </div>

        </div>
      </>
    )
  }
}

export default ProjectDescription;
