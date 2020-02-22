import React, { Component } from 'react';
import Icon from '../../../../UI/Icon/Icon';

class Skills extends Component {
  render() {
    return (
      <>
        {/* React */}
        <Icon
          logo={<i className="fab fa-react fa-fw foSize-32px"></i>}
          iconText="React"
        />
        {/* jQuery */}
        <Icon
          logo={<span className="foSize-16px foWeight-bold fa-jQuery">jQuery</span>}
          iconText="jQuery"
        />
        {/* Bootstrap */}
        <Icon
          logo={<i className="fab fa-bootstrap fa-fw foSize-32px"></i>}
          iconText="Bootstrap"
        />
        {/* Sass */}
        <Icon
          logo={<i className="fab fa-sass fa-fw foSize-32px"></i>}
          iconText="Sass"
        />
        {/* Git */}
        <Icon
          logo={<i className="fab fa-git-alt fa-fw foSize-32px"></i>}
          iconText="Git"
        />
        {/* Javascript */}
        <Icon
          logo={<i className="fab fa-js fa-fw foSize-32px"></i>}
          iconText="Javascript"
        />
        {/* HTML */}
        <Icon
          logo={<i className="fab fa-html5 fa-fw foSize-32px"></i>}
          iconText="HTML"
        />
        {/* CSS */}
        <Icon
          logo={<i className="fab fa-css3-alt fa-fw foSize-32px"></i>}
          iconText="CSS"
        />
        {/* Java */}
        <Icon
          logo={<i className="fab fa-java fa-fw foSize-32px"></i>}
          iconText="Java"
        />
        {/* Python */}
        <Icon
          logo={<i className="fab fa-python fa-fw foSize-32px"></i>}
          iconText="Python"
        />
        {/* C++ */}
        <Icon
          logo={<span className="foSize-16px foWeight-bold fa-cplusplus">C++</span>}
          iconText="C ++"
        />
        {/* Adobe XD */}
        <Icon
          logo={<span className="foSize-16px foWeight-bold fa-adobexd">XD</span>}
          iconText="Adobe XD"
        />
        {/* Gimp */}
        <Icon
          logo={<span className="foSize-16px foWeight-bold fa-gimp">Gimp</span>}
          iconText="Gimp"
        />
      </>
    )
  }
}

export default Skills;
