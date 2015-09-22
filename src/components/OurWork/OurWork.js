/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './OurWork.css';
import withStyles from '../../decorators/withStyles';
import withViewport from '../../decorators/withViewport';

@withViewport
@withStyles(styles)
class OurWork extends Component {

  render() {
    return (
      <article className="OurWork section-padding">
        <header className="OurWork-text">
        	<h2>Our work</h2>
        	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat tristique nulla et tincidunt.</p>
        </header>
        <img src="images/logo-mint.png" />
        <img src="images/logos.png" />
      </article>
    );
  }

}

export default OurWork;