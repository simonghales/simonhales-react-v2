import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const HighlightedProjectHeader = () => (
  <header className={classes.root}>
    <div className={classes.content}>
      <h2 className={classes.title}>Highlighted Projects</h2>
      <h3 className={classes.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam assumenda, blanditiiclasses.
      </h3>
    </div>
  </header>
)

export default HighlightedProjectHeader
