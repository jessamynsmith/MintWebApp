/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './CaptionSection.css';
import withStyles from '../../decorators/withStyles';
import withViewport from '../../decorators/withViewport';
import Overlay from '../Overlay';

@withViewport
@withStyles(styles)
class CaptionSection extends Component {
  render() {
    const captionStyle = {
    	backgroundImage: 'url(' + this.props.img + ')'
    }

    const caption = this.props.caption.map((caption, i) => {
    	if(this.props.captionColorIndex === i) {
    		caption = <span key={i} className="pink">{ caption }</span>
    	} else {
    		caption = <span key={i}>{ caption }</span>
    	}
    	return caption;
    });

    return (
      <article className="CaptionSection">
        <Overlay />
        <div className="CaptionSection-inner section-padding">
        	<div className="CaptionSection-img" style={captionStyle}></div>
        	<blockquote className="CaptionSection-quote">
	        	{ caption }
	    	</blockquote>
        </div>
      </article>
    );
  }

}

export default CaptionSection;
