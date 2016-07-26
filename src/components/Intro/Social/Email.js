import React from 'react'
import classes from './Social.scss'
var    FontAwesome = require('react-fontawesome')
import cx from 'classnames'

class Email extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let className = cx(
      classes.root,
      classes.email,
      this.props.className
    );

    return (
      <a className={className} href={'mailto:' + this.props.data.url}>{this.props.data.url}</a>
    );

  }

}

Email.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default Email
