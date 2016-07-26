import React from 'react'
import classes from './Social.scss'
var    FontAwesome = require('react-fontawesome')
import cx from 'classnames'

class Twitter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let className = cx(
      classes.root,
      classes.social,
      this.props.className
    );

    return (
      <a className={className} href={this.props.data.url} target="_blank">
        <FontAwesome name='twitter' />
      </a>
    );

  }

}

Twitter.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default Twitter
