/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './HeroVideo.css';
import withStyles from '../../decorators/withStyles';
import withViewport from '../../decorators/withViewport';
import Button from '../Button';

@withViewport
@withStyles(styles)
class HeroVideo extends Component {

  render() {
    const isTablet = this.props.viewport.width <= 768;
    const video = <video className="HeroVideo-vid" 
    	src="videos/Laptop_vid.mov" 
    	autoPlay="true" 
    	loop="true"></video>
    
    const poster = <img className="HeroVideo-poster"
		  src="images/hero-poster.jpg" />

    return (
      <div className="HeroVideo">
        <div className="HeroVideo-text">
        	<h1>Publicis Mint</h1>
        	<span>Brand utility house</span>
          <Button value="contact us" />
        </div>
        <div className="HeroVideo-overlay"></div>
        {!isTablet ? video : poster}
      </div>
    );
  }

}

export default HeroVideo;
