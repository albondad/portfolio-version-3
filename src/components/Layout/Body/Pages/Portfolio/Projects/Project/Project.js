import React, { Component } from 'react';
import placeholder from '../../../../../../../imgs/img-placeholder01.png';
import ProjectDescription from './ProjectDescription/ProjectDescription';

class Project extends Component {
  render() {
    return (
      <div className="col-12 col-md-4 col-lg-3 m-0 p-8px hover-scale">
        <div onClick={() => {this.props.projectOnClick(
          <ProjectDescription projectData={this.props.projectData} functions={this.props.functions}/>
        )}}>
          <div className="bg-albondadWhite box-shadow pt-8px pr-8px pb-8px pl-8px project-container">
            <div className="foWeight-bold"><img className="w-100 project-thumbnail" src={this.props.thumbnailSource} /></div>
            <div className="pt-8px foSize-16px foWeight-bold">{this.props.title}</div>
            {/*<div className="foSize-16px"><a href={this.props.viewOnSource} target="_blank">{this.props.viewOnText ? "View on " + this.props.viewOnText : "\xa0"}</a></div>*/}
          </div>
        </div>
      </div>
    )
  }
}

export default Project;
