import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
const HighlightedProjectsData = require('../../../constants/HighlightedProjects.json')

class HighlightedProjectHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { title, description } = HighlightedProjectsData;

    return (
      <header className={classes.root}>
        <div className={classes.content}>
          <h2 className={classes.title}>{title}</h2>
          <h3 className={classes.subtitle}>
            {description}
          </h3>
        </div>
      </header>
    );
  }

}

export default HighlightedProjectHeader
