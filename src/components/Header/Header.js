/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import withViewport from '../../decorators/withViewport';
import Navigation from '../../components/Navigation';
import NavigationTrigger from '../../components/NavigationTrigger';

@withViewport
@withStyles(styles)
class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      scrollTop: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', e => this.handleScroll(e));
  }

  render() {
    return (
      <header className="Header"
        data-small={this.state.logoSmall}
        data-nav-open={this.state.isNavOpen}>
        <div className="Header-inner">
          <img className="Logo" 
            src='images/logo-mint.png' />
          <NavigationTrigger onClick={
            e => {this.handleNavTirggerClick(e)}}
          isOpen={this.state.isNavOpen} />
          <Navigation isOpen={this.state.isNavOpen} />
        </div>
      </header>
    );
  }

  handleNavTirggerClick(e) {
    this.setState({isNavOpen: !this.state.isNavOpen});    
  }

  handleScroll(e) {
    this.setState({logoSmall: document.body.scrollTop > 0});
  }

}

export default Header;