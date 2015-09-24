/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './IntroFeature.css';
import withStyles from '../../decorators/withStyles';
import withViewport from '../../decorators/withViewport';
import svg4everybody from 'svg4everybody';

@withViewport
@withStyles(styles)
class IntroFeature extends Component {

  componentDidMount() {
    svg4everybody();
  }

  render() {
    const introItems = [
      {
        title: 'Think',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada, mi scelerisque ullamcorper dictum, dui metus vestibulum tortor, in consequat.',
        icon: 'icon-cogs'
      },{
        title: 'Create',
        text: 'Cras malesuada, mi scelerisque ullamcorper dictum, dui metus vestibulum tortor, in consequat ligula purus id massa. Integer tincidunt mauris non aliquet lacinia.',
        icon: 'icon-lab'
      },{
        title: 'Improve',
        text: 'Integer tincidunt mauris non aliquet lacinia. Cras malesuada, mi scelerisque ullamcorper dictum, dui metus vestibulum tortor, in consequat ligula purus id massa.',
        icon: 'icon-loop2'
      }
    ];

    const intro = introItems.map((introItem, i) => {
      const icon = {
        __html: '<use xlink:href="svgs/svgdefs.svg#' + introItem.icon + '"></use>'
      };

      const inlineStyle = {
        animationDelay: (i * 300) + 300 + 'ms'
      };

      return <div key={i} 
        className="IntroFeature-item">
            <div className="wow tada"
              style={inlineStyle}>
              <svg viewBox="0 0 32 32" 
                dangerouslySetInnerHTML={icon}
                className="IntroFeature-svg"></svg>
            </div>
            <div className="IntroFeature-text">
              <h3 className="IntroFeature-title">{introItem.title}</h3>
              <p className="IntroFeature-caption">{introItem.text}</p>
            </div>
        </div>
      }
    );

    return (
      <article className="IntroFeature">
        <div className="IntroFeature-items">
          {intro}
        </div>
      </article>
    );
  }

}

export default IntroFeature;