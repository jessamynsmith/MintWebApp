/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Index.css';
import withStyles from '../../decorators/withStyles';

import { ABOUT_US, LOCATION } from '../../api/sections';
import { SOUL, EQUATION } from '../../api/captions';

import HeroVideo from '../../components/HeroVideo';
import ContentSection from '../../components/ContentSection';
import OurWork from '../../components/OurWork';
import Header from '../../components/Header';
import IntroFeature from '../../components/IntroFeature';
import CaptionSection from '../../components/CaptionSection';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';

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
    const aboutus = ABOUT_US;

    this.context.onSetTitle(this.props.title);
    return (
      <div className="Index">
        <div className="Index-container">
          
          <Header />
          <HeroVideo />
          <IntroFeature />
          <ContentSection {...ABOUT_US} />
          <CaptionSection {...SOUL} />
          <ContentSection {...LOCATION} />
          <CaptionSection {...EQUATION} />
          <Projects />
          <OurWork />
          <Footer />

        </div>
      </div>
    );
  }

}

export default Index;
