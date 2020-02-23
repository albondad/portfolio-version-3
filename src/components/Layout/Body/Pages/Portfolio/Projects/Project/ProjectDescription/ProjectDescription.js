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
            <div className="projectDescription-headerViewOn">{
              this.props.projectData.viewOnText
              ? <a href={this.props.projectData.viewOnSource} target={"_blank"}>{"View On " + this.props.projectData.viewOnText}</a>
              : null
            }
            </div>
          </div>

          {/* Slideshow Images */}
          <div>
            <img className="w-100" src={thumbnailSource} />
          </div>

          {/* Slideshow Buttons */}
          <div className="pt-16px">
            {/* back button */}
            <div onClick={this.backImage} className="w-50 pl-16px d-inline-block foSize-12px text-left foWeight-bold"><span className="d-inline-block projectDescription-slideshowButton"><i className="fas fa-arrow-left fa-fw"></i> Back</span></div>
            {/* next button */}
            <div onClick={this.nextImage} className="w-50 pr-16px d-inline-block foSize-12px text-right foWeight-bold"><span className="d-inline-block projectDescription-slideshowButton">Next <i className="fas fa-arrow-right fa-fw"></i></span></div>
          </div>

          {/* Description */}
          <div className="projectDescription-descriptionContainer text-right">
            <div className="projectDescription-descriptionContent text-left">{this.props.projectData.description}</div>
            <div className="projectDescription-descriptionTools text-left">{this.props.projectData.tools}</div>
            <button onClick={this.props.functions.hideModal}>Back</button>
          </div>

        </div>
      </>
    )
  }
}

export default ProjectDescription;
