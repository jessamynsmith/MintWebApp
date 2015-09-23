/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Footer.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Footer extends Component {

  render() {
    return (
      <footer className="Footer">
        <div className="Footer-inner section-padding">
          © 2015 Publicis Mint - Brand utility house. All Rights Reserved. Software by Mint. Designed by Mint.
        </div>
      </footer>
    );
  }
}

export default Footer;