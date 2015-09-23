/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Project.css';
import withStyles from '../../decorators/withStyles';
import Overlay from '../Overlay'

@withStyles(styles)
class Project extends Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool
  };

  render() {
    return (
      <div className="Project"
        onClick={e => this.props.onClick(this.props)}
        data-active={this.props.isActive}>
        <Overlay />
        <div className="Project-caption">
          <h3 className="Project-title">{this.props.title}</h3>
          <p>{this.props.caption}</p>
        </div>
        <div className="Project-img">
          <img src={this.props.img} />
      </div>
      </div>
    );
  }
}

Component.defaultProps = {isActive: false};

export default Project;
