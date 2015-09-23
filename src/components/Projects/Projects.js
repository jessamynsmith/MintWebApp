/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import PROJECTS from '../../api/projects';
import styles from './Projects.css';
import withStyles from '../../decorators/withStyles';
import Project from '../Project';
import ProjectActive from '../ProjectActive';

@withStyles(styles)
class Projects extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		active: false,
  		activeProject: {}
  	}
  }

  render() {
  	const projects = PROJECTS.map((project, i) => {
  		return <Project key={i} 
  			{...project}
        isActive={this.state.activeProject.id === project.id}
  			onClick={project => this.handleOpen(project)} />
  	});

    return (
      <article className="Projects"
      	data-active={this.state.active}>
    	<div className="Projects-inner">
    		{ projects }
		</div>
		<div className="Project-active">
			<ProjectActive onClose={e => this.handleClose(e)}
				{...this.state.activeProject} />
		</div>
      </article>
    );
  }

  handleOpen(project) {
  	this.setState({
  		active: true,
  		activeProject: project
  	});
    setTimeout(() => {
      document.body.style.overflow = 'hidden';
    }, 200);
  }

  handleClose(e) {
  	document.body.style.overflow = 'auto';
  	this.setState({
      active: false,
      activeProject: {}
    });	
  }
}

export default Projects;
