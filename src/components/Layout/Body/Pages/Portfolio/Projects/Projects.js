import React, { Component } from 'react';
import Project from './Project/Project';

import placeholder from '../../../../../../imgs/img-placeholder01.png';
import projectstData from './assets/ProjectsData';

let imageSourceContext = require.context('../../../../../../imgs', true);

class Projects extends Component {

  getProjects = () => {
    let projectIdBaseString = "projectId";
    let id = 0;
    let projects = projectstData.map(project => {
      //loading images dynamically
      let thumbnailSource = imageSourceContext('./' + project.thumbnailSource)
      id ++;
      return (
        <Project
          key={projectIdBaseString + id}
          projectData = {project}
          projectOnClick={this.props.functions.showModal}
          projectSource={project.projectSource}
          title={project.title}
          viewOnText={project.viewOnText}
          viewOnSource={project.viewOnSource}
          thumbnailSource={thumbnailSource}
          functions={this.props.functions}
        />
      )
    });
    return projects;
  }

  render() {
    return (
      <div className="row m-0 pr-8px pl-8px">
        {this.getProjects()}
      </div>
    )
  }
}

export default Projects;
