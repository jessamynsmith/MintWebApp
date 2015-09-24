/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './ContentSection.css';
import withStyles from '../../decorators/withStyles';
import withViewport from '../../decorators/withViewport';

@withViewport
@withStyles(styles)
class ContentSection extends Component {

  static propTypes = {
    reverse: PropTypes.bool
  };

  render() {
    const imgClass = this.generateImageClass();
    
    const text = this.props.text.map(function(text, i) {
      return <p key={i}>{text}</p>
    });

    const inlineStyle = {
      animationDelay: '300ms'
    };


    return (
      <article className="ContentSection section-padding"
        data-reverse={this.props.reverse}>
        <div className="ContentSection-inner">
          <div className="ContentSection-content">
            <header className="ContentSection-text">
            	<h2>{ this.props.header.title }</h2>
            	<p>{ this.props.header.caption }</p>
            </header>
            { text }
          </div>
          <img className={imgClass}
            src={this.props.img}
            style={inlineStyle} />
        </div>
      </article>
    );
  }

  generateImageClass() {
    let imgClass = 'ContentSection-img wow';

    if(!this.props.reverse) {
      imgClass += ' fadeInRight'
    } else {
      imgClass += ' fadeInLeft'
    }
    
    return imgClass;
  }

}

ContentSection.defaultProps = { reverse: false };

export default ContentSection;
