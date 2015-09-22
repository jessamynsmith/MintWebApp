/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Navigation.css';
import withStyles from '../../decorators/withStyles';
import withViewport from '../../decorators/withViewport';

@withViewport
@withStyles(styles)
class Navigation extends Component {

  static propTypes = {
    isOpen: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {open: props.isOpen};
  }

  render() {
    const navItems = [
      'about',
      'our work',
      'Experience',
      'key value'
    ];

    const navigation = navItems.map((navItem, i) => {
      const transitionDelay = 0.05;
      const inlineStyle = { 
        transitionDelay: transitionDelay * i + 's' 
      };

      return <li key={i} 
        className="Navigation-item"
        style={inlineStyle}>{navItem}</li>
      }
    );

    return (
      <nav className="Navigation" 
        data-open={this.props.isOpen}>
        <ul className="Navigation-items list-inline">
          {navigation}
        </ul>
      </nav>
    );
  }

}

Navigation.defaultProps = { isOpen: false };

export default Navigation;