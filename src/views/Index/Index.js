/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Index.css';
import withStyles from '../../decorators/withStyles';
import HeroVideo from '../../components/HeroVideo';
import AboutUs from '../../components/AboutUs';
import OurWork from '../../components/OurWork';
import Header from '../../components/Header';
import IntroFeature from '../../components/IntroFeature';

@withStyles(styles)
class Index extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    this.context.onSetTitle(this.props.title);
    return (
      <div className="Index">
        <div className="Index-container">
          
          <Header />
          <HeroVideo />
          <IntroFeature />
          <AboutUs />
          <OurWork />
          <footer></footer>

        </div>
      </div>
    );
  }

}

export default Index;
