/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './ProjectActive.css';
import withStyles from '../../decorators/withStyles';
import Overlay from '../Overlay'
import svg4everybody from 'svg4everybody';

@withStyles(styles)
class ProjectActive extends Component {

  static propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    caption: PropTypes.string,
    content: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {project: props.project || {}}
  }

  componentDidUpdate() {
    svg4everybody();
  }

  render() {
    const imgStyle = {
      backgroundImage: 'url(' + this.props.img + ')'
    }

    const icon = {
      __html: '<use xlink:href="svgs/svgdefs.svg#icon-cross"></use>'
    };

    const content = this.props.content.map((contentItem, i) => {
      if(contentItem.type === 'text') {
        return contentItem.text.map((string, idx) => {
            return <p key={idx}>{ string }</p>
        })
      } else {
        return contentItem.src.map((image, idx) => {
            return <img key={idx} src={image} />
        })
      }
    });

    return (
      <div className="ProjectActive">
        <span className="ProjectActive-close"
        onClick={e => this.props.onClose(e)}>
          <svg viewBox="0 0 32 32" 
            dangerouslySetInnerHTML={icon}></svg>
        </span>
        <div className="ProjectActive-inner">
          <div className="ProjectActive-img"
            style={imgStyle}>
              <Overlay />
              <h1>{this.props.title}</h1>
            </div>
            <div className="ProjectActive-content section-padding">
              <h3>{this.props.caption}</h3>
              { content }
            </div>
        </div>
      </div>
    );
  }
}

ProjectActive.defaultProps = {content: []};

export default ProjectActive;
