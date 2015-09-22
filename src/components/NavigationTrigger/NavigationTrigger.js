/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './NavigationTrigger.css';
import withStyles from '../../decorators/withStyles';
import withViewport from '../../decorators/withViewport';

@withViewport
@withStyles(styles)
class NavigationTrigger extends Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    isOpen: PropTypes.bool
  };

  render() {
    return (
      <div className="NavigationTrigger" 
        onClick={e => this.handleClick(e)}
        data-active={this.props.isOpen}>
          <span></span>
        </div>
    );
  }

  handleClick(e) {
    this.props.onClick(e)
  }

}

NavigationTrigger.defaultProps = { isOpen: false };

export default NavigationTrigger;