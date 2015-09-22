/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Button.css';
import withStyles from '../../decorators/withStyles';
import withViewport from '../../decorators/withViewport';

@withStyles(styles)
class Button extends Component {

  render() {
    return (
      <div className="Button">
        {this.props.value}
      </div>
    );
  }
}

export default Button;
