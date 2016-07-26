import React from 'react'
import classes from './Social.scss'
var    FontAwesome = require('react-fontawesome')
import cx from 'classnames'

class LinkedIn extends React.Component {

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
        <FontAwesome name='linkedin' />
      </a>
    );

  }

}

LinkedIn.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default LinkedIn
