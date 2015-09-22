/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './AboutUs.css';
import withStyles from '../../decorators/withStyles';
import withViewport from '../../decorators/withViewport';

@withViewport
@withStyles(styles)
class AboutUs extends Component {

  render() {
    return (
      <article className="AboutUs section-padding">
        <div className="AboutUs-inner">
          <div className="AboutUs-content">
            <header className="AboutUs-text">
            	<h2>Get to know us</h2>
            	<p>At Publicis Mint we develop leading-edge brand utility ideas for clients across the globeOur office is located in Tel Aviv</p>
            </header>
            <p>The rules of the game have changed. Today&#039;s consumers are smarter, faster, and more impatient than ever.  At Mint we believe that by providing those demanding consumers with new utilities of high perceived value, brands can retain both interest and loyalty throughout more enduring relationships</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue augue, suscipit vel orci quis, condimentum euismod nisl. Aliquam vel erat eget nibh mollis imperdiet. Praesent fermentum tellus dolor. Fusce vel facilisis ex. Pellentesque rhoncus, diam sit amet tempor scelerisque, ipsum mi lobortis purus, et pulvinar ante libero eu ex.</p>
          </div>
        </div>
        <img className="AboutUs-img" src="images/forGood-Responsive.png" />
      </article>
    );
  }

}

export default AboutUs;
