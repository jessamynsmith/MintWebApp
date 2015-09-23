/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Overlay.css';
import withStyles from '../../decorators/withStyles';
import withViewport from '../../decorators/withViewport';

@withViewport
@withStyles(styles)
class Overlay extends Component {

  render() {
    return (
      <div className="Overlay"></div>
    );
  }

}

export default Overlay;
